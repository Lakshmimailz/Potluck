import { LukkerUserInfo, Allergen } from "./user-access-request"

export type UpdateDish = {
  potlukkId: number
  dishes: Dish[]
}

export type Dish = {
    name: string
    description: string
    broughtBy: number
    serves: number
    allergens: Allergen[]
}

export type Invitation = {
    status: InvitationStatus
    potlukker: LukkerUserInfo
}
  

export enum InvitationStatus {
    ACCEPTED = "ACCEPTED",
    MAYBE = "MAYBE",
    DECLINED = "DECLINED",
    PENDING = "PENDING"
}
  

export enum NotificationKind {
    DISH_ADDED = "DISH_ADDED",
    DISH_REMOVED = "DISH_REMOVED",
    POTLUKK_ALTERED = "POTLUKK_ALTERED",
    POTLUKK_CANCELED = "POTLUKK_CANCELED",
    INVITE_ACCEPTED = "INVITE_ACCEPTED",
    INVITE_DECLIED = "INVITE_DECLIED",
    INVITE_SENT = "INVITE_SENT"
}
  
export type Potlukk = {
    potlukkId: number
    details: PotlukkDetails
    host: LukkerUserInfo
    invitations: Invitation[]
    dishes: Dish[]
}
  
export type PotlukkCreationInput = {
    details: PotlukkDetailsCreationInput
    hostId: number
}
  
export type PotlukkDetails = {
    title: string
    location: string
    status: PotlukkStatus
    description: string
    isPublic: boolean
    time: number
    tags: string[]
}
  
export type PotlukkDetailsCreationInput = {
    title: string
    location: string
    status: PotlukkStatus
    description: string
    isPublic: boolean
    time: number
    tags: string[]
}
  
export type PotlukkDetailsSwapInput = {
    potlukkId: number
    title: string
    location: string
    status: PotlukkStatus
    description: string
    isPublic: boolean
    time: number
    tags: string[]
}
  
export type PotlukkNotification = {
    eventId: number
    timestamp: number
    kind: NotificationKind
    description: string
    affectedPotlukkId: number
    createdByUser: number
}
  
export type PotlukkNotificationInput = {
    kind: NotificationKind
    description: string
    affectedPotlukkId: number
    createdByUser: number
}
  
export enum PotlukkStatus {
    SCHEDULED = "SCHEDULED",
    CANCELLED = "CANCELLED"
}

export type InvitationSendInput = {
  potlukkId: number
  potlukkerId: number
}

export async function createAPotluck(newPotluck:PotlukkCreationInput):Promise<Potlukk> {

    const query = `mutation CreatePotluck($potluckInput: PotlukkCreationInput!){
        createPotlukk(input:$potluckInput){
          ...on Potlukk{
            potlukkId
                details{
                  title
                  location
                  status
                  description
                  isPublic
                  time
                  tags
                }
                host{
                  userId
                  username
                  fname
                  lname
                  allergies
                }
          }
        }
      }`

    const variables = {potluckInput:newPotluck};
    const requestBody = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    const potluck:Potlukk = responseBody.data.createPotlukk;
    console.log(potluck);
    return potluck

    
}

export async function inviteALukker(invitation:InvitationSendInput):Promise<Potlukk> {
  const newNotice:PotlukkNotificationInput = {
    kind: NotificationKind.INVITE_SENT,
    description: " has been invited to ",
    affectedPotlukkId: 0,
    createdByUser: 0
  }
  let stringHolder: string | undefined = "";

    const query = `mutation inviteLukker($invitee:InvitationSendInput!){
        sendInvite(input:$invitee){
          ...on Potlukk{
            potlukkId
                details{
                  title
                  location
                  status
                  description
                  isPublic
                  time
                  tags
                }
                host{
                  userId
                  username
                  fname
                  lname
                  allergies
                }
                invitations{
                  status
                  potlukker{
                    userId
                    username
                    fname
                    lname
                    allergies
                  }
                }
                dishes{
                  name
                  description
                  broughtBy
                  serves
                  allergens
                }
            }
        }
      }`


    const variables = {potluckInput:invitation};
    const requestBody = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    console.log(responseBody);
    const potluck:Potlukk = responseBody.data.sendInvite;
    newNotice.affectedPotlukkId = potluck.potlukkId;
    newNotice.createdByUser = potluck.host.userId;
    const inviteHolder: Invitation | undefined = potluck.invitations.find(a=> a.potlukker.userId === invitation.potlukkerId)
    if(inviteHolder === undefined){
      newNotice.description += potluck.details.title;
      addNotification(newNotice);
    }else{
      stringHolder = inviteHolder.potlukker.fname + " " + inviteHolder.potlukker.lname;
      newNotice.description = stringHolder+newNotice.description;
      newNotice.description += potluck.details.title;
      addNotification(newNotice);
    }
    return potluck
}


export async function addNotification(newNotice:PotlukkNotificationInput):Promise<PotlukkNotification> {

  const query = `mutation AddNotices($noticeInputs:PotlukkNotificationInput!){
    addNotification(input:$noticeInputs){
      eventId
      timestamp
      kind
      description
      affectedPotlukkId
      createdByUser
    }
  }`

  

  const variables = {potluckInput:newNotice};
  const requestBody = JSON.stringify({query,variables});
  const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
  const responseBody = await httpResponse.json();
  const notice:PotlukkNotification = responseBody.data.addNotification;
  console.log(notice)
  return notice
}

export async function findNotification(userID:number):Promise<PotlukkNotification[]> {

  const query = `query FindNotices($lukkerIdInput: Int!){
    notifications(relaventLukkerId:$lukkerIdInput){
      eventId
      timestamp
      kind
      description
      affectedPotlukkId
      createdByUser
    }
  }`

  

  const variables = {lukkerIdInput:userID};
  const requestBody = JSON.stringify({query,variables});
  const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
  const responseBody = await httpResponse.json();
  const notice:PotlukkNotification[] = responseBody.data.notifications;
  return notice
}

export async function findAllPotlucksHost():Promise<Potlukk[]> {

  const query = `query FindAllPotlucks{
    potlukks{
      potlukkId
      details{
        title
      }
      host{
        userId
        username
      }
    }
  }`

  const requestBody = JSON.stringify({query});
  const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
  const responseBody = await httpResponse.json();
  const potluck:Potlukk[] = responseBody.data.potlukks;
  return potluck 
}


export async function findAllPotlucksInvitee():Promise<Potlukk[]> {

  const query = `query FindAllPotlucks{
    potlukks{
      potlukkId
      details{
        title
      }
      invitations{
        status
        potlukker{
          userId
          username
        }
      }
    }
  }`

  const requestBody = JSON.stringify({query});
  const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
  const responseBody = await httpResponse.json();
  const potluck:Potlukk[] = responseBody.data.potlukks;
  return potluck 
}


export async function dishesAddAndUpdate(theDish: UpdateDish):Promise<Potlukk> {

  const query = `mutation AddADish($dishInput:DishesSwapInput!){
    swapPotlukkDishes(input:$dishInput){
      potlukkId
      details{
        title
        description
      }
      host{
        username
      }
      invitations{
        potlukker{
          username
        }
        status
      }
    }
  }`


  const variables = {dishInput:theDish};
  const requestBody = JSON.stringify({query,variables});
  const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
  const responseBody = await httpResponse.json();
  const potluck:Potlukk = responseBody.data.potlukks;
  return potluck 
}
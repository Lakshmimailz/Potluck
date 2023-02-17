import { LukkerUserInfo, Allergen } from "./user-access-request"



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
    INVITE_SEED = "INVITE_SEED"
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
    return potluck

    
}

export type InvitationSendInput = {
  potlukkId: number
  potlukkerId: number
}

export async function inviteALukker(invitation:InvitationSendInput):Promise<Potlukk> {

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

    console.log(invitation)

    const variables = {potluckInput:invitation};
    const requestBody = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    console.log(responseBody);
    const potluck:Potlukk = responseBody.data.sendInvite;
    console.log(potluck)
    return potluck
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
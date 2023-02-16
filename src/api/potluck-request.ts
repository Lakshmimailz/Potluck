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

export type GroupInvite = {
    invites: InvitationSendInput[]
}


export type InvitationSendInput = {
    potlukkId: number
    potlukkerId: number
  }
//invitation:GroupInvite

export async function inviteALukker():Promise<Potlukk> {

    const luk1: InvitationSendInput = {
        potlukkId:193723,
        potlukkerId:14658
        
    }
    const luk2: InvitationSendInput = {
        potlukkId:193723,
        potlukkerId:89907
        
    }
    const luk3: InvitationSendInput = {
        potlukkId:193723,
        potlukkerId: 70628
        
    }

    const AllLukker: GroupInvite = {
        invites:[]
    }

    AllLukker.invites.push(luk1);
    AllLukker.invites.push(luk2);
    AllLukker.invites.push(luk3);

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

      console.log(AllLukker)

    const variables = {potluckInput:AllLukker};
    const requestBody = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    console.log(responseBody);
    const potluck:Potlukk = responseBody.data.sendInvite;
    console.log(potluck)
    return potluck

    
}
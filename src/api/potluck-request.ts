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

//newPotluck:PotlukkDetailsCreationInput

export async function createAPotluck():Promise<{potlukkId:number}> {
    const NewPL: PotlukkCreationInput = {
        details:{
            title: "Potluck2",
            location: "",
            status: PotlukkStatus.SCHEDULED,
            description: "First is the worst. Second is the best",
            isPublic: true,
            time: 1676934000,
            tags: []
        },
        hostId: 10111
    }


    const query = `mutation CreatePotluck($potluckInput: PotlukkCreationInput!){
        createPotlukk(input:$potluckInput){
          potlukkId
        }
      }`

    const variables = {potluckInput:NewPL};
    const requestBody = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    const potluck = responseBody.data

    return potluck

    
}
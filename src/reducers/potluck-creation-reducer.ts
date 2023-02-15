import { Allergen } from "../api/user-access-request"
import { Potlukk } from "../api/potluck-request"

export type PotlukkCreationInput = {
    details: PotlukkDetailsCreationInput
    hostId: number
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

export enum PotlukkStatus {
    SCHEDULED = "SCHEDULED",
    CANCELLED = "CANCELLED"
}


export type PotlukkCreationInputState={
    input: PotlukkCreationInput
}


export type SetHostIdAction={type:"SET_HOST_ID",payload:number};
export type SetTitleAction={type:"SET_TITLE",payload:string};
export type SetLocationAction={type:"SET_LOCATION",payload:string};
export type SetDescriptionAction={type:"ADD_DESCRIPTION",payload:string};

export type InvitationlukkerAction={type:"INVITE_TO_POTLUKK",payload:string};
export type RemovePotlukkerAction={type:"REMOVE_FROM_POTLUKK",payload:string};



export type potlukkCreationInputAction = SetHostIdAction | SetTitleAction | SetLocationAction | SetDescriptionAction |
 InvitationlukkerAction | RemovePotlukkerAction

//the purpose of theis reducer is to collect all information that will be used to 1. make a reuest to create the potlukked
//2. once the potlukk is created you have the IDof the potlukk to send the invitations
export function CreationInputReducer(state:PotlukkCreationInputState,action: potlukkCreationInputAction):PotlukkCreationInputState{
    const newState:PotlukkCreationInputState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_HOST_ID":{
            newState.input.hostId=action.payload;
            return newState;
        }
        case "SET_TITLE":{
            newState.input.details.title=action.payload;
            return newState;
        }
        case "SET_LOCATION":{
            newState.input.details.location=action.payload;
            return newState;
        }
        case "ADD_DESCRIPTION":{
            newState.input.details.description=action.payload;
            return newState;
        }

        // We need to see all the potlukkers.
        // case "INVITE_TO_POTLUKK":{
        //     newState.potlukkersToInvite.push(action.payload)
        //     return newState
        // }
        // case "REMOVE_FROM_POTLUKK":{
        //     newState.potlukkersToRemove = newState.potlukkersToInvite.filter(id => id !== action.payload)
        //     return newState
        // }
        

        default:return newState;
    }


}

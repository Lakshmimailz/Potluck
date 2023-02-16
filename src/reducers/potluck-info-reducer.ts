import { LukkerUserInfo, UserList } from "../api/user-access-request"

export type PotlukkCreationInputState={
    hostId:number
    title:string
    location:string
    description:string 
    time:number
    isPublic: boolean
    
    potlukkerInvited:UserList[]
}

export type InvitationlukkerAction={type:"INVITE_TO_POTLUKK",payload:UserList};
export type RemovePotlukkerAction={type:"REMOVE_FROM_POTLUKK",payload:UserList};
export type SetServingsAction={type:"SET_SERVINGS",payload:number};

export type  potlukkCreationInvitationAction =InvitationlukkerAction | RemovePotlukkerAction 

export function CreationInputReducer(state:PotlukkCreationInputState,action: potlukkCreationInvitationAction):PotlukkCreationInputState{
    const newState:PotlukkCreationInputState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "INVITE_TO_POTLUKK":{
            newState.potlukkerInvited.push(action.payload)
            return newState
        }
        case "REMOVE_FROM_POTLUKK":{
            newState.potlukkerInvited = newState.potlukkerInvited.filter((lukker: { userId: number }) => lukker.userId !== action.payload.userId)
            return newState;
        }
        
        default:return newState;
    }

}
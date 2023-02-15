export type PotlukkCreationInputState={
    hostId:number
    title:string
    location:string
    description:string 
    time:number
    isPublic: boolean
    potlukkerInvited:{potlukkerId:number, username:string}[]
}

export type InvitationlukkerAction={type:"INVITE_TO_POTLUKK",payload:{potlukkerId:number, username:string}};
export type RemovePotlukkerAction={type:"REMOVE_FROM_POTLUKK",payload:{potlukkerId:number, username:string}};

export type  potlukkCreationInputAction =InvitationlukkerAction | RemovePotlukkerAction

export function CreationInputReducer(state:PotlukkCreationInputState,action: potlukkCreationInputAction):PotlukkCreationInputState{
    const newState:PotlukkCreationInputState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "INVITE_TO_POTLUKK":{
            newState.potlukkerInvited.push(action.payload)
            return newState
        }
        case "REMOVE_FROM_POTLUKK":{
            newState.potlukkerInvited = newState.potlukkerInvited.filter(lukker => lukker.potlukkerId !== action.payload.potlukkerId)
            return newState
        }
        

        default:return newState;
    }

}
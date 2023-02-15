import { Allergen } from "../api/user-access-request"

export type HostPage ={
    
        userId: number
        username: string
        fname: string
        lname: string
        
    }

export type PotlukkCreationInputState={
    hostId:number
    title:string
    location:string
    description:string 
    time:number
    isPublic: boolean
   
}


export type potlukkCreationHostIdAction={type:"SET_HOST_ID",payload:number};
export type potlukkCreationTitleAction={type:"SET_TITLE",payload:string};
export type potlukkCreationLocationAction={type:"SET_LOCATION",payload:string};
export type potlukkCreationDescriptionAction={type:"ADD_DESCRIPTION",payload:string};




export type potlukkCreationInputAction = potlukkCreationHostIdAction | potlukkCreationTitleAction | potlukkCreationLocationAction | potlukkCreationDescriptionAction 


//the purpose of theis reducer is to collect all information that will be used to 1. make a reuest to create the potlukked
//2. once the potlukk is created you have the IDof the potlukk to send the invitations
export function CreationInputReducer(state:PotlukkCreationInputState,action: potlukkCreationInputAction):PotlukkCreationInputState{
    const newState:PotlukkCreationInputState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_HOST_ID":{
            newState.hostId=action.payload;
            return newState;
        }
        case "SET_TITLE":{
            newState.title=action.payload;
            return newState;
        }
        case "SET_LOCATION":{
            newState.location=action.payload;
            return newState;
        }
        case "ADD_DESCRIPTION":{
            newState.description=action.payload;
            return newState;
        }

        // We need to see all the potlukkers.
       
        

        default:return newState;
    }


}

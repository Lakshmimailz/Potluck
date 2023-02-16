import {  PotlukkCreationInput, PotlukkStatus } from "../api/potluck-request"

export type PotlukkCreationInputState={
    input: PotlukkCreationInput
}

export type SetHostIdAction = {type:"SET_HOST_ID", payload:number};
export type SetTitleAction = {type:"SET_TITLE", payload:string};
export type SetLocationAction = {type:"SET_LOCATION", payload:string};
export type SetStatusAction = {type: "SET_STATUS", payload: PotlukkStatus};
export type SetDescriptionAction = {type:"SET_DESCRIPTION", payload:string};
export type SetPublicAction = {type:"SET_PUBLIC_TAG", payload:boolean};
export type SetDateAndTimeAction = {type:"SET_DATE_TIME", payload:number};
export type SetTagAction = {type:"ADD_TAG", payload:string};
export type RemoveTagAction = {type:"REMOVE_TAG", payload:string};



export type potlukkCreationInputAction = SetHostIdAction | SetTitleAction | SetLocationAction | SetStatusAction | SetDescriptionAction |
SetPublicAction | SetDateAndTimeAction | SetTagAction | RemoveTagAction

//the purpose of theis reducer is to collect all information that will be used to 1. make a reuest to create the potlukked
//2. once the potlukk is created you have the IDof the potlukk to send the invitations
export function potluckCreationReducer(state:PotlukkCreationInputState,action: potlukkCreationInputAction):PotlukkCreationInputState{
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
        case "SET_STATUS":{
            newState.input.details.status = action.payload;
            return newState
        }
        case "SET_DESCRIPTION":{
            newState.input.details.description=action.payload;
            return newState;
        }
        case "SET_PUBLIC_TAG":{
            newState.input.details.isPublic=action.payload;
            return newState;
        }
        case "SET_DATE_TIME":{
            newState.input.details.time=action.payload;
            return newState;
        }
        case "ADD_TAG":{
            const tagList:string | undefined = newState.input.details.tags.find(t => t === action.payload);
            if (tagList === undefined){
                newState.input.details.tags.push(action.payload);
                return newState;
            }else{
                return newState;
            }
        }
        case "REMOVE_TAG":{
            const tagList:string | undefined = newState.input.details.tags.find(t => t === action.payload);
            if (tagList === undefined){
                return newState;
            }else{
                newState.input.details.tags = newState.input.details.tags.filter(t => t !== action.payload);
                return newState;
            }
        }
    }
}

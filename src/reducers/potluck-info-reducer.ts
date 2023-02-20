import { LukkerUserInfo, UserList } from "../api/user-access-request"

export type InvitationSendInputState = {
    potlukkId: number
    potlukkerId: number
  }

export type SetPotluckIdAction={type:"SET_POTLUCK_ID",payload:number};
export type SetPotluckerIdAction={type:"SET_POTLUCKER_ID",payload:number};

export type  potlukkCreationInvitationAction = SetPotluckIdAction | SetPotluckerIdAction 

export function inviteInputReducer(state:InvitationSendInputState,action: potlukkCreationInvitationAction):InvitationSendInputState{
    const newState:InvitationSendInputState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_POTLUCK_ID":{
            newState.potlukkId = action.payload;
            return newState
        }
        case "SET_POTLUCKER_ID":{
            newState.potlukkerId = action.payload;
            console.log(newState);
            return newState;
        }
    }

}
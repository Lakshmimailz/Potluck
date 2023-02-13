import { stringify } from "querystring"
import { Allergen } from "../api/potluck-request"




export type UserSignIn = {
    username: string
    password: string
}

export type LukkerUserInfo = {
    userId: number
    username: string
    fname: string
    lname: string
    allergies: [Allergen]
}

export type LukkerUserCreation = {
    username: string
    password: string
    fname: string
    lname: string
    allergies: Allergen[]
}

export type RegistrationState ={
    userInfo:LukkerUserCreation
    
}
export type AddUserNameAction ={type:"SET_USERNAME", payload:string};
export type AddFirstNameAction ={type:"SET_FIRSTNAME", payload:string};
export type AddLastNameAction ={type:"SET_LASTNAME", payload:string};
export type AddMilkAllergiesAction ={type:"SET_MILKALLERGIES" };
export type AddEggAllergiesAction ={type:"SET_EGGALLERGIES"};
export type AddFishAllergiesAction ={type:"SET_FISHALLERGIES"};
export type AddShellfishAllergiesAction ={type:"SET_SHELLFISHALLERGIES"};
export type AddSoyAllergiesAction ={type:"SET_SOYALLERGIES"};
export type AddWheatAllergiesAction ={type:"SET_WHEATALLERGIES"};
export type AddTreenutAllergiesAction ={type:"SET_TREENUTALLERGIES"};

export type LukkerUserInfoAction =AddUserNameAction | AddFirstNameAction | AddLastNameAction | AddAllergiesAction

export function todoReducer(state:RegistrationState, action:LukkerUserInfoAction) :RegistrationState{
    const nextState: RegistrationState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_USERNAME":{
            nextState.userInfo.username=action.payload;
            return nextState;
        }
        case "SET_MILKALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.MILK)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.MILK);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.MILK);
                return nextState;
            }

        }

    }

}
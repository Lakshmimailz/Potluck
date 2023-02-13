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

export type LukkerUserInfoAction =AddUserNameAction | AddFirstNameAction | AddLastNameAction | AddMilkAllergiesAction | AddEggAllergiesAction |
AddFishAllergiesAction | AddShellfishAllergiesAction | AddSoyAllergiesAction | AddWheatAllergiesAction | AddTreenutAllergiesAction

export function todoReducer(state:RegistrationState, action:LukkerUserInfoAction) :RegistrationState{
    const nextState: RegistrationState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_USERNAME":{
            nextState.userInfo.username=action.payload;
            return nextState;
        }
       
        case "SET_FIRSTNAME":{
            nextState.userInfo.fname=action.payload;
            return nextState;
        }
        case "SET_LASTNAME":{
            nextState.userInfo.lname=action.payload;
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
        case "SET_EGGALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.EGG)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.EGG);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.EGG);
                return nextState;
            }
        }
        case "SET_FISHALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.FISH)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.FISH);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.FISH);
                return nextState;
            }
        }
        case "SET_SHELLFISHALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.SHELLFISH)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.SHELLFISH);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.SHELLFISH);
                return nextState;
            }
        }
        case "SET_SOYALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.SOY)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.SOY);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.SOY);
                return nextState;
            }
        }
        case "SET_WHEATALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.WHEAT)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.WHEAT);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.WHEAT);
                return nextState;
            }
        }
        case "SET_TREENUTALLERGIES":{

            if(nextState.userInfo.allergies.includes(Allergen.TREENUT)){
                nextState.userInfo.allergies = nextState.userInfo.allergies.filter(a => a !== Allergen.TREENUT);
                return nextState
            }else{
                nextState.userInfo.allergies.push(Allergen.TREENUT);
                return nextState;
            }
        }


    }

}
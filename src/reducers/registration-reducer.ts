import { Allergen, LukkerUserCreation } from "../api/potluck-request"

export type RegistrationState ={
    userInfo:LukkerUserCreation
    confirmedPassword: string
}
export type SetUserNameAction ={type:"SET_USERNAME", payload:string};
export type SetFirstNameAction ={type:"SET_FIRSTNAME", payload:string};
export type SetLastNameAction ={type:"SET_LASTNAME", payload:string};
export type SetPasswordAction ={type:"SET_PASSWORD", payload:string};
export type SetConfirmPasswordAction ={type:"SET_CONFIRM_PASSWORD", payload:string};
export type SetMilkAllergiesAction ={type:"SET_MILKALLERGIES" };
export type SetEggAllergiesAction ={type:"SET_EGGALLERGIES"};
export type SetFishAllergiesAction ={type:"SET_FISHALLERGIES"};
export type SetShellfishAllergiesAction ={type:"SET_SHELLFISHALLERGIES"};
export type SetSoyAllergiesAction ={type:"SET_SOYALLERGIES"};
export type SetWheatAllergiesAction ={type:"SET_WHEATALLERGIES"};
export type SetTreenutAllergiesAction ={type:"SET_TREENUTALLERGIES"};

export type LukkerUserInfoAction = SetUserNameAction | SetFirstNameAction | SetLastNameAction | SetPasswordAction |SetConfirmPasswordAction| SetMilkAllergiesAction | SetEggAllergiesAction |
SetFishAllergiesAction | SetShellfishAllergiesAction | SetSoyAllergiesAction | SetWheatAllergiesAction | SetTreenutAllergiesAction

export function registrationReducer(state:RegistrationState, action:LukkerUserInfoAction) :RegistrationState{
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
        case "SET_PASSWORD":{
            nextState.userInfo.password=action.payload;
            return nextState;
        }
        case "SET_CONFIRM_PASSWORD":{
            nextState.confirmedPassword=action.payload;
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
import { Action } from "@remix-run/router";
import { Dish } from "../api/potluck-request";
import { Allergen } from "../api/user-access-request";

export type UpdateDishState ={
    potlukkId: number
    dish: Dish
    dishList: Dish[]

}
export type SetPotluckIdAction={type:"SET_POTLUCK_ID",payload:number};
export type SetDishNameAction={type:"SET_DISH_NAME",payload:string};
export type SetDishDescriptionAction={type:"SET_DISH_DESCRIPTION",payload:string};
export type SetServingsAction={type:"SET_SERVINGS",payload:number};
export type SetAllergenAction={type:"SET_ALLERGEN",payload:Allergen};
export type SetAddDishAction={type:"ADD_DISH",payload:Dish[]};
export type SetUpdateDishAction={type:"UPDATE_DISH",payload:Dish[]};

export type CreateDishFromFormAction = {type:"CREATE_DISH_FROM_FORM", payload: Dish};
export type RequestPopulateDishesAction = {type:"REQUEST_POPULATE_DISHES", payload: number};
export type RequestSaveDishesAction = {type:"REQUEST_SAVE_DISHES", payload: number};

export type UpdateDishAction =SetPotluckIdAction | SetDishNameAction | SetDishDescriptionAction | SetServingsAction | SetAllergenAction
|SetAddDishAction | SetUpdateDishAction | CreateDishFromFormAction | RequestPopulateDishesAction | RequestSaveDishesAction

export function UpdateDishReducer(state:UpdateDishState, action:UpdateDishAction): UpdateDishState{

    const nextState:UpdateDishState=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case"SET_POTLUCK_ID":{
            nextState.potlukkId=action.payload;
            return nextState;
        }
        case"SET_DISH_NAME":{
            nextState.dish.name=action.payload;
            return nextState;
        }
        case"SET_DISH_DESCRIPTION":{
            nextState.dish.description=action.payload;
            return nextState;
        }
        case "SET_SERVINGS":{
            nextState.dish.serves=action.payload;
            return nextState;
        }
        case "SET_ALLERGEN":{
            const allergenitem=action.payload;

            if(nextState.dish.allergens.includes(allergenitem)){
                nextState.dish.allergens = nextState.dish.allergens.filter(a => a !== allergenitem);
                return nextState
            }else{
                nextState.dish.allergens.push(allergenitem);
                return nextState;
            }
        }
        case "ADD_DISH":{
            nextState.dishList=action.payload;
            return nextState;
        }
        case "UPDATE_DISH":{
            nextState.dishList=action.payload;
            return nextState;   
        }

        default:return nextState;
        }
       
    }

      

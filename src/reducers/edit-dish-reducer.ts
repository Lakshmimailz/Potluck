import { Action } from "@remix-run/router";
import { Dish } from "../api/potluck-request";
import { Allergen } from "../api/user-access-request";

export type UpdateDishState ={
    potlukkId: number
    dish: Dish
    dishes: Dish[]

}
export type SetPotluckIdAction={type:"SET_POTLUCK_ID",payload:number};
export type SetDishNameAction={type:"SET_DISH_NAME",payload:string};
export type SetDishDescriptionAction={type:"SET_DISH_DESCRIPTION",payload:string};
export type SetServingsAction={type:"SET_SERVINGS",payload:number};
export type SetAllergenAction={type:"SET_ALLERGEN",payload:Allergen};
export type SetAddDishAction={type:"ADD_DISH"};
export type SetUpdateDishAction={type:"UPDATE_DISH",payload:Dish};
export type RemoveDishAction={type:"REMOVE_DISH",payload:Dish};

export type CreateDishFromFormAction = {type:"CREATE_DISH_FROM_FORM", payload: Dish};
export type RequestPopulateDishesAction = {type:"REQUEST_POPULATE_DISHES", payload: Dish};
export type RequestSaveDishesAction = {type:"REQUEST_SAVE_DISHES", payload: Dish};

export type UpdateDishAction =SetPotluckIdAction | SetDishNameAction | SetDishDescriptionAction | SetServingsAction | SetAllergenAction
|SetAddDishAction | SetUpdateDishAction | RemoveDishAction |CreateDishFromFormAction | RequestPopulateDishesAction | RequestSaveDishesAction

export function UpdateDishReducer(state:UpdateDishState = {potlukkId:0, dish:{name: "",
    description: "",
    broughtBy: 0,
    serves: 0,
    allergens: []},
 dishes:[]}, action:UpdateDishAction): UpdateDishState{
 
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
                return nextState;
            }else{
                nextState.dish.allergens.push(allergenitem);
                return nextState;
            }
        }
        case "ADD_DISH":{
            nextState.dishes.push(nextState.dish);
            return nextState;
        }
        case "UPDATE_DISH":{
            if(nextState.dishes.includes(action.payload)){
                nextState.dishes=nextState.dishes.filter(a=>a.name!==action.payload.name);
                return nextState;
            }else{
                nextState.dishes.push(action.payload);
                return nextState;
            }           
        }
        case "REMOVE_DISH":{
             nextState.dishes=nextState.dishes.filter(a=> a!== action.payload);
             return nextState;
        }

        default:return nextState;
        }
       
    }

      

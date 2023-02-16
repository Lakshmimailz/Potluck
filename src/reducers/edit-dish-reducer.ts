import { Action } from "@remix-run/router";

export type UpdateDishState ={
    UpdateDishState: any;
    name: string,
    description: string,
    servings: number,
    allergens: string[]
}
export type SetDishNameAction={type:"SET_DISH_NAME",payload:string};
export type SetDishDescriptionAction={type:"SET_DISH_DESCRIPTION",payload:string};
export type SetServingsAction={type:"SET_SERVINGS",payload:number};
export type SetAllergenAction={type:"SET_ALLERGEN",payload:string};

export type UpdateDishAction =SetDishNameAction | SetDishDescriptionAction | SetServingsAction | SetAllergenAction

export function UpdateDishReducer(state:UpdateDishState, action:UpdateDishAction): UpdateDishState{

    const nextState:UpdateDishState=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case"SET_DISH_NAME":{
            nextState.name=action.payload;
            return nextState;
        }
        case"SET_DISH_DESCRIPTION":{
            nextState.description=action.payload;
            return nextState;
        }
        case "SET_SERVINGS":{
            nextState.servings=action.payload;
            return nextState;
        }
        case "SET_ALLERGEN":{
            const allergenitem=action.payload;
            if(nextState.allergens.includes(allergenitem)){
                nextState.allergens = nextState.allergens.filter(a => a !== allergenitem);
                return nextState
            }else{
                nextState.allergens.push(allergenitem);
                return nextState;
            }

        }

        default:return nextState;
        }
       
    }

      

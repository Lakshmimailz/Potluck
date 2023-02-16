import { useReducer } from "react";
import { UpdateDishReducer, UpdateDishState } from "../../reducers/edit-dish-reducer";
import { CreationInputReducer, PotlukkCreationInputState } from "../../reducers/potluck-info-reducer";




const initialState:UpdateDishState= {
    name: "",
    description: "",
        servs: 0,
    allergens: []

}
export function BringDish() {
   const [UpdateDishState, dispatch] =  useReducer(UpdateDishReducer, initialState);


return <>
   <fieldset>
    <div>
       <h2>Bring/Edit Dish</h2>
       <label htmlFor="name">Name</label>
       <input id="name" type="text" required onChange={e => dispatch({ type: "SET_DISH_NAME", payload: e.target.value })} />

       <label htmlFor="description">Description</label>
       <input id="description" type="text" required onChange={e => dispatch({ type: "SET_DISH_DESCRIPTION", payload: e.target.value })} />

       <label htmlFor="servings">Serves</label>
       <input id="description" type="text" required onChange={e => dispatch({ type: "SET_SERVINGS", payload:Number( e.target.value) })} />
      
      <h4>Allergens</h4>
      <label htmlFor="Milk">MILK</label>
      <input type="checkbox" name="Milk"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="Egg">EGG</label>
      <input type="checkbox" name="Egg"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="Fish">FISH</label>
      <input type="checkbox" name="Fish"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="ShellFish">SHELLFISH</label>
      <input type="checkbox" name="ShellFish"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="Soy">SOY</label>
      <input type="checkbox" name="Soy"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="Wheat">WHEAT</label>
      <input type="checkbox" name="Wheat"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />
      <label htmlFor="TreeNuts">TREENUTS</label>
      <input type="checkbox" name="TreeNuts"  onChange={()=>dispatch({type:"SET_ALLERGEN",payload:"string"})} />

      <button>Complete</button>
    </div>
   </fieldset>




</>
}
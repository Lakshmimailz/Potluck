import { useReducer } from "react";
import { Allergen } from "../../api/user-access-request";
import { UpdateDishReducer, UpdateDishState } from "../../reducers/edit-dish-reducer";




const initialState:UpdateDishState= {
   potlukkId: 0,
   dish:{
      name: "",
      description: "",
      broughtBy: 0,
      serves: 0,
      allergens: []
   }
}
export function BringDish() {
   const [UpdateDishState, dispatch] = useReducer(UpdateDishReducer, initialState);




return <>
   <fieldset>
    <div>
       <h2>Bring/Edit Dish</h2>
       <label htmlFor="name">Name</label>
       <input id="name" type="text" required onChange={e => dispatch({ type: "SET_DISH_NAME", payload: e.target.value })} />

       <label htmlFor="description">Description</label>
       <input id="description" type="text" required onChange={e => dispatch({ type: "SET_DISH_DESCRIPTION", payload: e.target.value })} />

       <label htmlFor="servings">Serves</label>
       <input id="description" type="number" required onChange={e => dispatch({ type: "SET_SERVINGS", payload: Number(e.target.value) })} />
    </div>
   </fieldset>
   <fieldset>
            <p>Allergens</p>
            
            <label htmlFor="text">MILK</label>
            <input type="checkbox" name="Milk" onChange={()=> dispatch({ type: "SET_ALLERGEN", payload: Allergen.MILK })} />
            <br />

            <label htmlFor="text">EGG</label>
            <input type="checkbox" name="Egg"  onChange={() => dispatch({ type: "SET_ALLERGEN", payload: Allergen.EGG })} />
            <br />

             <label htmlFor="text">FISH</label>
            <input type="checkbox" name="Fish"  onChange={()  => dispatch({ type: "SET_ALLERGEN", payload: Allergen.FISH })}  />   
            <br />

            <label htmlFor="text">SHELLFISH</label>
            <input type="checkbox" name="Shellfish"  onChange={()  => dispatch({ type: "SET_ALLERGEN", payload: Allergen.SHELLFISH })}  />
            <br />

            <label htmlFor="text">SOY</label>
            <input type="checkbox" name="Soy" onChange={()  => dispatch({ type: "SET_ALLERGEN", payload: Allergen.SOY })}  />
            <br />

            <label htmlFor="text">WHEAT</label>
            <input type="checkbox" name="Wheat"  onChange={()  => dispatch({ type: "SET_ALLERGEN", payload: Allergen.WHEAT })} />
            <br />

            <label htmlFor="text">TREENUT</label>
            <input type="checkbox" name="Treenut" onChange={()  => dispatch({ type: "SET_ALLERGEN", payload: Allergen.TREENUT })}  />

   </fieldset>





</>
}
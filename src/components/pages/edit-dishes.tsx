import { useReducer } from "react";
import { UpdateDishReducer, UpdateDishState } from "../../reducers/edit-dish-reducer";
import { CreationInputReducer, PotlukkCreationInputState } from "../../reducers/potluck-info-reducer";




const initialState:UpdateDishState= {
   name: "",
   description: "",
   broughtBy: 0,
   serves: 0,
   allergens: []

}
export function BringDish() {
   const [PotlukkCreationInputState, dispatch] = useReducer(UpdateDishReducer, initialState);


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
            <input type="checkbox" name="Milk"  />
            <br />

            <label htmlFor="text">EGG</label>
            <input type="checkbox" name="Egg" />
            <br />

             <label htmlFor="text">FISH</label>
            <input type="checkbox" name="Fish"  />   
            <br />

            <label htmlFor="text">SHELLFISH</label>
            <input type="checkbox" name="Shellfish"  />
            <br />

            <label htmlFor="text">SOY</label>
            <input type="checkbox" name="Soy" />
            <br />

            <label htmlFor="text">WHEAT</label>
            <input type="checkbox" name="Wheat"/>
            <br />

            <label htmlFor="text">TREENUT</label>
            <input type="checkbox" name="Treenut" />

        </fieldset>





</>
}
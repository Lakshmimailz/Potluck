import { useReducer } from "react";
import { CreationInputReducer, PotlukkCreationInputState } from "../../reducers/potluck-info-reducer";




const initialState:PotlukkCreationInputState= {
    name: "",
    description: "",
        servs: 0,
    allergens: []

}
export function BringDish() {
   const [PotlukkCreationInputState, dispatch] = useReducer(CreationInputReducer, initialState);


return <>
   <fieldset>
    <div>
       <h2>Bring/Edit Dish</h2>
       <label htmlFor="name">Name</label>
       <input id="name" type="text" required onChange={e => dispatch({ type: "SET_TITLE", payload: e.target.value })} />

       <label htmlFor="description">Description</label>
       <input id="description" type="text" required onChange={e => dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })} />

       <label htmlFor="servings">Serves</label>
       <input id="description" type="text" required onChange={e => dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })} />



    </div>
   </fieldset>




</>
}
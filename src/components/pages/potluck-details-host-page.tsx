import { useReducer } from "react";
import { PotlukkStatus } from "../../api/potluck-request";
import { potluckCreationReducer, PotlukkCreationInputState } from "../../reducers/potluck-creation-reducer";

const initialState: PotlukkCreationInputState = {
    input:{
        hostId: 0,
        details:{
            title: "",
            location: "",
            status: PotlukkStatus.CANCELLED,
            description: "",
            isPublic: false,
            time: 0,
            tags: []
        }
    }
}

const[trackerState, dispatch] = useReducer(potluckCreationReducer, initialState);
export function PotluckDetailsHostPage(){
    function handleDateTimeAction(event:React.ChangeEvent<HTMLInputElement>){
        let unixEpochDate = +new Date(event.target.value)/1000;
        dispatch({type:"SET_DATE_TIME", payload:unixEpochDate})
    }

    function handleSetPublicAction(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_PUBLIC_TAG", payload:Boolean(event.target.checked)})
    }
    

    return <>
        <h1>Potluck Details Host Page</h1>


        <fieldset style={{textAlign:"center"}}>
        <div style = {{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <div style={{width:"33%"}}>
              
                <input type="datetime-local" onChange={handleDateTimeAction} /><br/><br/><br/>
                <input type="text" placeholder="Title" onChange={e=>dispatch({type:"SET_TITLE", payload:e.target.value})}/><br/>
                <input type="text" placeholder="Location" onChange={e=>dispatch({type:"SET_LOCATION", payload:e.target.value})}/><br/>
                <input type="text" placeholder="Description" onChange={e=>dispatch({type:"SET_DESCRIPTION", payload:e.target.value})}/><br/><br/>
                <input type="checkbox" id="publicStatus" onChange={handleSetPublicAction}/><label htmlFor="essential">Make Public?</label>
                <br/><br />
                <button>Update</button><br/>
                <button>Edit</button><br/>
                <button>Cancel</button><br/>
                </div>
                </div>

                
                


                </fieldset>
    </>
}
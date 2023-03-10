import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import { PotlukkStatus } from "../../api/potluck-request";
import { potluckCreationReducer, PotlukkCreationInputState } from "../../reducers/potluck-creation-reducer";
import { AttendeesList } from "../attendee-list";

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

export function PotluckDetailsHostPage(){
    let lukkerID: number = Number(localStorage.getItem("userid"));
    const navigation = useNavigate();
    useEffect(()=>{
        const userCheck = localStorage.getItem("userid");
        if(!userCheck){
            alert("You have to sign in.")
            navigation("/")
        }else{
            lukkerID = Number(userCheck);
        }
    });
    
    const[trackerState, dispatch] = useReducer(potluckCreationReducer, initialState);

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
                <button>ADD</button><br/>
                <button>Update</button><br/>
                
                <button>Cancel</button><br/>
                </div>
                </div>
                
              
                

                
                


                </fieldset>
    </>
}
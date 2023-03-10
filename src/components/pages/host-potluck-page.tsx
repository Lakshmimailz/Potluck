import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query"
import { createAPotluck, inviteALukker, Potlukk, PotlukkCreationInput, PotlukkStatus } from "../../api/potluck-request";
import { potluckCreationReducer, PotlukkCreationInputState } from "../../reducers/potluck-creation-reducer";
import { LukkerList } from "./lukkers-list";

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

export function HostPotluckPage(){
    let lukkerID: number = Number(localStorage.getItem("userid"));
    const navigation = useNavigate();
    const queryClient = useQueryClient();
    const [isVisible,setVisible] = useState<boolean>(false);

    const creationMutation = useMutation(createAPotluck, {
        onSuccess: ()=>{
            setVisible(true);
            queryClient.invalidateQueries("potluckcached");
        },
    })

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
        dispatch({type:"SET_HOST_ID", payload:lukkerID});
        dispatch({type:"SET_STATUS", payload:PotlukkStatus.SCHEDULED});
    }

    function handleSetPublicAction(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_PUBLIC_TAG", payload:Boolean(event.target.checked)})
    }
    
    function handlePotluckCreation(){
        const newPotluck: PotlukkCreationInput = {
            hostId: trackerState.input.hostId,
            details:{
                title: trackerState.input.details.title,
                location: trackerState.input.details.location,
                status: trackerState.input.details.status,
                description: trackerState.input.details.description,
                isPublic: trackerState.input.details.isPublic,
                time: trackerState.input.details.time,
                tags: trackerState.input.details.tags
            }
        }
        creationMutation.mutate(newPotluck,{
            onSuccess: data =>{
                localStorage.setItem("potluckId",String(data.potlukkId))
            }
        });
    }

    return <>
        <h1> Host Page</h1>

    <fieldset style={{textAlign:"center"}}>
        <div style = {{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <div style={{width:"33%"}}>
                <h3>Create a Potluck</h3>
                <input type="datetime-local" onChange={handleDateTimeAction} /><br/><br/><br/>
                <input type="text" placeholder="Title" onChange={e=>dispatch({type:"SET_TITLE", payload:e.target.value})}/><br/>
                <input type="text" placeholder="Location" onChange={e=>dispatch({type:"SET_LOCATION", payload:e.target.value})}/><br/>
                <input type="text" placeholder="Description" onChange={e=>dispatch({type:"SET_DESCRIPTION", payload:e.target.value})}/><br/><br/>
                <input type="checkbox" id="publicStatus" onChange={handleSetPublicAction}/><label htmlFor="essential">Make Public?</label>
                <br/><br />
                <button onClick={handlePotluckCreation}>Create</button>
                <br />
                {isVisible ? <h5>Potluck Created</h5> : <> </> }
            </div>
            <div style={{width:"33%"}}>
                <LukkerList potlukkId={Number(localStorage.getItem("potluckId"))} potlukkerId={0}/>
            </div>
            <div style={{width:"33%"}}>
                <h3>Remove an Attendee</h3>
                <input type="text" placeholder="Invited Lukkers"/><br/><br/>
                <button> Remove</button>
            </div>
        </div>
    
    </fieldset>


    </>
}
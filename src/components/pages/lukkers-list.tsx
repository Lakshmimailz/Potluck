import React, { useReducer, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { InvitationSendInput } from '../../api/potluck-request';

import { LukkerUserInfo, getAllUsernames} from "../../api/user-access-request";
import { inviteInputReducer } from '../../reducers/potluck-info-reducer';

type InvitationProps = {
    potlukkId:number
    potlukkerId:number

}

export function LukkerList(props: InvitationProps){
    const initialState:InvitationProps = {
        potlukkId:0,
        potlukkerId:0
    }

    const queryClient = useQueryClient();
    const [search, setSearch] = useState('  ');
    const[trackerState, dispatch] = useReducer(inviteInputReducer, initialState); 
    


    const{isLoading,isError,data=[]}= useQuery("AllUserList",getAllUsernames,{
        onSuccess: ()=>{
            queryClient.invalidateQueries("AllUserList");
        }
    });
    if(isLoading){
        return <p>LOADING</p>
    }
    if(isError){
        return <p>OH NO THERE WAS A PROBLEM</p>
    }

    function handleInvitations(){
        console.log(trackerState);

    }


    return <>
        <h3>Potluck Attendees</h3><br />
        <h4>Search for someone to invite</h4>
        <input type="search" placeholder="Search Lukkers" onChange={(e)=>setSearch(e.target.value)}/><br/>
        <table>
        {data.filter(lukker => lukker.username.toLowerCase().includes(search.toLowerCase()) || lukker.fname.toLowerCase().includes(search.toLowerCase()) || lukker.lname.toLowerCase().includes(search.toLowerCase())).map
        (p => <tbody key={p.userId}><tr><td key={Math.random()} style={{paddingRight:'20px'}}>{p.username}</td><td key={Math.random()} style={{paddingRight:'20px'}}>{p.fname}</td><td key={Math.random()} style={{paddingRight:'20px'}}>
            {p.lname}</td><td key={Math.random()} style={{paddingRight:'20px'}}><button onClick={()=>dispatch({type:"SET_POTLUCKER_ID", payload:p.userId})}>Invite Me</button></td></tr></tbody>)}
        </table>
    </>
}

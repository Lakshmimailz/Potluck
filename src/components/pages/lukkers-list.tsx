

import React from 'react'
import { useQuery } from 'react-query';
import { potlukkCreationInputAction } from "../../reducers/host-page-reducer";
import { LukkerUserInfo, getAllUsernames} from "../../api/user-access-request";
import { potlukkCreationInvitationAction } from '../../reducers/potluck-info-reducer';

type LukkerListProps ={
    username:string,
    dispatch: React.Dispatch<potlukkCreationInvitationAction>

}

export function LukkerList(props: LukkerListProps){

    const{isLoading,isError,data=[]}= useQuery("UserList",getAllUsernames);
    if(isLoading){
        return <p>LOADING</p>
    }
        if(isError){
            return <p>OH NO THERE WAS A PROBLEM</p>
        }
    

    return <>

    <h1>LUKKERS LIST</h1>
    <ul>
            {data.filter(lukker => lukker.username.includes(props.username)).map(p => <li key={p.userId}>{p.username} {p.fname} {p.lname} 

            <button onClick={() => props.dispatch({type:"INVITE_TO_POTLUKK", payload:{userId:p.userId, username:p.username, fname:p.fname, lname:p.lname}})}>Invite</button></li>)}
        </ul>
    
    
    </>
}
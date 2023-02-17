import React from 'react'
import { useQuery, useQueryClient } from 'react-query';

import { LukkerUserInfo, getAllUsernames} from "../../api/user-access-request";
import { potlukkCreationInvitationAction } from '../../reducers/potluck-info-reducer';

type LukkerListProps ={
    username:string

}

export function LukkerList(props: LukkerListProps){

    const queryClient = useQueryClient();
   // console.log(props.username);

    const{isLoading,isError,data=[]}= useQuery("AllUserList",getAllUsernames,{

    });
    if(isLoading){
        return <p>LOADING</p>
    }
        if(isError){
            return <p>OH NO THERE WAS A PROBLEM</p>
        }
    

    return <>

    
    <ul>
            {data.filter(lukker => lukker.username.includes(props.username)).map(p => <li key={p.userId}>{p.username} {p.fname} {p.lname} 

            <button >Invite</button></li>)}
        </ul>
    
    
    </>
}
//onClick={() => props.dispatch({type:"INVITE_TO_POTLUKK", payload:{userId:p.userId, username:p.username, fname:p.fname, lname:p.lname}})}
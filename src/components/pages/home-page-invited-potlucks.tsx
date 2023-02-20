import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { findAllPotlucksInvitee } from '../../api/potluck-request';

type HomeInvitedListProps ={
    username:string
}

export function HomeInvitedList(props: HomeInvitedListProps){
    const queryClient = useQueryClient();

    const{isLoading,isError,data=[]}= useQuery("InviteUserList",findAllPotlucksInvitee,{
        onSuccess: ()=>{
            queryClient.invalidateQueries("InviteUserList");
        }
    });
    if(isLoading){
        return <p>LOADING</p>
    }
    if(isError){
        return <p>OH NO THERE WAS A PROBLEM</p>
    }

    return <>
        <div style={{backgroundColor: 'skyblue', width:"33%"}}>
            <h1>Invited Potlukks</h1>
            {data.filter(potlukk => potlukk.invitations.some(pin => pin.potlukker.username.includes(props.username))).map(p => 
            <li key={p.potlukkId}><Link to={`/potluckinfoguest/${p.potlukkId}`}>{p.details.title}</Link></li> )}
        </div>    
    </>
}
import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { findAllPotlucksHost } from '../../api/potluck-request';

type HomeHostedListProps ={
    username:string
}

export function HomeHostedList(props: HomeHostedListProps){

    const{isLoading,isError,data=[]}= useQuery("UserList",findAllPotlucksHost);
    if(isLoading){
        return <p>LOADING</p>
    }
    if(isError){
        return <p>OH NO THERE WAS A PROBLEM</p>
    }


    return <>

        <div style={{backgroundColor: 'powderblue',  width:"33%"  }}>
            <h1>Hosted Potlukks</h1>
            {data.filter(potlukk => potlukk.host.username.includes(props.username)).map(p => 
            <li key={Math.random()}><Link to={`/potluckinfohost/${p.potlukkId}`}>{p.details.title}</Link></li> )}
        </div>    
    </>
}
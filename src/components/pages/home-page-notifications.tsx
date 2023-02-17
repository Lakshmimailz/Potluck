import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { findNotification } from '../../api/potluck-request';

type HomeNotificationListProps ={
    userId: number
}

export function HomeNoticeList(props: HomeNotificationListProps){
 

    const{isLoading,isError,data=[]}= useQuery(["NoticeList", props.userId],()=>findNotification(props.userId));
    if(isLoading){
        return <p>LOADING</p>
    }
    if(isError){
        return <p>OH NO THERE WAS A PROBLEM</p>
    }

      
    return <>
        <div style={{backgroundColor: 'aliceblue',  width:"33%" }}>
            <h1>Notifications</h1>
            {data.map(p => <li key={p.eventId}><Link to={`/potluckinfoguest/${p.affectedPotlukkId}`}>{p.description}</Link></li> )}
        </div>    
    </>
}
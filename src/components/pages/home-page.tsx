
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeHostedList } from './home-page-hosted-potlucks';
import { HomeInvitedList } from './home-page-invited-potlucks';
import { HomeNoticeList } from './home-page-notifications';

export function HomePage(){
  const navigation = useNavigate();
  let currentUser = JSON.parse(JSON.stringify(localStorage.getItem('username')!));
  let userIdNum: number = Number(localStorage.getItem("userid"));
  useEffect(()=>{

  const userIDCheck = localStorage.getItem("userid");
    if(!userIDCheck){
      alert("You have to sign in.")
      navigation("/")
    }else{
      userIdNum = Number(userIDCheck);
    }
  }); 
   

  return <>
    <div style = {{display: 'flex', flexDirection: 'row', width:"80%" }}>
      <HomeHostedList username={currentUser} />
      <HomeInvitedList username={currentUser} />
      <HomeNoticeList userId={userIdNum} />
    </div>
    
  
  </>
}


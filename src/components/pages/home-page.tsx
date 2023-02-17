import { userInfo } from 'os';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeHostedList } from './home-page-hosted-potlucks';
import { HomeInvitedList } from './home-page-invited-potlucks';

export function HomePage(){
  const navigation = useNavigate();
  let currentUser = JSON.parse(JSON.stringify(localStorage.getItem('username')!));
  useEffect(()=>{

  const userIDCheck = localStorage.getItem("userid");
    if(!userIDCheck){
      alert("You have to sign in.")
      navigation("/")
    }
  });


 
   

  return <>
    <div style = {{display: 'flex', flexDirection: 'row', width:"80%", }}>
      <HomeHostedList username={currentUser} />
      <HomeInvitedList username={currentUser} />

        <div style={{backgroundColor: 'aliceblue',  width:"33%" }}>
            <h1>Notifications</h1>
            <p>Dish Added-Ryan's</p>
            <p>Reschedule-Pizza Party</p>
            <p>invite-Mountain ball</p>
        </div>
    </div>
    
  
  </>
}




// return <>
//         <h1>Home Page</h1>
//         const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState('column');

//   return (
//     <div>
//       label="flexDirection"
//       values={['column']}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}>
//       <div style={[styles.box, {backgroundColor: 'powderblue'}]}></div>
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </div>
//   );
// };
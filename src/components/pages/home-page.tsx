import { userInfo } from 'os';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function HomePage(){
  const navigation = useNavigate();

  useEffect(()=>{

  const userCheck = localStorage.getItem("userid");
  if(!userCheck){
    alert("You have to sign in.")
    navigation("/")
  }});

 
   

  return <>
    <div style = {{display: 'flex', flexDirection: 'row'}}>
        <div style={{backgroundColor: 'powderblue',    }}>
            <h1>Invited Potlukks</h1>              
            <Link to="/potluckdetailsguestpage">Company Bash</Link>
        </div>
        <div style={{backgroundColor: 'skyblue',  }}>
           <h1>Hosted Potlukks  </h1>
            <Link to="/potluckdetailshostpage">Ryan's Shindig  </Link><br/>
            <Link to="/potluckdetailshostpage">Rotary Pizza Party  </Link>
        </div>
        <div style={{backgroundColor: 'aliceblue',   }}>
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
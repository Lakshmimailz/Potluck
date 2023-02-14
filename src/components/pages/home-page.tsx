import React from 'react';

export function HomePage(){

    
   
  return (
    
    <div style = {{display: 'flex', flexDirection: 'row'}}>
      <div style={{backgroundColor: 'powderblue',    }}>
        <p>Invited Potlukks    </p>              
         <p>Company Bash   </p>
      </div>
      <div style={{backgroundColor: 'skyblue',  }}>
      <p>Attending Potlukks  </p>
      <p>Ryan's Shindig  </p>
      <p>Rotary Pizza Party  </p>
     

      </div>
      <div style={{backgroundColor: 'aliceblue',   }}>
      <p>Notifications</p>
      <p>Dish Added-Ryan's</p>
      <p>Reschedule-Pizza Party</p>
      <p>invite-Mountain ball</p>

      </div>
    </div>
    
  );
  
};




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
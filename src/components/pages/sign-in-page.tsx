import { useState } from "react";
import { Link } from "react-router-dom";
import { createLukker, getAllUsernames, verifyUsername } from "../../api/potluck-request";

export type SignInForm ={
    username: string
    password: string
}

export function SignInPage(){
    let existingUsernameBool = true;
    
      const[form,setForm] = useState<SignInForm>({username:"", password:""})

      async function handleUsernameVerification(){
        let results = await verifyUsername(form); 
        if( "detail" in results){
          let usernameChecker = await getAllUsernames();
          console.log(usernameChecker)
          if(()=>usernameChecker.includes(form)){
            console.log("form");
          }
          else{
            console.log("Hello")
          }
          
          

        }
       
    
// ALL OF THIS CODE IS TO CHECK IF USERNAME IS A PART OF THE SYSTEM. SIMILAR CODE WILL BE USED TO CHECK IF USERNAME IS UNIQUE IN REGISTRATION PAGE.
        
        
        
        // for (const users of usernameChecker){
        //     if (users.username === form.username){
        //         existingUsernameBool = false;


        //     }
        // }
        

      }
    

    return <>
       <fieldset>
        <h1>Sign-In-Page</h1>
        <label htmlFor="username">USERNAME: </label>
        <input type="text" placeholder="username" onChange={e => setForm({...form, username:e.target.value})} />
        <br />

        <label htmlFor="password">PASSWORD: </label>

       

        <input type="password" placeholder="password" onChange={e => setForm({...form, password:e.target.value})} />
        <br /><br />


        <button onClick={handleUsernameVerification} >SIGN IN</button>
        <br /><br />

        <label htmlFor="NewUser">New User? </label>
        <Link to="registration">SIGN UP</Link>

        </fieldset>
    </>
}
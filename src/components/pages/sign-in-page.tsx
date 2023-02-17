import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsernames, verifyUsername } from "../../api/user-access-request";


export type SignInForm ={
    username: string
    password: string
}

export function SignInPage(){
  const navigation = useNavigate();
  let existingUsernameBool = false;
    
  const[form,setForm] = useState<SignInForm>({username:"", password:""})

  async function handleUsernameVerification(){
    let results = await verifyUsername(form); 
    if( "detail" in results){
      let usernameChecker = await getAllUsernames();
      for (const users of usernameChecker){
        if (users.username === form.username){
          existingUsernameBool = true;
          break;
        }
      }
      if(existingUsernameBool){
        window.alert("Incorrect Sign-In.\nPassword is Incorrect");
      }
      else{
        window.alert("Incorrect Sign-In.\nUsername does not exist.\nCreate a User by clicking SIGN UP");
      }
    }
    else{
      localStorage.setItem("userid",String(results.userId));
      localStorage.setItem("username",String(results.username)); 
      navigation("/home");
    }
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
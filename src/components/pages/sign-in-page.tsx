import { useState } from "react";
import { createLukker } from "../../api/potluck-request";

export type SignInPage ={
    username: string
    password: string
}

export function SignInPage(){
    
      const[form,setForm] = useState<SignInPage>({username:"", password:""})
    

    return <>
       <fieldset>
        <h1>Sign-In-Page</h1>
        <label htmlFor="username">USERNAME: </label>
        <input type="text" placeholder="username" onChange={e => setForm({...form, username:e.target.value})} />

        <label htmlFor="password">PASSWORD: </label>
        <input type="password" placeholder="password" onChange={e => setForm({...form, password:e.target.value})} />

        <button onClick={SignInPage} >SIGN IN</button>

        <label htmlFor="NewUser">NewUser: </label>
        <button onClick={createLukker}>SIGN UP</button>

        </fieldset>
    </>
}
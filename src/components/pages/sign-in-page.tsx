import { useState } from "react";

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
        <button onClick={SignInPage}>SIGN UP</button>

        </fieldset>
    </>
}
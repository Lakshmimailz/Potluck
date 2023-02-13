import { useState } from "react"



export type RegistrationPage ={
    username: string
    password: string
    confirmpassword:string
   
}

export function RegistrationPage(){
    
    const[form,setForm] = useState<RegistrationPage>({username:"", password:"", confirmpassword:""});
    const [isChecked, setIsChecked] = useState(false);
   

    return <>
        <h1>Registration Page</h1>
        <fieldset>
        <label htmlFor="username">USERNAME: </label>
        <input type="text" placeholder="username" onChange={e => setForm({...form, username:e.target.value})} />

        <label htmlFor="password">PASSWORD: </label>
        <input type="password" placeholder="password" onChange={e => setForm({...form, password:e.target.value})} />

        <label htmlFor="confirmpassword">CONFIRM PASSWORD: </label>
        <input type="password" placeholder="password" onChange={e => setForm({...form, confirmpassword:e.target.value})} />
         </fieldset>

         <fieldset>
            <p>Allergens</p>
            
            <label htmlFor="text">MILK</label>
            <input type="checkbox" name="Milk" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

            <label htmlFor="text">EGG</label>
            <input type="checkbox" name="Egg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

             <label htmlFor="text">FISH</label>
            <input type="checkbox" name="Fish" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />   

            <label htmlFor="text">SHELLFISH</label>
            <input type="checkbox" name="Shellfish" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

            <label htmlFor="text">SOY</label>
            <input type="checkbox" name="Soy" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

            <label htmlFor="text">WHEAT</label>
            <input type="checkbox" name="Wheat" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

            <label htmlFor="text">TREENUT</label>
            <input type="checkbox" name="Treenut" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsChecked(e.target.checked)}} />

                </fieldset>

                <button onClick={RegistrationPage} >REGISTER</button>
    </>
}
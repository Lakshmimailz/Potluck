import { useState } from "react"



export type RegistrationPage ={
    username: string
    fname:string
    lname:string
    password: string
    confirmpassword:string
   
}

export function RegistrationPage(){
    
   
  

    return <>
        <h1>Registration Page</h1>
        <fieldset>
        <label htmlFor="username">USERNAME: </label>
        <input type="text" placeholder="username"  />

        <label htmlFor="fname">FIRST NAME: </label>
        <input type="text" placeholder="fname" />

        <label htmlFor="lname">LAST NAME: </label>
        <input type="text" placeholder="lname" />

        <label htmlFor="password">PASSWORD: </label>
        <input type="password" placeholder="password" />

        <label htmlFor="confirmpassword">CONFIRM PASSWORD: </label>
        <input type="password" placeholder="password" />
         </fieldset>

         <fieldset>
            <p>Allergens</p>
            
            <label htmlFor="text">MILK</label>
            <input type="checkbox" name="Milk"   />

            <label htmlFor="text">EGG</label>
            <input type="checkbox" name="Egg" />

             <label htmlFor="text">FISH</label>
            <input type="checkbox" name="Fish"  />   

            <label htmlFor="text">SHELLFISH</label>
            <input type="checkbox" name="Shellfish"  />

            <label htmlFor="text">SOY</label>
            <input type="checkbox" name="Soy"  />

            <label htmlFor="text">WHEAT</label>
            <input type="checkbox" name="Wheat" />

            <label htmlFor="text">TREENUT</label>
            <input type="checkbox" name="Treenut"  />

                </fieldset>

                <button  >REGISTER</button>
    </>
}
import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { Allergen, createLukker, getAllUsernames, LukkerUserInfo } from "../../api/user-access-request"
import { registrationReducer, RegistrationState } from "../../reducers/registration-reducer"



export type RegistrationForm ={
    username: string
    fname:string
    lname:string
    password: string
    allergies: Allergen[]
}

const initialState: RegistrationState ={
    confirmedPassword: "",
    userInfo:{
        username: "",
        fname: "",
        lname: "",
        password: "",
        allergies:[]
    }
}


export function RegistrationPage(){
    const navigation = useNavigate();
    const[trackerState, dispatch] = useReducer(registrationReducer, initialState); 

    function handleSetUsername(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type: "SET_USERNAME", payload: event.target.value});
    }
    
    function handleSetFname(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type: "SET_FIRSTNAME", payload: event.target.value});
    }
    
    function handleSetLname(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type: "SET_LASTNAME", payload: event.target.value});
    }
    
    function handleSetPassword(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type: "SET_PASSWORD", payload: event.target.value});
    }
    
    function handleSetConfirmPassword(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type: "SET_CONFIRM_PASSWORD", payload: event.target.value});
    }

    async function handleRegistrationParametersAction(){
        let specialCharacterBool = false;
        let plength = trackerState.confirmedPassword.length;
        let existingUsers = await getAllUsernames();
        if(trackerState.userInfo.username.indexOf(' ') >= 0){
            alert("Cant have spaces in username.\nEw.");
            return;
        }
        if (trackerState.confirmedPassword !== trackerState.userInfo.password){
            alert("Password does not match Confirmed");
            return;
        }
        if (trackerState.userInfo.username.length <= 3){
            alert("Username should be more than 3 characters");
            return;
        }
        for(const user of existingUsers){
            if (user.username === trackerState.userInfo.username){
                alert("Username Already Exists :(\n Pick a better one!");
                return;
            }
        }
        if(plength < 10){
            alert("Your password isn't long enough \nMust contain at least 10 characters.");
            return
        }
        for (const char of trackerState.confirmedPassword){
            if (!(char.match(/[a-z]/i))){
                specialCharacterBool = true;
                break;
            }
        }
        if(!specialCharacterBool){
            alert("Your password MUST contain: \n1 number.\n OR\n1 Special Character");
            return;
        }
        handleRegistrationAction();
    }   

    async function handleRegistrationAction(){
        const newUser: RegistrationForm = {
            username: trackerState.userInfo.username,
            password: trackerState.userInfo.password,
            fname:trackerState.userInfo.fname,
            lname:trackerState.userInfo.lname,
            allergies: trackerState.userInfo.allergies
        }

        const returnedLukker:LukkerUserInfo = await createLukker(newUser);
        localStorage.setItem("userid",String(returnedLukker.userId));

        alert("Registration Successful!!!");
        navigation("/home");
    }

    return <>
        <h1>Registration Page</h1>
        <fieldset>
            <label htmlFor="username">USERNAME: </label>
            <input type="text" placeholder="Username" onChange={handleSetUsername} /> <br />

            <label htmlFor="fname">FIRST NAME: </label>
            <input type="text" placeholder="First Name" onChange={handleSetFname} /> <br />

            <label htmlFor="lname">LAST NAME: </label>
            <input type="text" placeholder="Last Name" onChange={handleSetLname}/> <br />

            <label htmlFor="password">PASSWORD: </label>
            <input type="password" placeholder="Password" required onChange={handleSetPassword} /> <br />

            <label htmlFor="confirmpassword">CONFIRM PASSWORD: </label>
            <input type="password" placeholder="Confirm Password" onChange={handleSetConfirmPassword}/>
         </fieldset>

         <fieldset>
            <p>Allergens</p>
            
            <label htmlFor="text">MILK</label>
            <input type="checkbox" name="Milk"  onChange={()=>dispatch({type:"SET_MILKALLERGIES"})} />
            <br />

            <label htmlFor="text">EGG</label>
            <input type="checkbox" name="Egg" onChange={()=>dispatch({type:"SET_EGGALLERGIES"})}/>
            <br />

             <label htmlFor="text">FISH</label>
            <input type="checkbox" name="Fish" onChange={()=>dispatch({type:"SET_FISHALLERGIES"})} />   
            <br />

            <label htmlFor="text">SHELLFISH</label>
            <input type="checkbox" name="Shellfish" onChange={()=>dispatch({type:"SET_SHELLFISHALLERGIES"})} />
            <br />

            <label htmlFor="text">SOY</label>
            <input type="checkbox" name="Soy" onChange={()=>dispatch({type:"SET_SOYALLERGIES"})} />
            <br />

            <label htmlFor="text">WHEAT</label>
            <input type="checkbox" name="Wheat" onChange={()=>dispatch({type:"SET_WHEATALLERGIES"})} />
            <br />

            <label htmlFor="text">TREENUT</label>
            <input type="checkbox" name="Treenut" onChange={()=>dispatch({type:"SET_TREENUTALLERGIES"})} />

        </fieldset>

        <button onClick={handleRegistrationParametersAction}>REGISTER</button>
                
    </>
}
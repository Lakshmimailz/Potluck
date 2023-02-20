import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styleContext } from "../App"


export function NavBar(){
    const navigation = useNavigate();
    
    const {setGlobalStyle} = useContext(styleContext)

    function handleClearStorage(){
        localStorage.clear(); 
        navigation("/");
    }

    return <>
        <ul>
            <li>
                 <Link to="/">Sign-In</Link>                  
            </li>
            <li>
                <Link to="/registration">Register</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/potluckinfoguest/:potluckID">Guest Details</Link>
            </li>
            <li>
                <Link to="/potluckinfohost/:potluckID">Host Details</Link>
            </li>
            <li>
                <Link to="/hostpotluck">Host Your own Potluck!!</Link>
            </li><br />
            <button onClick={handleClearStorage}>LOGOUT</button>
        </ul>
    </>
}
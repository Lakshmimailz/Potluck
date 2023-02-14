import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styleContext } from "../App"


export function NavBar(){
    const navigation = useNavigate();
    
    const {setGlobalStyle} = useContext(styleContext)
    function handleClearStorage(){
        localStorage.removeItem("userid"); 
        navigation("/");
    }

    return <>
        <ul>
            <button onClick={handleClearStorage}>LOGOUT</button>
            <li>
                 <Link to="/">SignIn Page</Link>                  
            </li>
            <li>
                <Link to="/registration">Registration Page</Link>
            </li>
            <li>
                <Link to="/home">Home Page</Link>
            </li>
            <li>
                <Link to="/potluckinfoguest/:potluckID">Guest Page</Link>
            </li>
            <li>
                <Link to="/potluckinfohost/:potluckID">Host Page</Link>
            </li>
    </>
}
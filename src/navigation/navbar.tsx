import { useContext } from "react";
import { Link } from "react-router-dom";
import { styleContext } from "../App"


export function NavBar(){
    
    const {setGlobalStyle} = useContext(styleContext)

    return <>
        <ul>
            <button>LOGOUT</button>
            <li>
                 <Link to="/">SignIn Page</Link>                  
            </li>
            <li>
                <Link to="/registration">Registration Page</Link>
            </li>
            <li>
                <Link to="/home">Home Page</Link>
            </li>
        </ul>
    </>
}
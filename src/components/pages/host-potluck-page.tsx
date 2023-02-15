import { createAPotluck } from "../../api/potluck-request";
import { LukkerUserInfo, Allergen } from "../../api/user-access-request"

export function HostPotluckPage(){
    
    
    async function handlePotluckCreation(){
        let results = await createAPotluck();
    }

    return <>
        <h1> Host Page</h1>

    <fieldset>
    <label htmlFor="time">TIME: </label>
    <input type="time" placeholder="--:--"/>
    <br/><br/><br/>

    <input type = "datetime-local"/><br/><br/><br/>

    <input type="text" placeholder="Location"/><br/>
    <input type="text" placeholder="Description"/><br/><br/><br/>

    <button onClick={handlePotluckCreation}> Create</button><br/><br/><br/>

    <input type="search" placeholder="Search Lukkers"/><br/>

    <input type="text" placeholder="Lukkers"/>
    <li>
    <button> Invite</button><br/><br/><br/>
    </li>

    <input type="text" placeholder="Invited Lukkers"/><br/><br/>
    <button> Remove</button>

    </fieldset>


    </>
}
import { UpdateDishAction, UpdateDishState } from "../../reducers/edit-dish-reducer";
import { BringDish } from "./edit-dishes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export type dish = {
    name:string
    description:string
    broughtBy:number
    serves:number
    allergens: []
 }


export function PotluckDetailsGuestPage(){
    let lukkerID: number = Number(localStorage.getItem("userid"));
    const navigation = useNavigate();
    useEffect(()=>{
        const userCheck = localStorage.getItem("userid");
        if(!userCheck){
            alert("You have to sign in.")
            navigation("/")
        }else{
            lukkerID = Number(userCheck);
        }
    });


    const Mydish:dish={
        name:"",
        description:"",
        broughtBy:0,
        serves:0,
        allergens: []

    }
    const dishes = useSelector((state: UpdateDishState) => state.dishes);
    const dispatch =useDispatch()<UpdateDishAction>

    return <>
        <h1>Potluck Details Guest Page</h1>
        <BringDish></BringDish>
        <div>
            <h3>Dishes</h3>
        <button onClick={() => dispatch({type:"ADD_DISH"})}>ADD DISH</button>
        <button onClick={() => dispatch({type:"UPDATE_DISH", payload:Mydish})}>UPDATE DISH</button>
        <button onClick={() => dispatch({type:"REMOVE_DISH", payload:Mydish})}>REMOVE DISH</button>
        </div>
    </>

}


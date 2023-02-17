import { createAPotluck, Dish, dishesAddAndUpdate, inviteALukker } from "../api/potluck-request";
import {takeEvery, put, all, select} from "@redux-saga/core/effects"
import { CreateDishFromFormAction, RequestPopulateDishesAction, RequestSaveDishesAction } from "../reducers/edit-dish-reducer";


export function* createDishFromFormData(action:CreateDishFromFormAction){

    const dish: Dish = {
        name: action.payload.name,
        description: action.payload.description,
        broughtBy: 0,
        serves: action.payload.serves,
        allergens: action.payload.allergens
    }
    yield put({type:"ADD_DISH", payload: dish});
}
export function* RequestPopulateDishes(action:RequestPopulateDishesAction){
    const dish: Dish = yield dishesAddAndUpdate(dish);
    yield put({type:"UPDATE_DISH", payload:dish});
    
}

export function* updateDishes(action: RequestSaveDishesAction){
    const dishList: Dish[] = yield select((store: { dishList: any; }) => store.dishList);
    const save:RequestPopulateDishes =yield inviteALukker();
    yield put({type:"UPDATE_DISH",payload:dishList});
 
}
export function* WatchCreateFormData(){
    yield takeEvery("CREATE_DISH_FROM_FORM",createDishFromFormData)
}

export function* WatchRequestPopulateDishes(){
    yield takeEvery("REQUEST_POPULATE_DISHES",RequestPopulateDishes)

}

export function* watchSavedDishes(){
    yield takeEvery("REQUEST_SAVE_DISHES",updateDishes)
}
export function* rootSaga(){
    yield all([WatchCreateFormData(),WatchRequestPopulateDishes(),watchSavedDishes()])
}
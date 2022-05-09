import { combineReducers } from "redux";
/*import { likesReducer } from "./likesReducer";
import { countReducer } from "./countReducer";*/
import{ reducer } from "./reducer"


export const rootReducer=combineReducers({
    /*likes:likesReducer,
    count:countReducer,*/
    setpage:reducer
})
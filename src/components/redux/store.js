import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";




const rootReducer = combineReducers({
    countReducer
})


export const apiStore = createStore(rootReducer)
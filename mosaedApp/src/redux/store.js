import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import apiReducer from "./reducers/apiReducer";

const rootReducer = combineReducers({
    apiReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
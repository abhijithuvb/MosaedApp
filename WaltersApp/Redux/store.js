import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer, rootReducer } from "./reducers";


export const store = createStore(/* rootReducer, */ appReducer, applyMiddleware(thunk))
import { combineReducers } from "redux";
import { utestReducer } from "./Auth/reducer";

export const reducers = combineReducers({
    uState: utestReducer
})
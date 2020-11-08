import { combineReducers } from "redux";
import messageReducer from "./msgReducer";

export default combineReducers({
    messageReducer : messageReducer
})
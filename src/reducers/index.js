import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import MsgReducer from "./msgReducer";
import userReducer from "./userReducer";


export default combineReducers({
    searchReducer : searchReducer,
    MsgReducer : MsgReducer,
    userReducer : userReducer

})
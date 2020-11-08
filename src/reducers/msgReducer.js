import { 
    SEND_MESSAGE,
    RECEIVE_MESSAGE,
    DELETE_CHAT,
    DELETE_MESSAGE } from "../actions/type";


const initialState = {
    
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            console.log("SEND_MESSAGE action reduce connected");
        default:
            return state
    }
}


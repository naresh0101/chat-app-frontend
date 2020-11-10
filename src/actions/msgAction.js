import { 
    SEND_MESSAGE,
    RECEIVE_MESSAGE,
    DELETE_CHAT,
    DELETE_MESSAGE } from "./type";


    export const sendMsg = (data)=>{
        return (dispatch)=>{
            dispatch({
                type : SEND_MESSAGE,
                payload : data
            })
        }
    }
    export const receiveMsg = ()=>{
        return (dispatch)=>{
            dispatch({
                type : RECEIVE_MESSAGE
            })
        }
    }
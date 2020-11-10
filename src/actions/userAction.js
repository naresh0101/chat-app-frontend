import {  ALL_USERS, ACTIVE_USER,ACTIVE_USER_CHATS } from "./type";


export const all_users = (data)=>{
    return (dispatch)=>{
        dispatch({
            type : ALL_USERS,
            payload : data
        })
    }
}
export const active_chat = (data)=>{
    return (dispatch)=>{
        dispatch({
            type : ACTIVE_USER,
            payload : data
        })
    }
}

export const active_userchats = (data)=>{
    return (dispatch)=>{
        dispatch({
            type : ACTIVE_USER_CHATS,
            payload : data
        })
    }
}
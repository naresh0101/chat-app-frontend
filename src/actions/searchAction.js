import {  SEARCH_USER } from "./type";


export const searchUserMsg = (data)=>{
    return (dispatch)=>{
        dispatch({
            type : SEARCH_USER,
            payload : data
        })
    }
}
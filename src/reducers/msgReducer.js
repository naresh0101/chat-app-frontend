import { 
    SEND_MESSAGE,RECEIVE_MESSAGE } from "../actions/type";
  
  
const initialState = {
      recentsUser : [],
      activeChat : [],
      receiveMessage : []
}
  
  export default (state = initialState, action) =>{
      switch (action.type) {
          case SEND_MESSAGE:
              return{
                  ...state,
                  activeChat: [...state.activeChat, action.payload]
              }
          default:
              return state
      }
  }
  
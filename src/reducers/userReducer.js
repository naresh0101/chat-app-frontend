import {
  ALL_USERS, ACTIVE_USER, ACTIVE_USER_CHATS
} from "../actions/type";


const initialState = {
  all_users: [],
  activeChat: [],
  activeUserChats: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        all_users: [...state.all_users, action.payload],
      }
    case ACTIVE_USER:
      return {
        activeChat: action.payload
      }
    case ACTIVE_USER_CHATS:
      return {
        activeUserChats: action.payload
      }

    default:
      return state
  }
}

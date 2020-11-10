import { 
  SEARCH_USER } from "../actions/type";


const initialState = {
    userSearched : [],
    recentUser : [


    ]
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SEARCH_USER:
            return{
                userSearched: [action.payload],
            }
        default:
            return state
    }
}


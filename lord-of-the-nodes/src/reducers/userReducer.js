import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../actions/userActions';

const initialState = {
    isLoading: false,
    error: '',
    users: []
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload
      }
    case GET_USERS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}
import { GET_USERS_REQUEST, 
  GET_USERS_SUCCESS, 
  GET_USERS_ERROR, 
  POST_USERS_REQUEST,
  POST_USERS_SUCCESS,
  POST_USERS_ERROR,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_ERROR,
  PUT_USERS_REQUEST,
  PUT_USERS_SUCCESS,
  PUT_USERS_ERROR
} from '../actions/userActions';

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
    case POST_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case POST_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload
      }
    case POST_USERS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    case DELETE_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload
      }
    case DELETE_USERS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    case PUT_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case PUT_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload
      }
    case PUT_USERS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}
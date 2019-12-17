import axios from 'axios';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const POST_USERS_REQUEST = 'POST_USERS_REQUEST'
export const POST_USERS_SUCCESS = 'POST_USERS_SUCCESS'
export const POST_USERS_ERROR = 'POST_USERS_ERROR'

export const DELETE_USERS_REQUEST = 'DELETE_USERS_REQUEST'
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USERS_ERROR = 'DELETE_USERS_ERROR'

export const PUT_USERS_REQUEST = 'PUT_USERS_REQUEST'
export const PUT_USERS_SUCCESS = 'PUT_USERS_SUCCESS'
export const PUT_USERS_ERROR = 'PUT_USERS_ERROR'

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_REQUEST })
  axios
    .get(`http://127.0.0.1:4000/api/users`)
    .then(res =>
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_USERS_ERROR, payload: err.response }))
}

export function createUser(user) {
  return dispatch => {
    axios
      .post("http://127.0.0.1:4000/api/users", user)
      .then(res => {
        dispatch({ type: POST_USERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_USERS_ERROR, payload: err.response });
      });
  };
}

export function deleteUser(id) {
  return dispatch => {
    if (window.confirm('Are you sure you want to delete user?'))
    axios
      .delete(`http://127.0.0.1:4000/api/users/${id}`)
      .then(res => {
        console.log(res.data.id)
        dispatch({ type: DELETE_USERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_USERS_ERROR, payload: err.response });
      });
  };
}

export function editUser(user) {
  return dispatch => {
    axios
    .put(`http://127.0.0.1:4000/api/users/${user.id}`, { bio: user.bio, name: user.name })
    .then(res => {
      console.log(res.data)
      dispatch({ type: PUT_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: PUT_USERS_ERROR, payload: err.response })
    })
  } 
}
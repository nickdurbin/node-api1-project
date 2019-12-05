import axios from 'axios';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_REQUEST })
  axios
    .get(`http://127.0.0.1:8080/api/users`)
    .then(res =>
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_USERS_ERROR, payload: err.response }))
}

export function createUser(user) {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8080/api/users", user)
      .then(res => {
        dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USERS_ERROR, payload: err.response });
      });
  };
}

export function deleteUser(id) {
  return dispatch => {
    if (window.confirm('Are you sure you want to delete user?'))
    axios
      .delete(`http://127.0.0.1:8080/api/users/${id}`)
      .then(res => {
        dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USERS_ERROR, payload: err.response });
      });
  };
}

export function editUser(user) {
  return dispatch => {
    axios
    .put(`http://127.0.0.1:8080/api/users/${user.id}`, user)
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR, payload: err.response })
    })
  } 
}
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../actions/userActions';

function UserList({ editingUser }) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  console.log(users)

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteUser(e.target.value))
  }

  return (
    <>
      {users.map((user, index) => {
        return (
          <div className='userContainer' key={user.id} index={index}>
            <h1>Character</h1>
            <h2>Name: {user.name}</h2>
            <h4>Bio: {user.bio}</h4>
            <h4>ID: {user.id}</h4>
            <div className='btnContainer'>
              <button className='deleteBtn' onClick={handleDelete} value={user.id}>
                Delete
              </button>
              <button className='updateBtn' onClick={() => editingUser(user)}>
                Update
              </button>
            </div>
          </div>
      )})}
    </>
  )
}

export default UserList
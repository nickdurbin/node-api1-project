import React from 'react'

function UserList({ users, deleteUser, editUser }) {
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
              <button className='deleteBtn' onClick={() => deleteUser(user.id)}>
                Delete
              </button>
              <button className='updateBtn' onClick={() => editUser(user.id, user)}>
                Update
              </button>
            </div>
          </div>
      ) })}
    </>
  )
}

export default UserList
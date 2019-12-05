import React, { useState } from 'react';
import UserList from './UserList';
import axios from 'axios';

function UserForm({ users, setUsers }) {
  const [editing, setEditing] = useState(false)
  const [userToEdit, setUserToEdit] = useState({
    id: '',
    name: '',
    bio: ''
  })
  const [formValues, setFormValues] = useState({
    name: '',
    bio: ''
  })

  const editUser = user => {
    setEditing(true);
    setUserToEdit(user);
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
    .post('http://127.0.0.1:8080/api/users', formValues)
    .then(res => {
      console.log(res.data, 'User successfully created!')
      return setUsers(res.data)
    })
    .catch(err => {
      console.log(err.response, 'User not created.')
    })
    resetForm()
  }

  const deleteUser = id => {
    if (window.confirm('Are you sure you want to delete user?'))
    axios
      .delete(`http://127.0.0.1:8080/api/users/${id}`)
      .then(res => {
        console.log(res.data, 'User successfully deleted.')
        return setUsers(res.data)
      })
      .catch(err => {
        console.log(err.response, 'User still here.')
      })
  }

  const saveEdit = e => {
    e.preventDefault()
    axios
      .put(`http://127.0.0.1:8080/api/users/${userToEdit.id}`, userToEdit)
			.then(result => {
        setEditing(false)
        console.log('User was edited!')
			})
			.catch(error => {
				console.log(error)
			})
	}

  const resetForm = () => {
    setFormValues({
      name: '',
      bio: ''
    })
  }

  return (
    <div>
     {editing && (
        <form onSubmit={saveEdit}>
            <h1>Update User</h1>
            <input 
              onChange={e => setUserToEdit({ userToEdit, name: e.target.value })}
              value={userToEdit.name}
              required
            />

            <input
              onChange={e =>  setUserToEdit({ userToEdit, bio: e.target.value })}
              value={userToEdit.bio}
              required
            />
          <div className="btnContainer">
            <button type="submit">Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    {!editing && (
      <form onSubmit={handleSubmit}>
        <h1>User Form</h1>

        <input type="text" name="name" placeholder="Name" value={formValues.name} required onChange={handleChange} />

        <input type="text" name="bio" placeholder="Bio" value={formValues.bio} required onChange={handleChange} />

        <button className="formButton" type="submit">Submit!</button>
      </form>
    )}
      <UserList editUser={editUser} deleteUser={deleteUser} users={users}/>
    </div>
  );
}

export default UserForm;
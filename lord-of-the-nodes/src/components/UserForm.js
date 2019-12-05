import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserList from './UserList';
import { createUser, deleteUser, editUser } from '../actions/userActions';

function UserForm({ users, setUsers }) {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [userToEdit, setUserToEdit] = useState({
    name: '',
    bio: ''
  })
  const [formValues, setFormValues] = useState({
    name: '',
    bio: ''
  })

  const editingUser = user => {
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
    dispatch(createUser(formValues))
    resetForm()
  }
    
  const handleEdit = e => {
    e.preventDefault()
    dispatch(editUser(userToEdit.id, userToEdit))
    setEditing(false)
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
        <form>
            <h1>Update User</h1>
            <input 
              onChange={e => setUserToEdit({ userToEdit, name: e.target.value })}
              placeholder={userToEdit.name}
              value={userToEdit.name}
              required
            />

            <input
              onChange={e => setUserToEdit({ userToEdit, bio: e.target.value })}
              placeholder={userToEdit.bio}
              value={userToEdit.bio}
              required
            />
          <div className="btnContainer">
            <button type="submit" onClick={() => handleEdit(userToEdit.id, userToEdit)}>Save</button>
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
      <UserList editingUser={editingUser} deleteUser={deleteUser} users={users}/>
    </div>
  );
}

export default UserForm;
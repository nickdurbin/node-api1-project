import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, editUser } from '../actions/userActions';

function UserForm({ editing, setEditing, userToEdit, setUserToEdit }) {
  const dispatch = useDispatch()
 
  const [formValues, setFormValues] = useState({
    name: '',
    bio: '',
    file: ''
  })

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', "webapi1")
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ndurbin/image/upload', {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setFormValues({ ...formValues, file: file.secure_url })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValues)
    dispatch(createUser(formValues))
    resetForm()
  }
    
  const handleEdit = (e, user) => {
    e.preventDefault()
    console.log(user.id, user)
    dispatch(editUser(user))
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
            onChange={e => setUserToEdit({ ...userToEdit, name: e.target.value })}
            placeholder={userToEdit.name}
            value={userToEdit.name}
            required
          />

          <input
            onChange={e => setUserToEdit({ ...userToEdit, bio: e.target.value })}
            placeholder={userToEdit.bio}
            value={userToEdit.bio}
            required
          />
          <div className="btnContainer">
            <button type="submit" onClick={(e) => handleEdit(e, userToEdit)}>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    {!editing && (
      <form onSubmit={handleSubmit}>
        <h1>User Form</h1>

        <input type="text" name="name" placeholder="Name" value={formValues.name} required onChange={handleChange} />

        <input type="text" name="bio" placeholder="Bio" value={formValues.bio} required onChange={handleChange} />

        <input type="file" placeholder='Upload an Image' name="file" onChange={handleImage} />

        <button className="formButton" type="submit">Submit!</button>
      </form>
    )}
    </div>
  );
}

export default UserForm;
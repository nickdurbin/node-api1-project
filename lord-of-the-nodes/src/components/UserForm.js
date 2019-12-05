import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm(props) {
  const [users, setUsers] = useState([])
  console.log(users)
  const [formValues, setFormValues] = useState({
    name: '',
    bio: ''
  })



  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err.response, 'You did not get the users.')
      })
  }, [])

  const handleChange = (e) => {
    setFormValues({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers(formValues)
    resetForm()
  }

  const resetForm = () => {
    setFormValues({
      name: '',
      bio: ''
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>User Form</h1>

      <input type="text" name="name" placeholder="Name" required onChange={handleChange} />

      <input type="text" name="bio" placeholder="Bio" required onChange={handleChange} />

      <button className="formButton" type="submit">Submit!</button>
    </form>
    {users.map((user, index) => {
        return (
          <div className='userContainer' key={index} index={index}>
            <h1>Character</h1>
            <h2>Name: {user.name}</h2>
            <h4>Bio: {user.bio}</h4>
          </div>
      ) })}
     </>
  );
}

export default UserForm;
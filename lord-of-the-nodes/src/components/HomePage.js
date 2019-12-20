import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions/userActions';
import UserForm from './UserForm';
import UserList from './UserList';

function HomePage() {
  const [editing, setEditing] = useState(false)
  const [userToEdit, setUserToEdit] = useState({
    name: '',
    bio: ''
  })
  const dispatch = useDispatch()

  const editingUser = user => {
    setEditing(true);
    setUserToEdit(user);
  };

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      <UserForm editing={editing} setEditing={setEditing} userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
      <UserList editingUser={editingUser} />
    </>
  )
}

export default HomePage

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/userActions';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
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
    <div className="mainContent">
      <UserForm editing={editing} setEditing={setEditing} userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
      <UserList editingUser={editingUser} />
    </div>
  );
}

export default App;
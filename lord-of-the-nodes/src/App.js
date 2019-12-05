import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/userActions';
import UserForm from './components/UserForm';
import { withRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div className="mainContent">
      <UserForm />
    </div>
  );
}

export default withRouter(App);
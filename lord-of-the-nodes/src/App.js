import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err.response, 'You did not get the users.')
      })
  }, [users])

  return (
    <div className="mainContent">
      <Switch>
        <Route exact path='/' render={props => <UserForm {...props} users={users} />} />
        <Route path='/users' render={props => <UserList {...props} users={users} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
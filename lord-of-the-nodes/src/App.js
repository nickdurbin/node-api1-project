import React from 'react';
import HomePage from './components/HomePage';
import { Route, withRouter } from 'react-router-dom';

function App() {

  return (
    <div className="mainContent">
      <Route exat path='/' component={HomePage} />
    </div>
  );
}

export default withRouter(App);
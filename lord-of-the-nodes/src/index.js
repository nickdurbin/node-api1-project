import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { userReducer as reducer } from './reducers/userReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProductProfile from './components/UserProductProfile';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
reportWebVitals();

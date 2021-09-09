import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Router, Route} from "react-router";
import App from './components/App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProductProfile from './components/UserProductProfile';

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

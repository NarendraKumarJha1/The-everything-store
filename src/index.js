import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './NavBar';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartCheckout from './CartCheckout';
import Products from './Products';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
reportWebVitals();

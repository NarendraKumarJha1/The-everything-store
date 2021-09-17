import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartCheckout from './CartCheckout';
import Products from './Products';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <NavBar/>
          <Login/>
        </Route>

        <Route path="/checkout">
          <NavBar/>
          <CartCheckout/>
          <Footer/>
        </Route>

        <Route path="/products">
          <NavBar/>
          <Products/>
          <Footer/>
        </Route>

        <Route path="/">
          <NavBar />
          <Footer/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import Footer from './Footer';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import NavBar from './NavBar';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import CartCheckout from './CartCheckout';

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

        <Route path="/">
          <NavBar />
          <Footer/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

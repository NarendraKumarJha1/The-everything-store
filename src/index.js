import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import CartCheckout from './components/CartCheckout';
import homepage from './components/homepage';

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
        <Route path="/home">
          <homepage/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

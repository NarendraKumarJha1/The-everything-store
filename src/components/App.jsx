// React Library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import browserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import createHistory from "history/createBrowserHistory";
import login from "./Login";

// CSS Files
import "../Login.css";
import "../index.css";

// JSX FILES
import Nav from "./NavBar";
import Login from "./Login";
import NotFound from "./NotFound.js";
import reportWebVitals from "../reportWebVitals";
import UserProfile from "./UserProfile";
import Order from "./Order";
import CompletePro from "./CompletePro";

function App() {
  return (
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
  </React.StrictMode>
  );
}

export default App;

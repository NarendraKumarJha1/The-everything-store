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
import About from "./AboutUs";


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/user" component={UserProfile}></Route>
        {/* <Route path="/" component={Login}></Route> */}
        <Route path="/compro" component={CompletePro}></Route>
        {/* <Nav /> */}

        <Route path="/login">{login ? <Login /> : <UserProfile />}</Route>

        <Route path="/about" component={About}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;

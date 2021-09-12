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
    <BrowserRouter basename="/">
      <Switch>
        {/* <Route path="/" component={Login}></Route> */}
        <Route path="/" component={CompletePro}></Route>
        {/* <Nav /> */}
        <Route path="/user" component={UserProfile}></Route>
        <Route path="/login">{login ? <UserProfile /> : <Login />}</Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

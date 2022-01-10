// React Library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import browserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import createHistory from "history/createBrowserHistory";
import App from "./components/App";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserProductProfile from "./components/UserProductProfile";

// JSX FILES
import Nav from "./components/NavBar";
import NotFound from "./components/NotFound.js";
import reportWebVitals from "./reportWebVitals";
import UserProfile from "./components/UserProfile";
import Order from "./components/Order";
import CompletePro from "./components/CompletePro";

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
reportWebVitals();

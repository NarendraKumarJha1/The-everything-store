// React Library
import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import browserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import createHistory from "history/createBrowserHistory";

// JSX FILES
import Nav from "./NavBar";
import Login from "./Login";
import NotFound from "./NotFound.js";
import reportWebVitals from "../reportWebVitals";
import UserProfile from "./UserProfile";
import Order from "./Order";
import CompletePro from "./CompletePro";
import About from "./AboutUs";
import CartCheckout from "./CartCheckout";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Product from "./product";


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/user" component={UserProfile}></Route>
        {/* <Route path="/" component={Login}></Route> */}

        <Route path="/Home">
          <Nav/>
          <Homepage/>
          {/* <Footer/> */}
        </Route>


        <Route path="/footer" component={Footer}></Route>

        <Route path="/product" component={Product}></Route>


        <Route path="/compro" component={CompletePro}></Route>
        {/* <Nav /> */}
        <Route path = "/order" component={Order}/>
        <Route path="/login" component={Login}></Route>

        <Route path="/about" component={About}></Route>

        <Route path="/cart" component={CartCheckout}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;

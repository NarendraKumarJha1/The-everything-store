import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import NavBar from './NavBar';
import Login from './Login';
import '../App.css';
import createHistory from 'history/createBrowserHistory';
import {createBrowserHistory} from 'history';
import {Router, Route} from "react-router";
import browserHistory from "history/createBrowserHistory";
import reportWebVitals from '../reportWebVitals';
import UserProductProfile from './UserProductProfile'
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
  //   <Router history={createBrowserHistory}>
  //   <Route path = {"user"} component={UserProductProfile}/>
  //   <Route path = {"home"} component={Login}/>
  // </Router>
    
    <div className="app">
      <React.StrictMode>
      {/* <Link
        activeClass="active"
        to="first"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Main</Link>
        <Link
        activeClass="active"
        to="second"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >second</Link> */}
        {/* <NavBar/>
        <Login/> */}
        <UserProductProfile/>
      </React.StrictMode>
    </div>
  );
}

export default App;

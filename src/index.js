import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProductProfile from './components/UserProductProfile';

ReactDOM.render(
  <App/>,
=======
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        </Route>

        <Route path="/">
          <NavBar />
          <Footer/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
>>>>>>> 125130ea07a77f6c1f4aac18775c762f80f608ab
  document.getElementById('root')
);
reportWebVitals();

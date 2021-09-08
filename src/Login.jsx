import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Login(){
    return<div className="LoginCard">
        <img className="wave" alt ="" src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
	<div className="container">
		<div className="img">
			<img alt ="" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"/>
		</div>
		<div className="login-content">
			<form action="index.html">
				<img alt ="" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
				<input type="submit" className="btn" value="Signup"/>
            </form>
        </div>
    </div>
    {/* <script type="text/javascript" src="js/main.js"></script> */}
    </div>;

}

export default Login;
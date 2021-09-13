import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Login(){
    return<div className="LoginCard">
	<div className="container">
			<img className="Logo" alt ="" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/864ec289838c6edcb7bd7a12acbbfa9389cc5a23/public/imgs/logo%20-%20The%20Everything%20Store.svg"/>
		<div className="img">
			<img alt ="" src="https://graphicriver.img.customer.envatousercontent.com/files/244778425/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=fcb8bd2c35a519c6a15066fd4f653598"/>
		</div>
		<div className="login-content">
			<form action="index.html">
				<img alt ="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS78NndbZiK_0eG0HQCpI3zqFvdKfpkJCKSb3dcdpdSofQuOwtucAgSIH9LujQgU-xY7U&usqp=CAU"/>
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
// import "../Login.css";
// import React from "react";
// import ReactDOM from "react-dom";
// import { useState } from "react";


// export default function Login() {

//   return (
//     <div>
//       <div className="l-form">
//         <div className="shape1"></div>
//         <div className="shape2"></div>
//         <div className="form">
//           <img src="https://github.com/NarendraKumarJha1/The-everything-store/blob/master/public/imgs/trans_logo.png?raw=true" alt="" className="brand-logo"/>
//           <img src="https://cdn.pixabay.com/photo/2016/09/16/19/19/online-store-1674907_960_720.png" alt="" className="form_img" />
//           <form action="" className="form_content">
//             <img src="https://github.com/NarendraKumarJha1/The-everything-store/blob/master/public/imgs/user_icon.png?raw=true" alt="" className="user"/>
//             <h1 id = " form-title" className="form_title">Welcome</h1>


//             <div class="form-floating mb-3">
//               <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//               <label for="floatingInput">Name</label>
//             </div>
//             <div class="form-floating mb-3">
//               <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//               <label for="floatingInput">Email address</label>
//             </div>
//             <div class="form-floating mb-3">
//               <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//               <label for="floatingInput">Password</label>
//             </div>
//             <div class="form-floating">
//               <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//               <label for="floatingPassword">Re-enter Password</label>
//             </div>


//             <a href="#" className="form_forgot">
//               Forgot Password?
//             </a>
//             <input type="checkbox" id="" className="remember" name="fav_language" value="HTML"></input>
//             <label className="remember-label" >Remember me</label>
//             <button type="submit" className="form_button">Sign Up</button>
//             <div className="form_social">
//               <span className="form_social-text">Or SignUp with</span>

//               <a href="#" className="form_social-icon">
//                 <i className="bx bxl-facebook"></i>
//               </a>
//               <a href="#" className="form_social-icon">
//                 <i className="bx bxl-google"></i>
//               </a>
//               <a href="#" className="form_social-icon">
//                 <i className="bx bxl-instagram"></i>
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import "../SignupT.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";



export default function Login() {
  
    const showSignUp = function(){
        const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
    }
  
  return (
            <div class="container" id="container">
            <div class="
            sign-up-container 
            ">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"> <i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"> <i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"> <i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button  >Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button  >Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                    <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        
                        <button onClick={showSignUp} class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
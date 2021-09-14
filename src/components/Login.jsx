import "../Login.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const inputs = document.querySelectorAll(".form_input");



function addfocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remfocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addfocus);
  input.addEventListener("blur", remfocus);
});

export default function Login() {

  const[login, setLogin] = useState(false);

  return (
    <div>
      <div className="l-form">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="form">
          <img src="https://cdn.pixabay.com/photo/2016/09/16/19/19/online-store-1674907_960_720.png" alt="" className="form_img" />
          <form action="" className="form_content">
            <h1 className="form_title">Welcome</h1>


            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>


            <a href="#" className="form_forgot">
              Forgot Password?
            </a>

            <button type="submit" className="form_button" onClick={()=>setLogin(!Login)}>{login?"Enter":"Sign Up"}</button>

            <div className="form_social">
              <span className="form_social-text">Or login with</span>

              <a href="#" className="form_social-icon">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="form_social-icon">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#" className="form_social-icon">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

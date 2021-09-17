import React from "react";
import ReactDom from "react-dom";
import "../Aboutus.css";

const mystyle = {
  color: "white",
  border: "10px solid white",
  borderRandius: "6px",
};

export default function About() {
  return (
    <div>
      <section id="about-us">
        <div className="about-us">
          <h1 className="about-us_about" id="heading">About Us</h1>
        </div>
      </section>

      <hr className="divider" />


      <section className="bio-cards">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 offset-sm-3 mt-4 mb-4">
              <h2 className="about-us-name" id="greet">Hey Guys,</h2>
              <h3 className="about-us_greeting" >I hope you all are doing great</h3>
              <h3 className="about-us_greeting">Meet our Developer Team</h3>
            </div>
          </div>

          <hr className="divider"/>

          <div class="row">
            <div class="col-lg-4 col-md-6 ">
              <div class="card-box text-center">
                <div class="user-pic">
                  <img
                    src="https://github.com/NarendraKumarJha1/The-everything-store/blob/master/public/imgs/selfpic.jpeg?raw=true"
                    class="img-fluid"
                    alt="User Pic"
                  />
                </div>
                <h2 className="about-us-name">Narendra Kumar Jha</h2>
                <h4 className="profession">Developer</h4>
                <hr />
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <hr />
                <div>
                  <a href="" className="icons">
                    <i className="bx bxl-github" />
                  </a>
                  <a href="" className="icons">
                    <i class="bx bx-mail-send"></i>
                  </a>
                  <a href="" className="icons">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
                <button class="btn btn-primary btn-lg btn-dark" type="button">
                  Get to know more
                </button>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="card-box text-center">
                <div class="user-pic">
                  <img
                    src="https://avatars.githubusercontent.com/u/62895849?v=4"
                    class="img-fluid"
                    alt="User Pic"
                  />
                </div>
                <h2 className="about-us-name">Mohit Singhal</h2>
                <h4 className="profession">Developer & Designer</h4>
                <hr />
                <p className="description">
                  I'm Mohit Singhal, a passionate coder, and a tech enthusiast
                  well-versed in Programming (C++, Java, JavaScript) with an
                  interest in Software Development and Designing (UI/UX). A CS
                  undergraduate who loves to explore new things. I've Started
                  exploring MERN Stack (MongoDB, Express, React, Node.Js) and
                  learning DSA as well.
                </p>
                <hr />
                <div>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-github" />
                  </a>
                  <a id="icons" href="" className="icons">
                    <i class="bx bx-mail-send"></i>
                  </a>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-linkedin" />
                  </a>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-instagram" />
                  </a>
                </div>
                <button class="btn btn-primary btn-lg btn-dark" type="button">
                  Get to know more
                </button>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card-box text-center">
                <div class="user-pic">
                  <img
                    src="https://avatars.githubusercontent.com/u/55994328?v=4"
                    class="img-fluid"
                    alt="User Pic"
                  />
                </div>
                <h2 className="about-us-name">Nitin Pandey</h2>
                <h4 className="profession">Developer</h4>
                <hr />
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <hr />
                <div>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-github" />
                  </a>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-linkedin" />
                  </a>
                  <a id="icons" href="" className="icons">
                    <i class="bx bx-mail-send"></i>
                  </a>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a id="icons" href="" className="icons">
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
                <button class="btn btn-primary btn-lg btn-dark" type="button">
                  Get to know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a alt="" href="#">
          Home
        </a>
        <a alt="" href="#">
          Sign Up
        </a>
      </footer>
      {/* <section className="">
        <div>
          <h3>Narendra</h3>
        </div>
      </section> */}
    </div>
  );
}

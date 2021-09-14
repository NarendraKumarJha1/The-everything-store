import React from "react";
import ReactDom from "react-dom";
import "../Aboutus.css";

export default function About() {
  return (
    <div>
      <section id="about-us">
        <div className="about-us">
          <h1>About Us</h1>
        </div>
      </section>
      <section className="bio-cards">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 offset-sm-3 mt-4 mb-4">
              <h2>Example</h2>
              <p>Example</p>
            </div>
          </div>

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
                <h2>Narendra Kumar Jha</h2>
                <h4>Developer</h4>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <hr />
                <button class="btn btn-outline-dark btn-lg" type="button">
                  Sign Up
                </button>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="card-box text-center">
                <div class="user-pic">
                  <img src="images/lab.jpg" class="img-fluid" alt="User Pic" />
                </div>
                <h2>Mohit Singhal</h2>
                <h4>Developer & Designer</h4>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <hr />
                <button class="btn btn-primary btn-lg btn-dark" type="button">
                  Sign Up
                </button>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card-box text-center">
                <div class="user-pic">
                  <img
                    src="images/Mastiff.jpg"
                    class="img-fluid"
                    alt="User Pic"
                  />
                </div>
                <h2>Nitin Pandey</h2>
                <h4>Developer</h4>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <hr />
                <button class="btn btn-primary btn-lg btn-dark" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div>
          <h3>Narendra</h3>
        </div>
      </section> */}
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import "../UserProductPro.css";

function UserProductProfile() {
  return (
    <div class="card-group">
      {/* FIRST CARD */}

      <div className="card w-25" id="cardProduct">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          class="card-img-top"
          alt="User Pic"
        />
        <div className="card-body">
          <h3 class="card-title">PRODUCT</h3>
          <h2 class="dog-bio">PRICE</h2>
          <hr />
          <p class="dog-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
          <button class="btn btn-outline-dark btn-lg" type="button">
            Sign Up
          </button>
        </div>
      </div>

      {/* SECOND CARD */}

      <div className="card w-25" id="cardProduct">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          class="card-img-top"
          alt="User Pic"
        />
        <div className="card-body">
          <h3 class="card-title">PRODUCT</h3>
          <h2 class="card-text">PRICE</h2>
          <hr />
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
          <button class="btn btn-primary btn-lg btn-dark" type="button">
            Sign Up
          </button>
        </div>
      </div>

      {/* THIRD CARD */}

      <div className="card w-25" id="cardProduct">
        <img
          src="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__480.jpg"
          class="card-img-top"
          alt="User Pic"
        />
        <div className="card-body">
          <h3 class="card-title">PRODUCT</h3>
          <h2 class="card-text">PRICE</h2>
          <hr />
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
          <button class="btn btn-primary btn-lg btn-dark" type="button">
            Sign Up
          </button>
        </div>
      </div>
    
    
    </div>
  );
}

export default UserProductProfile;

import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import UserProductProfile from "./UserProductProfile";
import UserProductTitle from "./UserProductTitle";
import userNavbar from "./userNavbar";

export default function UserProfile() {
  return (
    <div>
      <userNavBar />
      <UserProductTitle />
      <UserProductProfile />
      <Footer />
    </div>
  );
}

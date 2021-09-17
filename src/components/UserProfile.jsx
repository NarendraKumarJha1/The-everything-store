import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import UserProductProfile from "./UserProductProfile";
import UserProductTitle from "./UserProductTitle";

export default function UserProfile() {
  return (
    <div>
      <NavBar/>
      <UserProductTitle />
      <UserProductProfile />
    </div>
  );
}

import React from "react";
import { ReactDOM } from "react";
import UserProductProfile from "./UserProductProfile";
import UserProductTitle from "./UserProductTitle";

export default function UserProfile() {
  return (
    <div>
      <UserProductTitle />
      <UserProductProfile />
    </div>
  );
}

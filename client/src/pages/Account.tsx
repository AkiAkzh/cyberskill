import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Courses.css";
import "./Account.css";

const Courses1: FunctionComponent = () => {
  return (
    <div className="account">
      <NavBar />
      <h1>Account</h1>
    </div>
  );
};

export default Courses1;

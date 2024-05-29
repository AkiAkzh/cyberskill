import React, { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";
import "./SignUpPage.css";
import { observer } from "mobx-react-lite";

const SignUpPage: FunctionComponent = () => {
  return (
    <div className="sign-up-page">
      
      <NavBar />
      <div className="signup-sections">
        <div className="signupbox">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default observer(SignUpPage);

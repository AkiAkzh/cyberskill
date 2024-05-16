import { FunctionComponent } from "react";
import SignUpNavBar from "../components/SignUpNavBar";
import SignUpForm from "../components/Form";
import "./SignUpPage.css";

const SignUpPage: FunctionComponent = () => {
  return (
    <div className="sign-up-page">
      <SignUpNavBar />
      <main className="signup-sections">
        <div className="signupbox">
          <SignUpForm />
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;

import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LoginNavBar from "../components/NavBar";
import "./LoginPage.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="login-page">
      <LoginNavBar />
      <main className="login-sections">
        <div className="loginbox">
          <div className="form">
            <div className="login-parent">
              <b className="login">Login</b>
              <div className="create-account-message">
                <form className="form1">
                  <div className="form-fields">
                    <div className="email">
                      <input
                        className="email-address"
                        placeholder="Email address"
                        type="email"
                      />
                      <img
                        className="iconaccount"
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className="password">
                      <input
                        className="password1"
                        placeholder="Password"
                        type="password"
                      />
                      <img
                        className="iconpassword"
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className="beginlearningbutton">
                    <div className="login1">Login</div>
                  </button>
                </form>
              </div>
              <div className="frame-child" />
            </div>
            <div className="dont-have-an-container">
              <span>
                <span>Don’t have an account yet?</span>
                <span className="span">{` `}</span>
              </span>
              <span className="sign-up">
            <Link to="/sign-up-page"><span>Sign up</span></Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

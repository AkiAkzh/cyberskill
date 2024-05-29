import React,{ FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar";

const LoginPage: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {store} = useContext(Context);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <div className="login-page">
      <NavBar />
      <main className="login-sections">
        <div className="loginbox">
          <div className="form">
            <div className="login-parent">
              <b className="login">Login</b>
              <div className="create-account-message">
                <form className="form1" onSubmit={handleSubmit}>
                  <div className="form-fields">
                    <div className="email">
                      <input onChange={e => setEmail(e.target.value)}
                        value={email}
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
                      <input onChange={e => setPassword(e.target.value)}
                        value = {password}
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
                  <button onClick={() => store.login(email,password)} className="beginlearningbutton">
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
            <Link to="/signup"><span>Sign up</span></Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default observer(LoginPage);

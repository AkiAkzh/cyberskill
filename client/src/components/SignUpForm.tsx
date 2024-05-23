import React,{ FunctionComponent, useContext, useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const SignUpForm: FunctionComponent = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {store} = useContext(Context);

    return (
    <div className="form6">
      <form className="email-fieldset">
        <b className="create-account1">Create Account</b>
        <form className="form7">
          <div className="form-fields3">
            <div className="email3">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                className="email-address3"
                placeholder="Email address"
                type="email"
              />
              <img className="iconaccount3" alt="" src="/iconaccount.svg" />
            </div>
            <div className="password6">
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                className="password7"
                placeholder="Password"
                type="password"
              />
              <img className="iconpassword4" alt="" src="/iconpassword.svg" />
            </div>
            
          </div>
          <button onClick={() => store.registration(email,password)}  className="beginlearningbutton7">
            <div className="login10">Sign up</div>
          </button>
        </form>
      </form>
      <div className="form-child" />
      <div className="i-already-have-container1">
        <span>{`I already have an account. `}</span>
        <Link to="/login-page"><span className="login11">Login</span></Link>
      </div>
    </div>
  );
};

export default observer(SignUpForm);

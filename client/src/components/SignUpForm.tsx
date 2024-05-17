import { FunctionComponent } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";

const SignUpForm: FunctionComponent = () => {
  return (
    <div className="form6">
      <form className="email-fieldset">
        <b className="create-account1">Create Account</b>
        <form className="form7">
          <div className="form-fields3">
            <div className="email3">
              <input
                className="email-address3"
                placeholder="Email address"
                type="email"
              />
              <img className="iconaccount3" alt="" src="/iconaccount.svg" />
            </div>
            <div className="password6">
              <input
                className="password7"
                placeholder="Password"
                type="password"
              />
              <img className="iconpassword4" alt="" src="/iconpassword.svg" />
            </div>
            <div className="confirm-password3">
              <input
                className="confirm-password4"
                placeholder="Confirm password"
                type="password"
              />
              <img className="iconpassword5" alt="" src="/iconpassword.svg" />
            </div>
          </div>
          <button className="beginlearningbutton7">
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

export default SignUpForm;

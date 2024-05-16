import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import "./NavBar11.css";

const SignUpNavBar: FunctionComponent = () => {
  return (
    <header className="navbar7">
      <div className="navbar-content7">
        <div className="logo12">
          <div className="logo13">
            <Link className="cyberskills14" to="/">
              CyberSkills
            </Link>
          </div>
        </div>
        <div className="navlinkscontainer7">
          <div className="navlinks7">
          <LanguageSelection />
            <Link to="/login-page" className="dashboard14">Dashboard</Link>
            <Link to="/courses" className="courses15">Courses</Link>
            <Link to="/about-us" className="about-us13">About us</Link>
            <Link className="loginbutton3" to="/login-page">
              <div className="login9">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignUpNavBar;

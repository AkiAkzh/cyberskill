import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import "./NavBar.css";

const LoginNavBar: FunctionComponent = () => {
  return (
    <header className="navbar5">
      <div className="navbar-content5">
        <div className="logo10">
          <Link className="cyberskills9" to="/">
            CyberSkills
          </Link>
        </div>
        <div className="navlinkscontainer5">
          <div className="navlinks5">
          <LanguageSelection />
            <Link to="/login-page"className="dashboard12">Dashboard</Link>
            <Link to="/courses"className="courses12">Courses</Link>
            <Link to="/about-us"className="about-us11">About us</Link>
            <Link className="signupbuttom1" to="/sign-up-page">
              <div className="signup1">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginNavBar;

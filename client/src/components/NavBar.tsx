import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import "./NavBar.css";

const LoginNavBar: FunctionComponent = () => {
  return (
    <header className="navbar3">
          <div className="navbar-content3">
            <a className="logo6">
              <Link to="/welcomepage"className="cyberskills6">CyberSkills</Link>
            </a>
            <div className="navlinkscontainer3">
              <div className="navlinks3">
              <LanguageSelection />
                <Link to="/dashboard" className="dashboard-container">
                  <div className="navlink">Dashboard</div>
                </Link>
                <div className="courses-wrapper">
                  <Link className="navlink" to="/courses">
                    Courses
                  </Link>
                </div>
                <div className="about-us-wrapper">
                  <Link to="/about-us" className="navlink">About us</Link>
                </div>
                <Link to="/account" className="avatarprofile1">
                  <img
                    className="avatar-icon1"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
  );
};

export default LoginNavBar;

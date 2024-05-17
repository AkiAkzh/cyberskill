import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import "./NavBar.css";

const NavBar: FunctionComponent = () => {
  return (
    <header className="Navbar-container">
      <div className="Navbar-content">
        <div className="Cyberskills-logo">
          <Link className="Cyberskills-label" to="/">
            CyberSkills
          </Link>
        </div>
        <div className="Navbar-link-container">
          <div className="navlinks-group-container">
          <LanguageSelection />
            <Link to="/dashboard"className="links-nav">Dashboard</Link>
            <Link to="/courses"className="links-nav">Courses</Link>
            <Link to="/about-us"className="links-nav">About us</Link>
            <Link className="SignUpButtom" to="/sign-up-page">
              <div className="SignUp-label">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import React , { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import { useLanguage } from '../context/LanguageContext';
import "./NavBar.css";

const translations = {
  EN: {
    dashboard: "Dashboard",
    courses: "Courses",
    about_us: "About us",
    sign_up_button: "Sign up",
  },
  KZ: {
    dashboard: "Басқару панелі",
    courses: "Курстар",
    about_us: "Біз туралы",
    sign_up_button: "Тіркелу",
  },
  RU: {
    dashboard: "Панель управления",
    courses: "Курсы",
    about_us: "О нас",
    sign_up_button: "Зарегистрироваться",
  },
};

const NavBar: FunctionComponent = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
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
            <Link to="/dashboard"className="links-nav">{t.dashboard}</Link>
            <Link to="/courses"className="links-nav">{t.courses}</Link>
            <Link to="/about-us"className="links-nav">{t.about_us}</Link>
            <Link className="SignUpButtom" to="/sign-up-page">
              <div className="SignUp-label">{t.sign_up_button}</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

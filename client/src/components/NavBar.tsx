import React , { FunctionComponent, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import { useLanguage } from '../context/LanguageContext';
import "./NavBar.css";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const translations = {
  EN: {
    dashboard: "Dashboard",
    courses: "Courses",
    about_us: "About us",
    sign_up_button: "Login",
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
  const { store } = useContext(Context);
  
  const t = translations[language];
  
  

  if( !store.isAuth ){
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
              <div></div>
              <Link to="/courses"className="links-nav">{t.courses}</Link>
              <Link className="SignUpButtom" to="/login">
                <div className="SignUp-label">{t.sign_up_button}</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
  else{
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
              <Link className="SignUpButtom" to="/profile">
                <div className="SignUp-label">Profile</div>
              </Link>
              <button className="SignUpButtom" onClick={ () => store.logout()}> 
                <div className="SignUp-label">Logout</div>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default observer(NavBar);

import React, { FunctionComponent } from "react";
import { useLanguage } from '../context/LanguageContext';
import "./Footer.css";

const translations = {
  EN: {
    dashboard: "Dashboard",
    courses: "Courses",
    about_us: "About us",
    account: "Account",
  },
  KZ: {
    dashboard: "Басқару панелі",
    courses: "Курстар",
    about_us: "Біз туралы",
    account: "Аккаунт",
  },
  RU: {
    dashboard: "Панель управления",
    courses: "Курсы",
    about_us: "О нас",
    account: "Аккаунт",
  },
};

const FooterContainer: FunctionComponent = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <footer className="footer4">
      
      <div className="emails4">
        <div className="vector-parent4">
          <img
            className="vector-icon9"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="astanaitedukz8">212194@astanait.edu.kz</div>
        </div>
        <div className="vector-parent5">
          <img className="vector-icon10" alt="" src="/vector-1.svg" />
          <div className="astanaitedukz9">212456@astanait.edu.kz</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;

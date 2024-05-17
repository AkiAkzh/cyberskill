import React, { FunctionComponent } from "react";
import "./Footer.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer4">
      <div className="footercontainer4">
        <b className="logo14">CyberSkills</b>
        <div className="fotterlinks4">
          <div className="dashboard16">Dashboard</div>
          <div className="courses17">Courses</div>
          <div className="about-us14">About us</div>
        </div>
        <button className="accountbutton3">
          <div className="account3">Account</div>
        </button>
      </div>
      <div className="emails4">
        <div className="vector-parent4">
          <img
            className="vector-icon9"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="astanaitedukz8">212456@astanait.edu.kz</div>
        </div>
        <div className="vector-parent5">
          <img className="vector-icon10" alt="" src="/vector-1.svg" />
          <div className="astanaitedukz9">212456@astanait.edu.kz</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

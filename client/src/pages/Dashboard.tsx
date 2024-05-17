import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import MyCoursesBlock from "../components/MyCoursesBlock";
import NavBar from "../components/NavBar";
import "./Dashboard.css";
import SearchCoursesBlock from "../components/SearchCoursesBlock";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard6">
      <main className="navbar-parent">
        <NavBar />
        <section className="frame-section">
          <div className="dashboard-frame">
            <h1 className="dashboard8">Dashboard</h1>
          </div>
          <div className="frame-div">
            <div className="continue-button-parent">
              <div className="continue-button">
                <h1 className="welcome-back">Welcome back!</h1>
                <div className="complete-the-courses">
                  Complete the courses and gain skills in information security.
                  Look for other courses in the Courses section.
                </div>
                <Link className="getstartedbutton1" to="/courses">
                  <div className="view-other-courses">View other courses</div>
                  <img
                    className="arrow-forward-fill0-wght400-gr-icon"
                    loading="lazy"
                    alt=""
                    src="/arrow-forward-fill0-wght400-grad0-opsz24-11.svg"
                  />
                </Link>
              </div>
              <img className="icon1" loading="lazy" alt="" src="/71@2x.png" />
            </div>
          </div>
        </section>
        <MyCoursesBlock />
      </main>
      <footer className="footer2">
        <div className="footercontainer2">
          <a className="logo7">CyberSkills</a>
          <div className="fotterlinks2">
            <a className="dashboard9">Dashboard</a>
            <Link className="courses8" to="/courses">
              Courses
            </Link>
            <a className="about-us7">About us</a>
          </div>
          <a className="accountbutton2">
            <div className="account2">Account</div>
          </a>
        </div>
        <div className="emails2">
          <div className="vector-container">
            <img
              className="vector-icon3"
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
            <div className="astanaitedukz4">212456@astanait.edu.kz</div>
          </div>
          <div className="vector-parent1">
            <img className="vector-icon4" alt="" src="/vector-11.svg" />
            <div className="astanaitedukz5">212456@astanait.edu.kz</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

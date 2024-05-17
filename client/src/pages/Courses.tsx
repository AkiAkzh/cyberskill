import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchCoursesBlock from "../components/SearchCoursesBlock";
import CoursesList from "../components/CoursesList"
import "./Courses.css";

const Courses1: FunctionComponent = () => {
  return (
    <div className="courses">
      <NavBar />
      <section className="home-header">
      <div className="home-header-inner">
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="frame-wrapper2">
            <div className="courses-parent">
              <h1 className="courses11">Courses</h1>
              <h2 className="search-for-any">
                Search for any information security course by filtering them by
                difficulty
              </h2>
            </div>
          </div>
          <div className="frame-parent2">
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame1@2x.png"
            />
            <div className="person-fill-weight-gradient-ci-parent">
              <div className="person-fill-weight-gradient-ci" />
              <img className="frame-icon1" alt="" src="/frame-11@2x.png" />
            </div>
            <img className="frame-icon2" alt="" src="/frame-21@2x.png" />
          </div>
        </div>
      </div>
    </section>

      <CoursesList />
            <div className="footer-container">
        <button className="show-more-button">
          <div className="show-more-text">Show more</div>
        </button>
      </div>
      <section className="footer">
        <div className="footercontainer">
          <Link className="logo1" to="/dashboard">
            CyberSkills
          </Link>
          <div className="fotterlinks">
            <Link className="dashboard1" to="/dashboard">
              Dashboard
            </Link>
            <a className="courses2">Courses</a>
            <a className="about-us1">About us</a>
          </div>
          <a className="accountbutton">
            <div className="account">Account</div>
          </a>
        </div>
        <div className="emails">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector-11.svg" />
            <div className="astanaitedukz">212456@astanait.edu.kz</div>
          </div>
          <div className="vector-group">
            <img className="vector-icon1" alt="" src="/vector-11.svg" />
            <div className="astanaitedukz1">212456@astanait.edu.kz</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses1;

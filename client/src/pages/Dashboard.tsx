import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import MyCoursesBlock from "../components/MyCoursesBlock";
import NavBar from "../components/NavBar";
import "./Dashboard.css";
import FooterContainer from "../components/FooterContainer";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard-main">
      <NavBar />
      <section className="dashboard-header">
        <main className="dashboard-header-inner"> 
        <section className="dashboard-container">
          <div className="dashboard-text-container">
            <h1 className="dashboard-text-label">Dashboard</h1>
          </div>
          <div className="dashboard-text-frame-container">
            <div className="dashboard-text-frame-container-inner">
              <div className="dashboard-text-container">
                <h1 className="dashboard-welcome-back">Welcome back!</h1>
                <div className="dashboard-complete-the-courses">
                  Complete the courses and gain skills in information security.
                  Look for other courses in the Courses section.
                </div>
                <Link className="dashboard-getstart-button" to="/courses">
                  <div className="dashboard-view-other-courses">View other courses</div>
                  <img
                    className="icon-arrow-forward"
                    loading="lazy"
                    alt=""
                    src="/arrow-forward-fill0-wght400-grad0-opsz24-11.svg"
                  />
                </Link>
              </div>
              <img className="dashboard-frame" loading="lazy" alt="" src="/71@2x.png" />
            </div>
          </div>
        </section>
        </main>
      </section>
        <MyCoursesBlock />
        <FooterContainer/>
        {/* <MyCoursesBlock /> */}
    </div>
  );
};

export default Dashboard;

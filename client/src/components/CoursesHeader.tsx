import React, { FunctionComponent } from "react";
import "./CoursesHeader.css";

const CoursesHeader: FunctionComponent = () => {
  return (
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
  );
};

export default CoursesHeader;

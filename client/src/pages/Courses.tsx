import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterContainer from "../components/FooterContainer";
import CoursesList from "../components/CoursesList"
import "./Courses.css";
import { observer } from "mobx-react-lite";

const Courses: FunctionComponent = () => {
  return (
    <div className="courses-main">
      <NavBar />
      <section className="course-header">
        <div className="course-header-inner">
          <div className="course-container">
            <div className="course-header-text-container">
              <div className="course-text-container">
                <h1 className="text-courses">Courses</h1>
                <h2 className="text-search-for-any">
                  Search for any information security course by filtering them by
                  difficulty
                </h2>
              </div>
            </div>
            <div className="course-header-frames-container">
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame1@2x.png"
              />
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame-11@2x.png"
              />
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame-21@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <CoursesList />
      <FooterContainer/>
    </div>
  );
};

export default Courses;

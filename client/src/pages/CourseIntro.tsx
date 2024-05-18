import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import CourseInformationContainer from "../components/CourseInformationContainer";
import CourseSections from "../components/CourseSections";
import FooterContainer from "../components/FooterContainer";
import "./CourseIntro.css";

const CourseIntro: FunctionComponent = () => {
  return (
    <div className="course-intro">
      <NavBar />
      <CourseInformationContainer />
      <CourseSections />
      <FooterContainer />
    </div>
  );
};

export default CourseIntro;

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./CoursesLink.css";

const CoursesLink: FunctionComponent = () => {
  return (
    <Link className="courses16" to="/courses">
      Courses
    </Link>
  );
};

export default CoursesLink;

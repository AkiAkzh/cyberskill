import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import ProfileContainer from "../components/ProfileContainer";
import FooterContainer from "../components/FooterContainer";
import "./ProfileUser.css";
import CoursesList from "../components/CoursesList";

const ProfileUser: FunctionComponent = () => {
  return (
    <div className="profile-user">
      <NavBar />
      <ProfileContainer />
      <section className="course-list">
        <div className="courses">
        <CoursesList />
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default ProfileUser;

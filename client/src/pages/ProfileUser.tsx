import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import ProfileContainer from "../components/ProfileContainer";
import MyCoursesBlock from "../components/MyCoursesBlock";
// import Homes from "../components/Homes";
import FooterContainer from "../components/FooterContainer";
import "./ProfileUser.css";

const ProfileUser: FunctionComponent = () => {
  return (
    <div className="profile-user">
      <NavBar />
      <ProfileContainer />
      <section className="course-list">
        <div className="courses">
        <MyCoursesBlock />
          {/* <Homes /> */}
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default ProfileUser;

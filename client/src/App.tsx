import React, { useContext, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ProfileUser from "./pages/ProfileUser";
import CourseIntro from "./pages/CourseIntro";
import CoursePage from "./pages/CoursePage";
import AdminPage from "./pages/AdminPage";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import Course_page_test from "./pages/course_page_test";
import CoursePagePentest from "./pages/CoursePagePentest";



function App() {
  const{store} = useContext(Context);

  
  
  return (

    <LanguageProvider>
      <Routes >
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/courseinfo" element={<CourseIntro />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/course_page_test" element={<Course_page_test />} />
        <Route path="/course-page-pentest" element={<CoursePagePentest />} />
        
      </Routes>
    </LanguageProvider>
  );
}
export default observer(App);

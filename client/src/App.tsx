import React, { useContext, useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { LanguageProvider } from "./context/LanguageContext";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ProfileUser from "./pages/ProfileUser";
import CourseIntroPentest from "./pages/CourseIntro";
import CoursePage from "./pages/CoursePage";
import AdminPage from "./pages/AdminPage";
import CoursePagePentest from "./pages/CoursePagePentest";
import CoursePageCryptography from "./pages/CoursePageCryptography";


function App() {
  const{store} = useContext(Context);

  useEffect( ()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])
  
  return (

    <LanguageProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/course/info" element={<CourseIntroPentest />} />
        <Route path="/profile" element={<ProfileUser />}  />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/courses/Pentesting Fundamentals" element={<CoursePagePentest />} />
        <Route path="/courses/Introduction-of-Cryptography" element={<CoursePageCryptography />} />
      </Routes>
    </LanguageProvider>
  );
}
export default observer(App);

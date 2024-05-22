import React, { useEffect } from "react";
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
import Course_page_test from "./pages/course_page_test";
import CoursePagePentest from "./pages/CoursePagePentest";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/courses":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/welcomepage":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
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
export default App;

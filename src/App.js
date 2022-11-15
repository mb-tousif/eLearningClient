import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ShareCompnt/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Courses from "./Pages/Courses/Courses";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./ShareCompnt/Footer";
import ScrollToTop from "./ShareCompnt/ScrollNavigation";
import SocialShare from "./ShareCompnt/SocialShare";
import PageNotFound from "./ShareCompnt/PageNotFound";
import AllCourses from "./Pages/Courses/AllCourses";
import StudentProgress from "./Pages/Courses/StudentProgress";
import NoticeBoard from "./Pages/Courses/NoticeBoard";
import ProgrammingLanguages from "./Pages/Courses/Languages";
import MachineLearning from "./Pages/Courses/MachineLearning";
import CyberSecurity from "./Pages/Courses/CyberSecurity";
import WebDevelopment from "./Pages/Courses/WebDevelopment";

function App() {
  return (
    <>
      <SocialShare />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<AllCourses />} />
          <Route path="webDevelopment" element={<WebDevelopment />} />
          <Route path="cyberSecurity" element={<CyberSecurity />} />
          <Route path="machineLearning" element={<MachineLearning />} />
          <Route path="languages" element={<ProgrammingLanguages />} />
          <Route path="noticeBoard" element={<NoticeBoard />} />
          <Route path="studentProgress" element={<StudentProgress />} />
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

<ToastContainer />;

export default App;

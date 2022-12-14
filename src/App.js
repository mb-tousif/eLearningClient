import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import MyCart from "./Pages/Courses/MyCart";
import MyCourses from "./Pages/Courses/MyCourses";
import StudentSupport from "./Pages/Courses/StudentSupport";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import AdminPage from "./Pages/Courses/AdminPage";
import StripeCard from "./Pages/Courses/StripeCard";

function App() {
  const token = localStorage.getItem("token");
  AOS.init();
  return (
    <>
      <ScrollToTop />
      <SocialShare />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={ token ? <Courses /> : <Navigate to="/login" />}>
          <Route index element={<AllCourses />} />
          <Route path="admin" element={<AdminPage/>} />
          <Route path="cart" element={<MyCart />} />
          <Route path="cart/paymentGateway" element={<StripeCard/>} />
          <Route path="myCourses" element={<MyCourses />} />
          <Route path="support" element={<StudentSupport/>} />
          <Route path="noticeBoard" element={<NoticeBoard />} />
          <Route path="studentProgress" element={<StudentProgress />} />
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogDetails/>} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}
export default App;

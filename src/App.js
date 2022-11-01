import React, {Fragment} from "react";
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
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./ShareCompnt/Footer";

function App() {
  return (
    <Fragment className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signUp" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Fragment>
  );
}

<ToastContainer />;

export default App;

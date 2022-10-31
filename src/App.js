import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ShareCompnt/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

<ToastContainer />;

export default App;

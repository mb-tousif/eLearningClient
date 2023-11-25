import Footer from "../ShareCompnt/Footer";
import Navbar from "../ShareCompnt/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
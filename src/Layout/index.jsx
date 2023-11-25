import Aos from "aos";
import Footer from "../ShareCompnt/Footer";
import Navbar from "../ShareCompnt/Navbar";
import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";
const Main = () => {
  Aos.init();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
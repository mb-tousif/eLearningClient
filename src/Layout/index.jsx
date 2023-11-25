import Footer from "../ShareCompnt/Footer";
import Navbar from "../ShareCompnt/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ShareCompnt/ScrollNavigation";
import SocialShare from "../ShareCompnt/SocialShare";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <SocialShare />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
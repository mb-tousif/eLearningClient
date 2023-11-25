import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./ShareCompnt/Footer";
import ScrollToTop from "./ShareCompnt/ScrollNavigation";
import SocialShare from "./ShareCompnt/SocialShare";
import Navbar from "./ShareCompnt/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <body>
      <ScrollToTop />
      <SocialShare />
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </body>
  );
}

export default App;
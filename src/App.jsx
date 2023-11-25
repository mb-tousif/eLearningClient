import "./index.css"
import Main from "./Layout";
import ScrollToTop from "./ShareCompnt/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;
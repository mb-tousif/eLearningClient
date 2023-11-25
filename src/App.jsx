import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Layout";

function App() {
  AOS.init();
  return (
    <>
      <Main />
    </>
  );
}

export default App;
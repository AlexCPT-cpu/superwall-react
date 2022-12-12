import Routing from "./config/routings";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();

  return <Routing />;
}

export default App;

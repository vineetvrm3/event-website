import "./App.css";

// importing Navbar and Banner from components folder
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const App = () => (
    //compiling the components in app
  <>
    <Navbar />;
    <Banner />
  </>
);
export default App;

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/app.css";

function App() {
  return (
    <>
      <div className="stick-top">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <Project></Project>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

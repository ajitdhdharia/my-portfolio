import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/app.css";

function App() {
  return (
    <>
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

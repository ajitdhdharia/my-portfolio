
import Home from "./components/Home";
import About from "./components/About"
import Skills from "./components/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

import "./styles/app.css";

function App() {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

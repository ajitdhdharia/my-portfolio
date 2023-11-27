import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";

//Root Layout
import Layout from "./components/Layout";

//Styles
import "./styles/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/my-portfolio" element={<Layout />}>
      <Route path="/my-portfolio" element={<Home />} />
      <Route path="/my-portfolio/project" element={<Project />} />
      <Route path="/my-portfolio/skills" element={<Skills />} />
      <Route path="/my-portfolio/about" element={<About />} />
      <Route path="/my-portfolio/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  console.log('Paths', window.location.pathname)
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

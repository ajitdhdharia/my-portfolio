import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
import Project from "./components/Project/Project";
// import Contact from "./components/Contact";

//Root Layout
import Layout from "./components/Layout";

import "./styles/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="project" element={<Project />} />
      {/* <Route path="skills" element={<Skills />} /> */}
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="contact" element={<Contact />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

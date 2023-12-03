import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";
import ProjectDemo from "./components/ProjectDemo";

//Root Layout
import Layout from "./components/Layout";

//Styles
import "./styles/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projectDemo/:id" element={<ProjectDemo />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

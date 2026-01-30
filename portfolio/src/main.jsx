import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router"; // NOTE: Import from 'react-router-dom'

// Import your components
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
    ],
  },
]);
    

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
);

// TRING TO REMOVING ALL THE  ERRORS FROM chatGPT
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// All Pages
import NavBer from "./NavBer/Navber";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Services from "./Pages/ServicesPage/Services";
import Contact from "./Pages/Contact/Contact";

// All Pages

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <NavBer />
            <LandingPage />
          </>
        ),
      },
      {
        path: "/aboutme",
        element: (
          <>
            <NavBer />
            <AboutMe />
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            <NavBer />
            <Services />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <NavBer />
            <Contact />
          </>
        ),
      },
      {
        path: "*", // This will catch all other routes
        element: <div>404 - Page Not Found</div>,
      },
    ],
    { basename: "/golamrabbani-react-portfolio" }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

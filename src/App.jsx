import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// All Pages
import NavBer from "./NavBer/Navber";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
// import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/ServicesPage/Services";
import Contact from "./Pages/Contact/Contact";

// All Pages

function App() {
  const router = createBrowserRouter([
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
      path: "/AboutMe",
      element: (
        <>
          <NavBer />
          <AboutMe />
        </>
      ),
    },
    // {
    //   path: "/Projects",
    //   element: (
    //     <>
    //       <NavBer />
    //       <Projects />
    //     </>
    //   ),
    // },
    {
      path: "/Services",
      element: (
        <>
          <NavBer />
          <Services />
        </>
      ),
    },

    {
      path: "/Contact",
      element: (
        <>
          <NavBer />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <div>
      {/* <NavBer /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

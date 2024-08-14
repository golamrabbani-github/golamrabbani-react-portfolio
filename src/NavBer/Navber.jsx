// import React from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Font Awasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// All CSS Files 👉 NavBer All CSS Files✅
import "./cssFiles/mobile.css";
import "./cssFiles/navber.css";
import "./cssFiles/tablet.css";
import "./cssFiles/pc.css";

function Navber() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navber">
        <div className="nav-div1">
          <span>Golam Rabbani</span>
        </div>

        <div className="navber-responsive-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon className="menu-icon-hide" icon={faBars} />
        </div>

        <div className={isOpen ? "nav-div2 active" : "nav-div2"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navber-pages-buttons ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/AboutMe"
            className={({ isActive }) =>
              `navber-pages-buttons ${isActive ? "active" : ""}`
            }
          >
            About Me
          </NavLink>

          {/*  */}
          {/*  */}
          {/*  */}

          {/* <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `navber-pages-buttons ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink> */}

          {/*  */}
          {/*  */}
          {/*  */}

          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `navber-pages-buttons ${isActive ? "active" : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `navber-pages-buttons ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navber;

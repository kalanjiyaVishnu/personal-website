import React from "react";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Youtube from "./pages/Youtube";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

import { useLocation } from "react-router-dom";
// import { FaDove } from "react-icons/fa";

const Body = ({ p_name, change_page }) => {
  const loc = useLocation();
  console.log(loc.pathname);

  return (
    <div className="content" key="content">
      {String(loc.pathname) === "/home" || String(loc.pathname) === "/" ? (
        <Home />
      ) : String(loc.pathname) === "/projects" ? (
        <Projects />
      ) : String(loc.pathname) === "/youtube" ? (
        <Youtube />
      ) : String(loc.pathname) === "/contact" ? (
        <Contacts />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Body;

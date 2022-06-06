import React, { useEffect, useState } from "react";
import { FaReact, FaTabletAlt, FaEdit } from "react-icons/fa";
import Hero from "./Hero";
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const mouseEnter = (e) => {
    const innerhtml = e.target.innerHTML;
    const removeSvg = innerhtml.split("</svg>");
    setHeader(removeSvg[1]);
  };

  const mouseEnterHome = (e) => {
    setHeader("Home");
  };

  const mouseLeave = (e) => {
    setHeader("");
  };

  useEffect(() => {
    switch (header) {
      case "Home":
        setText(home);
        break;
      case "About":
        setText(about);
        break;
      case "Projects":
        setText(projects);
        break;
      case "Contact":
        setText(contact);
        break;
      case "":
        setText("");
        break;
      default:
        setText("");
    }
  }, [header]);

  const contact = "Let's Talk";
  const about = "Dive deeper";
  const projects = "View portfolio";
  const home = "Back to Home";

  const location = useLocation();
  return (
    <>
      <div className="navbar bg-base-100 shadow-md mb-8 sm:pr-1">
        <div className="flex-auto mr-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case p-0 text-xl md:text-4xl  md:p-1"
            onMouseEnter={mouseEnterHome}
            onMouseLeave={mouseLeave}
          >
            SDJ
          </Link>
        </div>
        <div className="flex-col-reverse shrink ">
          <ul className="menu menu-horizontal text-sm md:text-xl md:pr-5">
            <li className="md:mr-5 md:ml-5">
              <Link
                to="/about"
                className="p-1"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <FaTabletAlt className="text-accent" size={20} />
                About
              </Link>
            </li>
            <li className="md:mr-5 md:ml-5">
              <Link
                to="/projects"
                className="p-1 "
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <FaReact className="text-accent " size={20} />
                Projects
              </Link>
            </li>
            <li className="mr-1 md:mr-5 md:ml-5">
              <Link
                to="/contact"
                className="p-1"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <FaEdit className="text-accent" size={20} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {location.pathname === "/" ? <Hero header={header} text={text} /> : null}
    </>
  );
}

export default Nav;
//  primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral:

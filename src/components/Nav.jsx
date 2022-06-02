import React, { useEffect, useState } from "react";
import { FaReact, FaTabletAlt, FaEdit } from "react-icons/fa";
import Hero from "./Hero";
import { Link } from "react-router-dom";
function Nav() {
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [isHome, setIsHome] = useState("");

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

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, []);

  const contact = "Let's Talk";
  const about = "Dive deeper";
  const projects = "View portfolio";
  const home = "Back to Home";
  return (
    <>
      <div className="navbar bg-base-100 shadow-md mb-8 sm:pr-1">
        <div className="flex-auto mr-1">
          <Link
            to="#"
            className="btn btn-ghost normal-case p-0 text-xl md:text-4xl  md:p-1"
            onMouseEnter={mouseEnterHome}
            onMouseLeave={mouseLeave}
          >
            SDJ
          </Link>
        </div>
        <div className="flex-col-reverse shrink ">
          <ul className="menu menu-horizontal text-sm md:text-xl md:pr-5 ">
            <li className="">
              <Link
                to="/"
                className="p-1"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <FaTabletAlt className="text-accent" size={20} />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="p-1"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <FaReact className="text-accent " size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
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
      {isHome ? <Hero header={header} text={text} /> : null}
    </>
  );
}

export default Nav;
//  primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral:

import { accent } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";
import { FaReact, FaTabletAlt, FaEdit } from "react-icons/fa";
import spacex from "../img/spacex.jpg";

import Hero from "./Hero";
function Nav({}) {
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
    }
  });

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  });

  const contact = "Let's Talk";
  const about = "Dive deeper";
  const projects = "View portfolio";
  const home = "Back to Home";
  return (
    <>
      <div className="navbar bg-base-100 shadow-md mb-8">
        <div className="flex-1">
          <a
            href="#"
            className="btn btn-ghost normal-case text-3xl"
            onMouseEnter={mouseEnterHome}
            onMouseLeave={mouseLeave}
          >
            SDJ
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-2xl">
            <li>
              <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <FaTabletAlt className="text-accent" size={20} />
                About
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <FaReact className="text-accent" size={20} />
                Projects
              </a>
            </li>
            <li>
              <a href="" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <FaEdit className="text-accent" size={20} />
                Contact
              </a>
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

import React from "react";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Resume from "../docs/resume.docx";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary p-5 flex justify-between sticky  bottom-0 left-0 right-0">
      <div className="flex flex-col pr-3">
        <h4 className="">
          Short on time? Here are the most important Links to look at.
        </h4>
        <div className="flex flex-row p-2 text-2xl">
          <a
            className="pr-5 self-center"
            href="https://www.linkedin.com/in/jordan-holland-a1596523a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="pr-5 self-center"
            href="https://github.com/softwaredevjordan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a className="self-center" href={Resume} download>
            Resume
          </a>
        </div>
      </div>
      <div className="pr-2 pl-2">
        <Logo height="70px" width="70px" className="m-auto" />
        <p className="text-xs">&copy; {footerYear} SoftwareDevJordan</p>
      </div>
    </footer>
  );
}

export default Footer;

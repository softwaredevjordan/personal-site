import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Resume from "../docs/resume.docx";
function About() {
  return (
    <div className="min-h-screen w-full">
      <div className="card m-auto  lg:w-4/5 ">
        <h1 className="card-title justify-center text-4xl pb-8">
          About Jordan
        </h1>
        <p className="card-body bg-secondary ">
          Jordan’s first experience with programming was making automatic doors
          using Red Stone Circuits in Minecraft. After that moment technology
          and programming became a passion of his. Jordan finds joy in solving
          problems that the world has, like pesky doors in Minecraft not opening
          on their own with technology. Jordan’s Favorite part of solving
          problems is turning that idea from a concept into something that can
          be implemented. To go from “I want to automatically email all these
          people in this excel file this text. To running a script that does
          that. Breaking this plan down into steps and coding can be a
          monotonous and frustrating process but for Jordan it is all worth it
          when you run that script and hundreds of emails are sent out. Or much
          more importantly that door opens automatically. Jordan recently
          graduated from college with a bachelors in computer science. He has
          since been focusing his time on increasing his competency in react.
          Jordan has created React Apps that track the apps state using the
          Context API and the app state is only mutated when a call to the
          reducer is made. Jordan is familiar with API’s both in creating API’s
          and getting and displaying information from a 3rd party API. Jordan
          also has experience using the ‘react-router-dom’ function including
          routes, router, route, link, usenavigate and other functions in the
          package.
        </p>
        <br />
      </div>

      <div className=" p-9 text-xl">
        <div className="flex justify-center">
          <h3 className="text-3xl">
            If you would like to learn more about Jordan then visit these
            profiles!
          </h3>
        </div>
        <br />
        <div className="flex justify-center text-primary text-6xl">
          <a
            className="py-8  px-20 "
            href="https://github.com/softwaredevjordan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="py-8  px-20 "
            href="https://www.linkedin.com/in/jordan-holland-a1596523a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <h4 className="flex justify-center pb-10 text-3xl">
          Here is my Resume:
        </h4>
        <br />
        <div className="flex justify-center">
          <button className=" btn btn-accent rounded-md w-56 sm:w-96">
            <a href={Resume} download>
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

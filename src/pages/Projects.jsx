import React from "react";
import GIthubUserCard from "../components/GIthubUserCard";

function Projects() {
  return (
    <>
      <div className="flex">
        <h1 className="ml-auto mr-auto text-2xl">GitHub Account</h1>
      </div>
      <div className="flex justify-center">
        <GIthubUserCard userName="softwaredevjordan" />
      </div>
      <div className="flex">
        <h1 className="ml-auto mr-auto text-2xl">Repos</h1>
      </div>

      <div>{/* todo github repos */}</div>
    </>
  );
}

export default Projects;

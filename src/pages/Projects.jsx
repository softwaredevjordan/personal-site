import { useEffect, useContext } from "react";
import GithubUserCard from "../components/GithubUserCard";
import GithubContext from "../context/Github/GithubContext";
import { Link } from "react-router-dom";
import Repos from "../components/Repos";

function Projects() {
  const { repos, dispatch, fetchRepos } = useContext(GithubContext);

  useEffect(() => {
    fetchRepos("softwaredevjordan");
  }, []);

  return (
    <>
      <div className="flex">
        <h1 className=" text-2xl pb-8">GitHub Account:</h1>
      </div>
      <div className="flex justify-center">
        <GithubUserCard userName="softwaredevjordan" />
      </div>
      <div className="flex">
        <h1 className="text-2xl pt-8 pb-5">Repos:</h1>
      </div>
      <Repos />
    </>
  );
}

export default Projects;

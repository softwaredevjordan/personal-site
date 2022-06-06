import { useEffect, useContext } from "react";
import GithubUserCard from "../components/GithubUserCard";
import GithubContext from "../context/Github/GithubContext";
import { Link } from "react-router-dom";

function Projects() {
  const { repos, dispatch, fetchRepos } = useContext(GithubContext);

  const { name, html_url, description } = repos;

  useEffect(() => {
    fetchRepos("softwaredevjordan");
  }, []);

  return (
    <>
      <div className="flex">
        <h1 className="ml-auto mr-auto text-2xl pb-8">GitHub Account</h1>
      </div>
      <div className="flex justify-center">
        <GithubUserCard userName="softwaredevjordan" />
      </div>
      <div className="flex">
        <h1 className="ml-auto mr-auto text-2xl pt-8">Repos:</h1>
      </div>

      <div>
        <ul>
          {repos.map((repo) => (
            <li>
              <div className="card bg-base">
                <h2 className="card-title">{repo.name}</h2>
                <p>{repo.description}</p>
                <a
                  rel="noopener noreferrer"
                  href={repo.html_url}
                  target="_blank"
                >
                  <button className="btn btn-accent ">To Repo</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;

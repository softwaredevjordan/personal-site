import { useContext, useEffect } from "react";
import GithubContext from "../context/Github/GithubContext";

function Repos() {
  const { repos, dispatch, fetchRepos } = useContext(GithubContext);

  const { name, html_url, description, language } = repos;

  useEffect(() => {
    fetchRepos("softwaredevjordan");
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 p-5 pb-10 ">
      {repos.map((repo) => (
        <div className=" flex-col place-content-between card bg-accent">
          <div className=" p-5">
            <h2 className="card-title">Repo: {repo.name}</h2>
            <h3 className="">Language: {repo.language}</h3>
            <p className="">Description: {repo.description}</p>
          </div>
          <div className="p-5">
            <a rel="noopener noreferrer" href={repo.html_url} target="_blank">
              <button className=" btn btn-secondary rounded ">View Repo</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repos;

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
        <div className="card bg-secondary">
          <h2 className="card-title pl-2">Repo: {repo.name}</h2>
          <h3 className="pl-2">Language: {repo.language}</h3>
          <p className="pl-2">Description: {repo.description}</p>
          <a
            className="p-4"
            rel="noopener noreferrer"
            href={repo.html_url}
            target="_blank"
          >
            <button className="btn btn-accent rounded ">View Repo</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Repos;

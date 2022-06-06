import React, { useContext, useEffect } from "react";
import GithubContext from "../context/Github/GithubContext";

function GithubUserCard({ userName }) {
  const { user, dispatch, fetchUser } = useContext(GithubContext);

  useEffect(() => {
    fetchUser(userName);
  }, []);

  const { avatar_url, login, bio } = user;

  return (
    <div className="card card-side bg-base-100 shadow-xl card-compact w-96">
      <figure>
        <img src={avatar_url} alt="" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{login}</h1>
        <h3>{bio}</h3>
        <div></div>
      </div>
    </div>
  );
}

export default GithubUserCard;
// ${GITHUB_URL}/users/${userName}

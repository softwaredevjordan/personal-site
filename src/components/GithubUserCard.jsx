import React, { useContext, useEffect } from "react";
import GithubContext from "../context/Github/GithubContext";

function GithubUserCard({ userName }) {
  const { user, dispatch, fetchUser } = useContext(GithubContext);

  useEffect(() => {
    fetchUser(userName);
  }, []);

  const { avatar_url, login, bio } = user;

  return (
    <div className="card card-side shadow-xl card-compact w-5/6">
      <figure>
        <img src={avatar_url} alt="" />
      </figure>
      <div className="card-body bg-base-200">
        <h1 className="card-title">GitHub Username: {login}</h1>
        <h3>Bio: {bio}</h3>
        <div></div>
      </div>
    </div>
  );
}

export default GithubUserCard;

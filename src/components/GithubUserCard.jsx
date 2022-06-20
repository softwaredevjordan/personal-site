import React, { useContext, useEffect } from "react";
import GithubContext from "../context/Github/GithubContext";

function GithubUserCard({ userName }) {
  const { user, dispatch, fetchUser } = useContext(GithubContext);

  useEffect(() => {
    fetchUser(userName);
  }, []);

  const { avatar_url, login, bio } = user;

  return (
    <div className="card lg:card-side shadow-xl  w-5/6">
      <figure>
        <img src={avatar_url} alt="" />
      </figure>
      <div className="card-body bg-base-200">
        <h1 className="card-title text-xl">GitHub Username:</h1>
        <h1 className="card-title text-3xl">{login}</h1>
        <h1 className="text-xl">Bio:</h1>
        <h1 className="text-xl">{bio}</h1>
        <div></div>
      </div>
    </div>
  );
}

export default GithubUserCard;

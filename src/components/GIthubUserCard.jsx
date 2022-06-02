import React, { useContext } from "react";
import GithubContext from "../context/Github/GithubContext";

function GIthubUserCard({ userName }) {
  const { user, fetchUser, dispatch } = useContext(GithubContext);

  fetchUser(userName);
  const [
    avatar_url,
    login,
    bio,
    twitter_username,
    puplic_repos,
    followers,
    following,
  ] = user;
  return <div></div>;
}

export default GIthubUserCard;

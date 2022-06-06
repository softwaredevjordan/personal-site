import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    repos: [],
    userLoading: false,
    repoLoading: false,
  };

  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const fetchUser = async (userName) => {
    const url = `${GITHUB_URL}/users/${userName}`;
    dispatch({ type: "LOAD_USER" });
    return await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }).then((res) => {
      res.json().then((res) => {
        dispatch({
          type: "GET_USER",
          payload: res,
        });
      });
    });
  };

  const fetchRepos = async (userName) => {
    const url = `${GITHUB_URL}/users/${userName}/repos`;
    dispatch({ type: "LOAD_REPOS" });
    return await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }).then((res) => {
      res.json().then((res) => {
        dispatch({
          type: "GET_REPOS",
          payload: res,
        });
      });
    });
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        userLoading: state.userLoading,
        repoLoading: state.repoLoading,
        dispatch,
        fetchUser,
        fetchRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

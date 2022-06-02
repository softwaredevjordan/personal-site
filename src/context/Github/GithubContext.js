import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    repos: [],
    userLoading: false,
    repoLoading: false,
  };

  const fetchUser = async (userName) => {
    dispatch({ type: "LOAD_USER" });
    const response = await fetch(`${GITHUB_URL}/users/${userName}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
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
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

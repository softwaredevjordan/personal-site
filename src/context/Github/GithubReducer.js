const githubReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        userLoading: true,
      };
    case "LOAD_REPO":
      return {
        ...state,
        repoLoading: true,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        repoLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;

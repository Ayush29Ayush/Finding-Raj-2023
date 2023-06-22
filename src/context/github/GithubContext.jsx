//!  this code sets up a context and provider for managing GitHub user data. It fetches user data from the GitHub API, stores it in state variables, and provides access to this data throughout the application using the GithubContext.Provider.
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  //! initialState will be an object
  const initialState = {
    users: [],
    loading: true,
  };

  //! Similar to useState syntax, in place of variable, we have our state, in place of our setVariable function to handle variable, we have dispatch to handle our state.
  //! useReducer(githubReducer, initialState) => githubReducer is the group of cases actions and their working accordingly, and the initial state will be equaL to "initialState".
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // ! This converts the response to json format
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

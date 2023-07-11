//! Refer this => https://www.robinwieruch.de/javascript-reducer/

const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, // ...state means return whatever is in the state
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;

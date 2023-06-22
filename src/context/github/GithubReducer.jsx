//! Refer this => https://www.robinwieruch.de/javascript-reducer/

const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, // ...state means return whatever is in the state
        users: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default githubReducer;

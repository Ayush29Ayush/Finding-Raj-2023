import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { getUser, user } = useContext(GithubContext);

  //! The useParams hook is used to access the parameters from the URL. In this case, it retrieves the login parameter from the URL. The params variable will hold the values of the URL parameters.
  //! useParams can be used roact-router-dom version 6 onwards
  const params = useParams();

  //! The useEffect hook is used to execute the getUser function once, immediately after the component mounts.
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}
export default User;

import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //! The useEffect hook executes the fetchUsers function once, immediately after the component mounts. It ensures that the user data is fetched and processed when the component is first rendered.
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    // ! This converts the response to json format
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg: grid-cols-3 md: grid-cols-2">
        {/* Since the response is stored in a array, we are using the .map function which iterates through each entry in the array */}
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

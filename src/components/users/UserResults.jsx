import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  // const { users, loading, fetchUsers } = useContext(GithubContext);

  //! The useEffect hook executes the fetchUsers function once, immediately after the component mounts. It ensures that the user data is fetched and processed when the component is first rendered.
  // useEffect(() => {
  //   fetchUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg: grid-cols-3 md: grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

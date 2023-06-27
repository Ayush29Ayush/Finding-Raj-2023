import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {/* <h1 className="text-6xl">Welcome Ayush</h1> */}
      {/* <p>The URL of github api is {import.meta.env.VITE_GITHUB_URL}</p> */}

      {/* //! SEARCH COMPONENT */}
      <UserSearch />
      {/* //! DISPLAY FETCHED USERS  */}
      <UserResults />
    </>
  );
}

export default Home;

function Home() {
  return (
    <div>
      <h1 className="text-6xl">Welcome Ayush</h1>
      <p>The URL of github api is {import.meta.env.VITE_GITHUB_URL}</p>
    </div>
  );
}

export default Home;

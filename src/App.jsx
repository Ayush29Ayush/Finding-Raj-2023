import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    //! In React, context is a way to pass data through the component tree without having to manually pass props down through each level. A provider is a component that provides the data to the rest of the components in the tree. To create a context and provider in React, you can use the createContext() and useContext() hooks.
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            {/* //! In react-router-dom v6, switch got replaced with routes and component with element*/}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;

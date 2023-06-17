//! Import font-awesome icons
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        {/* //! Creating other Links */}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn ">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

//! Here, a default prop title is defined for the Navbar component. If no mytitle prop is passed when using the Navbar component, it will default to the value "Finding Raj 2023".
Navbar.defaultProps = {
  title: "Finding Raj 2023",
};

//! This code specifies the prop types for the Navbar component. In this case, it defines that the title prop should be of type string. This helps validate and enforce the correct type of props passed to the component.
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

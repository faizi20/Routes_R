// import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

function Navigation() {
  const collapseRef = useRef(null);

  const hideBars = () => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                onClick={hideBars}
                as={Link}
                to="/"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "customActive" : "customInActive"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={hideBars}
                as={Link}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "customActive" : "customInActive"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={hideBars}
                as={Link}
                to="/service"
                className={({ isActive }) =>
                  isActive ? "customActive" : "customInActive"
                }
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={hideBars}
                as={Link}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "customActive" : "customInActive"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

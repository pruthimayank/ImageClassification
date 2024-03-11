import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <style>
        {`
          .navbar-toggler:focus,
          .navbar-toggler:active {
            outline: none;
            border-color: transparent;
            box-shadow: none;
          }

          .navbar-toggler-icon {
            transition: transform 0.8s ease-in-out;
          }

          .navbar-toggler-icon.cross {
            transform: rotate(90deg);
          }
        `}
      </style>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#004D77",
        }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              textShadow: "1px 3px 4px black",
            }}
          >
            &nbsp;Image<span style={{ color: "skyblue" }}>Classification</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span
              className={`navbar-toggler-icon ${isCollapsed ? "" : "cross"}`}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  activeStyle={{
                    color: "white",
                  }}
                >
                  &nbsp;&nbsp;Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/model"
                  activeStyle={{
                    color: "white",
                  }}
                >
                  &nbsp;&nbsp;Model
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/demo"
                  activeStyle={{
                    color: "white",
                  }}
                >
                  &nbsp;&nbsp;Demo
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

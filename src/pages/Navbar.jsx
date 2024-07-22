import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">works</NavLink>
          </li>
          <li>
            <NavLink to="/idea" activeclassname="active">texts + ideas</NavLink>
          </li>
          <li>
            <NavLink to="/proto" activeclassname="active">prototypes + failures</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}


export default Navbar;
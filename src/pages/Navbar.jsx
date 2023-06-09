import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <><nav className="menu">
      <ul>
        <li>
          <Link to="/about">Hidden section with some text</Link>
        </li>
      </ul>
    </nav>

      <Outlet /></>
  )
}


export default Navbar;
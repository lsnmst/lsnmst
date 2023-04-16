import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/about">Hidden section with some text</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
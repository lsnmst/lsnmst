import React from "react";
import { Link } from "react-router-dom";

function Casabar() {
  return (
    <nav className="menu casa">
      <ul>
        <li>
          <Link to="/">⌫ Go back, please</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Casabar;
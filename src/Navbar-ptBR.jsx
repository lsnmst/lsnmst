import React from "react";
import { Link } from "react-router-dom";

function NavbarptBR() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/sobre">Seção escondida com algum texto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarptBR;
import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavbarptBR() {
  return (
    <><nav className="menu">
      <ul>
        <li>
          <Link to="/sobre">textos</Link>
        </li>
      </ul>
    </nav>

      <Outlet /></>
  )
}

export default NavbarptBR;
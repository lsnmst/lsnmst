import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function NavbarptBR() {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/PtBR" activeclassname="active">trabalhos</NavLink>
          </li>
          <li>
            <NavLink to="/idea-ptBR" activeclassname="active">textos + ideias</NavLink>
          </li>
          <li>
            <NavLink to="/proto-ptBR" activeclassname="active">protótipos + fracassos</NavLink>
          </li>
        </ul>
      </nav>


      <Outlet /></>
  )
}

export default NavbarptBR;
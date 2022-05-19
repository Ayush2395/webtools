import React from "react";
import logo from "../assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Navigationbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="menu_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/textutils">Text Utility</NavLink>
          </li>
          <li>
            <NavLink to="/login">Todos</NavLink>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
        <div>&nbsp;</div>
      </nav>
    </>
  );
}

export default Navigationbar;

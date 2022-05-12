import React from "react";
import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigationbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#">
          <img src={logo} alt="" className="logo" />
        </a>
        <ul className="menu_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <a href="#">Text Utility</a>
          </li>
          <li>
            <a href="#">Todo</a>
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

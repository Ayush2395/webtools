import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../context/AppState";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend/firebase.config";

function Navigationbar() {
  const { signOutUser } = useAppState();
  const [loginBtn, setLoginBtn] = useState(true);
  const navigate = useNavigate();
  const userLogout = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (err) {
      console.log(err.code);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setLoginBtn(true);
      } else if (currentUser) {
        setLoginBtn(false);
      }
    });
  }, []);

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
        {loginBtn ? (
          <Link to={"/login"} className="nav_login">
            Login
          </Link>
        ) : (
          <button className="nav_login" onClick={userLogout}>
            Logout
          </button>
        )}
      </nav>
    </>
  );
}

export default Navigationbar;

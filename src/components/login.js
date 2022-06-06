import React, { useEffect, useState } from "react";
import { useAppState } from "../context/AppState";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../backend/firebase.config";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillCloseCircle,
  AiFillTwitterCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    onAuthStateChanged,
    loginUser,
    googleUserLogin,
    twitterUserLogin,
    error,
    setError,
  } = useAppState();

  async function loginUserByEmail(event) {
    event.preventDefault();
    setError({ error: false });

    if (email === "" || password === "") {
      return setError({ error: true, msg: "Input field value is missing" });
    }

    try {
      await loginUser(email, password);
      navigate("/todos");
    } catch (err) {
      if (err.code === "auth/wrong-password")
        setError({ error: true, msg: "Wrong password" });
      if (err.code === "auth/user-not-found")
        setError({ error: true, msg: "User not found" });
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        navigate("/todos");
      }
    });
  }, []);

  async function googleAuthLogin() {
    setError({ error: false, msg: "" });
    try {
      await googleUserLogin();
      navigate("/todos");
    } catch (err) {
      console.log(err.message);
    }
  }
  async function twitterLogin() {
    try {
      await twitterUserLogin();
      navigate("/todos");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="section login_section">

        <div className="cards login_card">
          <h1 className="title">Login to Todos</h1>
          <form onSubmit={loginUserByEmail} className="form">
            <div className="form_group">
              <input
                type="email"
                className="form_input"
                id="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form_label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form_group">
              <input
                type="password"
                className="form_input"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form_label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="form_group">
              <button type="submit" className="button login_btn">
                Login
              </button>
            </div>
            <div className="stroke_line">
              <hr />
              OR <hr />
            </div>
          </form>
          <div className="social grid">
            <button onClick={googleAuthLogin} className="social_media button">
              <FcGoogle size={30} />
            </button>
            <Link to="/phlogin" className="social_media button">
              <AiOutlinePhone size={30} />
            </Link>
            <button onClick={twitterLogin} className="social_media button">
              <AiFillTwitterCircle size={30} />
            </button>
          </div>
          <div className="register">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

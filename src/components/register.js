import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillCloseCircle,
  AiFillTwitterCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { useAppState } from "../context/AppState";
import { auth } from "../backend/firebase.config";
import { MdErrorOutline } from "react-icons/md";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const {
    registerNewUser,
    googleUserLogin,
    onAuthStateChanged,
    error,
    setError,
  } = useAppState();

  const registerUser = async (event) => {
    event.preventDefault();
    if (email === "" || password === "" || ConfirmPassword === "") {
      return setError({ error: true, msg: "Input fields are missing" });
    }

    if (password.length !== ConfirmPassword.length) {
      return setError({ error: true, msg: "password doesn't match" });
    }

    try {
      await registerNewUser(email, password);
      navigate("/todos");
    } catch (err) {
      setError({ err: true, msg: err.message });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/register");
      } else {
        navigate("/todos");
      }
    });
  }, []);

  async function googleAuthLogin() {
    try {
      await googleUserLogin();
      navigate("/todos");
    } catch (err) {
      setError({ err: true, msg: err.message });
    }
  }

  return (
    <>
      <div className="section login_section">
        {error?.msg && (
          <div className="button message">
            <MdErrorOutline size={25} color="var(--link-color)" />
            <p>{error?.msg}</p>
            <button onClick={() => setError("")} className="alert">
              <AiFillCloseCircle color="var(--yellow-color)" size={25} />
            </button>
          </div>
        )}
        <div className="cards login_cards register_cards">
          <h1 className="title">Register User</h1>
          <form onSubmit={registerUser} className="form">
            <div className="form_group">
              <input
                type="email"
                className="form_input"
                id="email"
                placeholder=""
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="form_label">
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
              <label htmlFor="email" className="form_label">
                Password
              </label>
            </div>
            <div className="form_group">
              <input
                type="password"
                className="form_input"
                id="confirm_password"
                placeholder=""
                autoComplete="off"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirm_password" className="form_label">
                Confirm Password
              </label>
            </div>
            <div className="form_group">
              <button type="submit" className="button login_btn">
                Register
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
            <button className="social_media button">
              <AiFillTwitterCircle size={30} />
            </button>
          </div>
          <div className="register">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

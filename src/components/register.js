import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AiFillTwitterCircle, AiOutlinePhone } from "react-icons/ai";
import { useAppState } from "../context/AppState";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { registerNewUser } = useAppState();

  const registerUser = async (event) => {
    event.preventDefault();
    if (email === "" || password === "" || ConfirmPassword === "") {
      return;
    }

    if (password.length !== ConfirmPassword.length || password.length < 8) {
      return;
    }

    try {
      await registerNewUser(email, password);
      navigate("/todos");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="section login_section">
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
            <div className="social grid">
              <button className="social_media button">
                <FcGoogle size={30} />
              </button>
              <button className="social_media button">
                <AiOutlinePhone size={30} />
              </button>
              <button className="social_media button">
                <AiFillTwitterCircle size={30} />
              </button>
            </div>
            <div className="register">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

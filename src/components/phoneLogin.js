import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../context/AppState";

function PhoneLogin() {
  const { phoneSignUp, error, setError } = useAppState();
  const [number, setNumber] = useState("");

  const getOtp = async (event) => {
    event.preventDefault();
    setError("");
    if (number === "" || number === undefined) {
      return setError({ error: true, msg: "Invalid Phone Number" });
    }

    try {
      const response = await phoneSignUp(number);
      console.log(response);
    } catch (err) {
      setError({ err: true, msg: err.message });
    }
    console.log(number);
  };

  return (
    <>
      <div className="section login_section">
        <p onClick={() => setError("")} className="danger">
          {error.msg}
        </p>
        <div className="cards">
          <h1 className="title">Phone Authentication</h1>
          <form onSubmit={getOtp} className="form">
            <div className="form_group">
              <input
                type="text"
                className="form_input"
                placeholder="ex: 91your no."
                id="otp"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <label htmlFor="otp" className="form_label">
                Phone number
              </label>
              <div className="captcha_container"></div>
            </div>
            <div className="form_group">
              <button type="submit" className="button login_btn">
                Send OTP
              </button>
            </div>
            <div className="form_group">
              <div className="register">
                <Link to={"/login"} className="button">
                  <p>Cancel ?</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PhoneLogin;

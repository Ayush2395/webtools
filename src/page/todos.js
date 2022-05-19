import React, { useEffect } from "react";
import { useAppState } from "../context/AppState";
import { auth } from "../backend/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillCloseCircle,
  AiFillTwitterCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/9177-taskman.json";
import { FcGoogle } from "react-icons/fc";

function Todos() {
  const { onAuthStateChanged, signOutUser, error, setError, user } =
    useAppState();
  const navigate = useNavigate();

  async function signOut() {
    await signOutUser();
    navigate("/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (!user) {
        navigate("/login");
      } else {
        navigate("/todos");
        setError({ error: true, msg: "Welcome" });
      }
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveaspectratio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="section todos_section">
        <div className="form">
          <div className="form_group">
            <input type="text" className="form_input" placeholder="" />
            <label className="form_label">Your task</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;

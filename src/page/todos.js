import React, { useEffect } from "react";
import { useAppState } from "../context/AppState";
import { auth } from "../backend/firebase.config";
import { useNavigate } from "react-router-dom";

function Todos() {
  const { onAuthStateChanged, signOutUser } = useAppState();
  const navigate = useNavigate();

  async function signOut() {
    await signOutUser();
    navigate("/login");
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
  return (
    <>
      <div className="section todos_section">
        <h1>Todos Page</h1>
        <button className="button" onClick={signOut}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Todos;

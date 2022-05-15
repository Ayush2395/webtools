import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../backend/firebase.config";

const AppContext = createContext();

function AppState({ children }) {
  const [user, setUser] = useState("");

  function registerNewUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleUserLogin() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function facebookUserLogin() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function signOutUser() {
    return signOut(auth);
  }

  return (
    <>
      <AppContext.Provider
        value={{
          user,
          registerNewUser,
          loginUser,
          googleUserLogin,
          facebookUserLogin,
          signOutUser,
          onAuthStateChanged,
          setUser,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppState;

export function useAppState() {
  return useContext(AppContext);
}

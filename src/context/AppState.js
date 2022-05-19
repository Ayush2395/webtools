import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../backend/firebase.config";

const AppContext = createContext();

function AppState({ children }) {
  const [user, setUser] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });

  function registerNewUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Save user details to cloud Storage

  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleUserLogin() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function twitterUserLogin() {
    const provider = new TwitterAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function signOutUser() {
    return signOut(auth);
  }
  const phoneSignUp = (number) => {
    let recaptchaVerifier = new RecaptchaVerifier(
      "captcha_container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          user,
          registerNewUser,
          loginUser,
          googleUserLogin,
          twitterUserLogin,
          signOutUser,
          onAuthStateChanged,
          phoneSignUp,
          setUser,
          error,
          setError,
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

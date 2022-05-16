import React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import app from "../firebase/config";
import  auth  from "../firebase/config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return app.auth.signInWithEmailAndPassword( email, password);
  }
  function signUp(email, password) {
    return app.auth.createUserWithEmailAndPassword( email, password);
  }
  function logOut() {
    return app.auth.signOut();
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return app.auth.signInWithPopup(googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = app.auth.onAuthStateChanged((currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
import React from 'react';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {

 const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {

    })
  }

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn">Sign in with google</button>
    </div>
  )
}

export default Login;

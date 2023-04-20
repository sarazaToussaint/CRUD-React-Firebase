import React from 'react';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({setIsAuth}) => {

 const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);  
      setIsAuth(true);
    })
  }

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login;

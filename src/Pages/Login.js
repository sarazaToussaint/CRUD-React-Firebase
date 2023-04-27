import React from 'react';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
 let navigate = useNavigate();

 const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      // localStorage.setItem("isAuth", true);  
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div className="loginPage">
      <p>Sign In With Google Account</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login;

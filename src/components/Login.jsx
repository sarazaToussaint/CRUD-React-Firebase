import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase-config';

const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = async () => {
     try {
       const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword);
       console.log(user);
      } catch(err) {
        console.log(err.message);
      }
    }

    const login = async () => {

    }

    const logout = async () => {

    }

  return (
    <>
      <div>
        <h3>Register User</h3>
        <input type="email" placeholder='Email...' 
         onChange={(e) => {
           setRegisterEmail(e.target.value);    
          }} 
          />
        <input type="password" placeholder='Password...' 
          onChange={(e) => {
          setRegisterPassword(e.target.value);
           }} 
          />

        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input type="email" placeholder='Email...' 
          onChange={(e) => {
           setLoginEmail(e.target.value);
           }}
           />
        <input type="password" placeholder='Password...' 
          onChange={(e) => {
            setLoginPassword(e.target.value);
            }} 
            />

        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In: </h4>

      <button onClick={logout}>Sign Out</button>
    </>
  )
}

export default Login
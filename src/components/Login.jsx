import React from 'react'

const Login = () => {

    const register = async () => {

    }

    const login = async () => {

    }

    const logout = async () => {

    }

  return (
    <>
      <div>
        <h3>Register User</h3>
        <input type="email" placeholder='Email...' />
        <input type="password" placeholder='Password...' />

        <button>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input type="email" placeholder='Email...' />
        <input type="password" placeholder='Password...' />

        <button>Login</button>
      </div>

      <h4>User Logged In: </h4>

      <button>Sign Out</button>
    </>
  )
}

export default Login
import React from 'react'

const Login = () => {
  return (
    <div>
     <h2>LOGIN</h2>
     <form>
        <input placeholder="email" />
        <input placeholder="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
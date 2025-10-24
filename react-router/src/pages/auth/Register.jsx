import React from 'react'

const Register = () => {
  return (
    <div>
      <h3>Register</h3>
      <form>
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="password" type="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
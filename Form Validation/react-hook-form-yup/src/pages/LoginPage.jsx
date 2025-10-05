// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const handleLogin = (data) => {
    console.log("User Logged In:", data);
    // API call -> POST /login
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;

// src/pages/RegisterPage.jsx
import React from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  const handleRegister = (data) => {
    console.log("User Registered:", data);
    // Here you would call API -> POST /register
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}

export default RegisterPage;

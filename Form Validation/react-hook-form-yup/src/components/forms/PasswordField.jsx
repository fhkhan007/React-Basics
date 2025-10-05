// src/components/forms/PasswordField.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

function PasswordField({ name, label = "Password", placeholder }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <input
        type="password"
        {...register(name)}
        placeholder={placeholder}
      />
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </div>
  );
}

export default PasswordField;

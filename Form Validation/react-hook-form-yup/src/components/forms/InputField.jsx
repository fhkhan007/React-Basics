// src/components/forms/InputField.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

function InputField({ name, label, type = "text", placeholder }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </div>
  );
}

export default InputField;

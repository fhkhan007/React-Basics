// src/components/RegisterForm.jsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/registerSchema";
import InputField from "./forms/InputField";
import PasswordField from "./forms/PasswordField";

function RegisterForm({ onSubmit }) {
  const methods = useForm({
    resolver: yupResolver(registerSchema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField name="name" label="Name" placeholder="Enter your name" />
        <InputField name="email" label="Email" placeholder="Enter your email" />
        <PasswordField name="password" label="Password" placeholder="Enter password" />
        <button type="submit">Register</button>
      </form>
    </FormProvider>
  );
}

export default RegisterForm;

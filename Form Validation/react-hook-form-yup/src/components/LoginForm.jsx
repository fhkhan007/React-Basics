// src/components/LoginForm.jsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/loginSchema";
import InputField from "./forms/InputField";
import PasswordField from "./forms/PasswordField";

function LoginForm({ onSubmit }) {
  const methods = useForm({
    resolver: yupResolver(loginSchema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField name="email" label="Email" placeholder="Enter your email" />
        <PasswordField name="password" label="Password" placeholder="Enter password" />
        <button type="submit">Login</button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;

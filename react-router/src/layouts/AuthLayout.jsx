import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <h2>Welcome — please login or register</h2>
      <div className="auth-container">
        <Outlet />
      </div>
    </div>
  );
}

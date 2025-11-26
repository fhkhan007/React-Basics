import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: zodResolver(loginSchema)
  });

  async function onSubmit(data) {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message);
      return;
    }

    // Save token
    localStorage.setItem("token", result.token);

    alert("Login successful");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <button type="submit">Login</button>
    </form>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className="bg-cyan-900 p-6 rounded shadow-md w-1/3 h-1/2 flex flex-col justify-center gap-4"
      >
        <input
          type="text"
          placeholder="User Name"
          className="block w-full mb-2 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-2 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          whileHover={{ scale: 1.05 }}
        >
          Login
        </motion.button>
      </form>
    </div>
  );
}

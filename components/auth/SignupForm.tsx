// components/auth/SignupForm.tsx
import React, { useState } from "react";
import API from "@/utils/api";
import router from "next/router";

type Props = {
  onSuccess?: () => void;
};

export default function SignupForm({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("auth/signup/", { username, email, password });
      alert("Signup successful! Please check your email to verify your account.");
      router.push("/verify-email");
      onSuccess?.();
    } catch (err: any) {
      const detail = err?.response?.data || err.message;
      alert("Signup failed: " + JSON.stringify(detail));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition disabled:bg-gray-400"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}

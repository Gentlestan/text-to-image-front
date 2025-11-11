import React, { useState, useContext } from "react";
import API from "@/utils/api";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

type Props = { onSuccess?: () => void };

export default function LoginForm({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, setAccessToken } = useContext(AuthContext);
  const router = useRouter();

  // components/auth/LoginForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await API.post("auth/login/", { username, password });
    const access = res.data.access;
    const user = res.data.user;

    // update context
    setAccessToken(access);
    setUser(user);

    // save to localStorage
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", res.data.refresh);

    onSuccess && onSuccess();
  } catch (err) {
    alert("Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 text-white font-medium rounded-lg transition-colors duration-200 ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

// components/auth/LogoutButton.tsx
import React, { useContext } from "react";
//import API from "../../utils/api";
import API from "@/utils/api";
//import { AuthContext } from "@/context/AuthContext";
import { AuthContext } from "@/context/AuthContext";

type Props = { onSuccess?: () => void };

export default function LogoutButton({ onSuccess }: Props) {
  const { setUser, setAccessToken } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      // This will read refresh_token cookie server-side (sent via withCredentials), blacklist it and clear cookie
      await API.post("auth/logout/", {});
    } catch {
      // ignore errors
    } finally {
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem("accessToken");
      onSuccess?.();
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

// context/AuthContext.tsx
/*"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  user: any;
  setUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
      setUser({ name: "User" }); // you can load more user data here if needed
    }
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};*/


// context/AuthContext.tsx
//"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  username: string;
  email?: string;
}

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
  user: null,
  setUser: () => {},
  loading: true, // default loading state
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ new state

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("user");

    if (token) setAccessToken(token);
    if (userData) setUser(JSON.parse(userData));

    setLoading(false); // ✅ mark context as ready
  }, []);

  useEffect(() => {
    if (accessToken) localStorage.setItem("accessToken", accessToken);
    else localStorage.removeItem("accessToken");
  }, [accessToken]);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  if (loading) {
    // ✅ optional: simple loading UI while restoring session
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, user, setUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

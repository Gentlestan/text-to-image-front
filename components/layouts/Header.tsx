// components/Header.tsx
"use client"; // ensures this is a client component

import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const Header: React.FC = () => {
  const router = useRouter();
  const { accessToken, setAccessToken, user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setUser(null);
    router.push("/login");
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          ImageGen
        </Link>

        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/pricing" className="hover:text-gray-400">
            Pricing
          </Link>

          {/* Show Generate only when logged in */}
          {accessToken && (
            <Link href="/generate" className="hover:text-gray-400">
              Generate
            </Link>
          )}

          {accessToken ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="border border-blue-400 px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

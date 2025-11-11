//"use client";  optional but safe if hydration issues occur

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { accessToken, setAccessToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // ✅ Phase 1 — Try restoring token from localStorage
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    if (!accessToken && storedToken) {
      // highlight start
      setAccessToken?.(storedToken); // restore user session
      setLoading(false);
      return;
      // highlight end
    }

    // ✅ Phase 2 — If no token at all, redirect
    if (!accessToken && !storedToken) {
      router.replace("/login");
      return;
    }

    setLoading(false);
  }, [accessToken, router, setAccessToken]);

  // ✅ Phase 3 — Prevent flicker / hydration mismatch
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Checking authentication...
      </div>
    );
  }

  // ✅ Phase 4 — Redirecting or rendering children
  if (!accessToken) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Redirecting to login...
      </div>
    );
  }

  return <>{children}</>;
}

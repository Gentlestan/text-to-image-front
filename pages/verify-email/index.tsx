// pages/verify-email.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//import API from "../utils/api";
import API from "@/utils/api";

export default function VerifyEmailPage() {
  const router = useRouter();
  const { uid, token } = router.query; // ✅ include uid
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (!uid || !token) return; // ✅ check both

    const verifyEmail = async () => {
      try {
        await API.get(`auth/verify-email/?uid=${uid}&token=${token}`);
        setStatus("✅ Email verified successfully! You can now log in.");
        setTimeout(() => router.push("/login"), 3003);
      } catch (err: any) {
        setStatus("❌ Invalid or expired verification link.");
      }
    };

    verifyEmail();
  }, [uid, token]); // ✅ dependency includes uid and token

 return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-gray-100 max-w-md w-full">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Email Verification</h1>
      <p className="text-gray-700 mb-4">{status}</p>
      {status.includes("successfully") && (
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go to Login
        </button>
      )}
    </div>
  </div>
);
}

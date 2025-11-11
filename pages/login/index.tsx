// pages/login/index.tsx
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/generate"); // navigate to generate after login
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden py-20">
      {/* Left side login card */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-blue-100 shadow-2xl rounded-3xl p-8 text-center animate-fade-in">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Sign in to continue creating amazing visuals with ImageGen.
          </p>

          <LoginForm onSuccess={handleSuccess} />

          <p className="mt-4 text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>

          <p className="text-xs text-gray-400 mt-3">
            Secure login powered by modern encryption
          </p>
        </div>
      </div>

      {/* Right side image (visible only on large screens) */}
      <div className="hidden lg:flex flex-1 items-center justify-center h-full">
        <div className="relative w-full h-[600px] max-h-[80vh]">
          <Image
            src="/samples/sample2.png"
            alt="AI generated visual"
            fill
            className="object-cover rounded-r-3xl shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}

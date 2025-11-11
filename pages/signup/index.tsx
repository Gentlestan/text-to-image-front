// pages/signup/index.tsx
import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden py-20">
      {/* Left side image (only visible on large screens) */}
      <div className="hidden lg:flex flex-1 items-center justify-center h-full">
        <div className="relative w-full h-[600px] max-h-[80vh]">
          <Image
            src="/samples/sample4.png"
            alt="AI generated artwork"
            fill
            className="object-cover rounded-l-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Right side signup card */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-blue-100 shadow-2xl rounded-3xl p-8 text-center animate-fade-in">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Join ImageGen and start creating stunning visuals with AI.
          </p>

          <SignupForm onSuccess={() => (window.location.href = "/login")} />

          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

          <p className="text-xs text-gray-400 mt-3">
            Enjoy free access with optional premium features
          </p>
        </div>
      </div>
    </main>
  );
}

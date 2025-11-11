// pages/index.tsx
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, Image as ImageIcon } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600 mb-3" />,
      title: "AI-Powered Creativity",
      desc: "Generate beautiful, high-quality visuals from text prompts in seconds.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600 mb-3" />,
      title: "Fast & Effortless",
      desc: "Built for creators — no design skills or complex tools needed.",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-blue-600 mb-3" />,
      title: "Personal Gallery",
      desc: "Organize, favorite, and re-download your generated masterpieces anytime.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden w-full">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
        <div
          className="absolute inset-0 bg-[url('/samples/ai-abstract-bg.jpg')] bg-cover bg-center opacity-10 blur-sm"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6">
            Turn Words Into Stunning Images ✨
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            ImageGen transforms your imagination into beautiful visuals using
            cutting-edge AI. Type your prompt — we’ll bring it to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Creating Free
            </Link>
            <Link
              href="/login"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Login
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            No credit card required • Free forever plan
          </p>
        </div>

        {/* Example Images */}
        <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto place-items-center animate-fade-in delay-500">
          {["sample1.png", "sample2.png", "sample3.png", "sample4.png"].map(
            (img, i) => (
              <Image
                key={i}
                src={`/samples/${img}`}
                alt={`AI Art ${i + 1}`}
                width={300}
                height={200}
                className="rounded-xl shadow-lg hover:scale-105 transition"
                loading="lazy"
              />
            )
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white w-full text-gray-800">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 text-left">
          {[
            {
              step: "1",
              title: "Type Your Prompt",
              desc: "Describe what you want — as simple or detailed as you like.",
            },
            {
              step: "2",
              title: "AI Creates Instantly",
              desc: "Watch ImageGen bring your idea to life in seconds.",
            },
            {
              step: "3",
              title: "Download & Share",
              desc: "Save, edit, or share your artwork with the world.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 font-bold text-4xl mb-3">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-50 w-full text-gray-800">
        <h2 className="text-3xl font-bold mb-12">Why Choose ImageGen?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

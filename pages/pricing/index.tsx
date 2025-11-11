import React from "react";
import { Clock } from "lucide-react";

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Clock className="w-16 h-16 text-blue-500 mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Pricing Page Coming Soon
      </h1>
      <p className="text-gray-600 text-lg max-w-md text-center mb-6">
        We're working on exciting pricing plans to make AI image generation more accessible.
        Stay tuned for updates!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default PricingPage;

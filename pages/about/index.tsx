import React from "react";


const AboutPage: React.FC = () => {
  return (
      <section className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About This App</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            This AI Image Generator web app allows users to transform creative text prompts into
            stunning AI-generated images. Built with <strong>Next.js</strong>, <strong>TypeScript</strong>,
            and <strong>Tailwind CSS</strong>, it showcases clean UI architecture, reusable components,
            and seamless integration with backend APIs.
          </p>

          <div className="bg-white shadow-md rounded-2xl p-6 text-left mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Core Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🔒 Secure authentication and protected routes for personalized access.</li>
              <li>🧠 AI-powered image generation from user prompts.</li>
              <li>🖼️ Dynamic gallery for viewing, downloading, and managing generated images.</li>
              <li>⚡ Fast, responsive, and mobile-friendly design built with Tailwind CSS.</li>
              <li>🔍 Real-world backend simulation using RESTful API architecture.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-left mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Technology Stack</h2>
            <p className="text-gray-700 leading-relaxed">
              The project demonstrates strong frontend engineering practices using modern tools such as:
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              <li>Next.js 14 for optimized routing and rendering</li>
              <li>TypeScript for type safety and maintainability</li>
              <li>Tailwind CSS for responsive, elegant styling</li>
              <li>Axios (via custom hooks) for API communication</li>
              <li>Context API for managing authentication state</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-10">
            This project reflects my focus on clean UI design, performance optimization,
            and scalable architecture — essential for building modern web applications.
            It’s a blend of creativity, logic, and technical precision aimed at delivering
            exceptional user experiences.
          </p>

          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to App
          </a>
        </div>
      </section>
    
  );
};

export default AboutPage;

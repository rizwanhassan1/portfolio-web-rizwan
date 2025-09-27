import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-8 py-16 bg-pink-100">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Picture */}
          <div className="flex justify-center">
            <img
              src="/new.jpg"
              alt="My Profile"
              className="w-100 h-100 object-cover rounded-full shadow-lg border-4 border-gray-200"
            />
          </div>

          {/* Right - Description */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-indigo-600">Rizwan Hassan</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I’m a passionate <strong>Web Developer</strong> specialized in{" "}
              <span className="text-indigo-600">Next.js, TypeScript, and Tailwind CSS</span>.  
              I build modern, responsive, and scalable web applications with a focus on
              clean design and user experience.
            </p>
            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View My Projects
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
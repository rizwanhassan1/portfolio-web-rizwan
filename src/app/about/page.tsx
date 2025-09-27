import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      
      <main className="p-8 text-center bg-green-100">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          "I'm a web developer with expertise in building modern, scalable, and responsive applications.
          Skilled in Next.js, TypeScript, and Tailwind CSS".
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
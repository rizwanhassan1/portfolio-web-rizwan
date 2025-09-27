"use client";
import React from "react";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Left side - Portfolio Name */}
      <h1 className="text-xl font-bold">Rizwan Hassan</h1>

      {/* Right side - Navbar (imported here) */}
      <Navbar />
    </header>
  );
};

export default Header;
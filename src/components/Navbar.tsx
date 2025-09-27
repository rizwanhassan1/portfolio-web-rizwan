"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-6">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/about" className="hover:text-gray-300">About</Link>
      <Link href="/projects" className="hover:text-gray-300">Projects</Link>
      <Link href="/contact" className="hover:text-gray-300">Contact</Link>
    </nav>
  );
};

export default Navbar;
"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Rizwan Hassan</h2>
          <p className="text-sm text-gray-400">
            Building modern, scalable, and responsive web apps with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p>
            Mobile: <Link href="tel:+923277276019" className="hover:text-white">+92 327 7276019</Link>
          </p>
          <p>
            Email: <Link href="mailto:rizwanhassan335@gmail.com" className="hover:text-white">rizwanhassan335@gmail.com</Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <Link href="https://github.com/rizwanhassan1" target="_blank" className="hover:text-white">
              <FaGithub size={22} />
            </Link>
            <Link href="https://www.facebook.com/share/17GKaaHGD8/" target="_blank" className="hover:text-white">
              <FaFacebook size={22} />
            </Link>
            <Link href="https://www.tiktok.com/@maharrizwanhassan?_t=ZS-9053IbIAsjZ&_r=1" target="_blank" className="hover:text-white">
              <FaTiktok size={22} />
            </Link>
            <Link href=" https://wa.me/923277276019" target="_blank" className="hover:text-white">
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Rizwan Hassan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
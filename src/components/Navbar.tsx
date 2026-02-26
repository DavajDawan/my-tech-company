"use client";

import Link from "next/link";

export default function Navbar({ setLanguage }: { setLanguage: (lang: "en" | "ku") => void }) {
  return (
    <nav className="fixed w-full top-0 left-0 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / namn */}
        <h1 className="text-xl font-bold text-white ">MERNETIC</h1>

        {/* Navigeringslänkar + språk */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#hero" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="#services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="#about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link>

          {/* Språkknappar */}
          <button
            onClick={() => setLanguage("en")}
            className="text-gray-300 hover:text-white font-semibold"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ku")}
            className="text-gray-300 hover:text-white font-semibold"
          >
            KU
          </button>
        </div>
      </div>
    </nav>
  );
}
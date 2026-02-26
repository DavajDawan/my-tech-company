
"use client";

import { useState } from "react";
import { translations } from "@/src/data/translations";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

function getInitialLanguage(): "ku" | "en" {
  if (typeof navigator === "undefined") return "ku";
  const browserLang = navigator.language || navigator.languages?.[0] || "ku";
  return browserLang.startsWith("en") ? "en" : "ku";
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ku">(getInitialLanguage());
  const t = translations[language];

  return (
    
    <main className="bg-black text-white min-h-screen">
      <GoogleTagManager gtmId="G-08RZWTKW75" />
      {/* Navbar med språkväxlare */}
      <Navbar setLanguage={setLanguage} />

      {/* HERO */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-40 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
        <p className="text-gray-400 max-w-2xl mb-8">{t.heroText}</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">{t.heroButton}</button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-12">{t.servicesTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 bg-gray-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t[`service${i}` as keyof typeof t]}</h3>
              <p className="text-gray-400">{t[`service${i}Text` as keyof typeof t]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t.aboutTitle}</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-4">{t.aboutText1}</p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-4">{t.aboutText2}</p>
        <p className="text-gray-400 max-w-3xl mx-auto">{t.aboutText3}</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-8">{t.contactTitle}</h2>
        <p className="text-gray-400 mb-6">{t.contactText}</p>
        <form
          action="https://formspree.io/f/mojnrpol"
  method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
          <textarea name="message" placeholder="Your Message" required rows={5} className="w-full p-3 rounded bg-gray-900 border border-gray-700" />
          <button type="submit" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">{t.contactButton}</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
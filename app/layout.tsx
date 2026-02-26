"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO-komponent med eng/ku (Sorani)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<"en" | "ku">(() => {
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language || "en";
      return browserLang.startsWith("ku") ? "ku" : "en";
    }
    return "en";
  });

  // Titlar, description och keywords
  const titles = {
    
  ku: "مەڕنێتیک پڕۆگرامە وێب و موبایل دروست دەکات بۆ گەشەپێدانی کاروبارەکان.",
    en: "MERNETIC – Web & Mobile Solutions -We build modern web and mobile applications for growing businesses.",
    
  };

  const descriptions = {
    en: "We build modern web and mobile applications for growing businesses. Fullstack apps, APIs, e-commerce solutions.",
    ku: "ئێمە پڕۆگرامە وێب و موبایل دروست دەکەین بۆ گەشەپێدانی کاروبارەکان. پڕۆگرامەکانی Fullstack، API تایبەتی و چارەسەرە e-commerce.",
     images: [
      {
        url: "Backend-1/frontend/my-tech-company/public/OIP (1).webp", // Kurdiska flaggan som preview
        width: 120,
        height: 120,
        alt: "Kurdish Flag",
      },
    ],
  };

  const keywords = {
    en: "Web apps, Mobile apps, Tech solutions, Business growth, Custom APIs, E-commerce platforms, Digital company",
    ku: "پڕۆگرامە وێب, پڕۆگرامە موبایل, چارەسەرە تەکنەلۆژیا, گەشەپێدانی کاروبار, API تایبەتی, پلەی کڕین و فرۆشتن, کۆمپانیای دیجیتاڵ",
  };

  return (
    <html lang={language}>
      <head>
        <title>{titles[language]}</title>
        <meta name="description" content={descriptions[language]} />
        <meta name="keywords" content={keywords[language]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={language === "en" ? "https://yourdomain.com/en" : "https://yourdomain.com/ku"}
        />

        {/* Hreflang för flerspråkiga versioner */}
        <link rel="alternate" href="https://yourdomain.com/en" hrefLang="en" />
        <link rel="alternate" href="https://yourdomain.com/ku" hrefLang="ku" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
          <button onClick={() => setLanguage(language === "en" ? "ku" : "en")} style={{ padding: "8px 16px", cursor: "pointer" }}>
            {language === "en" ? "کوردی" : "English"}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
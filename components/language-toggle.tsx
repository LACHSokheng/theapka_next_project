"use client";

import Image from "next/image";
import type { Language } from "@/lib/translations";

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({
  currentLanguage,
  onLanguageChange,
}: LanguageToggleProps) {
  const languages: { code: Language; label: string; img: string }[] = [
    { code: "en", label: "EN", img: "/en.png" },
    { code: "km", label: "ខ្មែរ", img: "/kh.png" },
  ];
  const isKhmer = currentLanguage === "km";

  return (
    <div
      className="fixed top-4 left-4 z-50 bg-white rounded-full shadow-md flex items-center p-1"
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 
            ${
              currentLanguage === lang.code
                ? "bg-gray-100 shadow"
                : "bg-transparent"
            }`}
        >
          <Image src={lang.img} alt={lang.label} width={20} height={20} />
          <span
            className={`text-sm font-medium ${
              currentLanguage === lang.code ? "text-gray-900" : "text-gray-500"
            }`}
          >
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );
}

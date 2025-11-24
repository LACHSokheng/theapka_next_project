"use client";

import Image from "next/image";
import type { Language } from "@/lib/translations";

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: () => void;
}

export default function LanguageToggle({
  currentLanguage,
  onLanguageChange,
}: LanguageToggleProps) {
  const enImg = "/en.png";
  const khImg = "/kh.png";

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onLanguageChange}
        className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
          currentLanguage === "en" ? "shadow-lg scale-105" : "shadow-md"
        }`}
        title={`Switch to ${currentLanguage === "en" ? "Khmer" : "English"}`}
        aria-label={`Current language: ${
          currentLanguage === "en" ? "English" : "Khmer"
        }`}
      >
        <Image
          src={currentLanguage === "en" ? enImg : khImg}
          alt={currentLanguage === "en" ? "English" : "Khmer"}
          fill
          className="object-cover"
          priority
        />
      </button>
    </div>
  );
}

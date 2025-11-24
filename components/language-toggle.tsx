"use client"

import type { Language } from "@/lib/translations"

interface LanguageToggleProps {
  currentLanguage: Language
  onLanguageChange: () => void
}

export default function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={onLanguageChange}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          currentLanguage === "en" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
        }`}
      >
        {currentLanguage === "en" ? "EN" : "KH"}
      </button>
    </div>
  )
}

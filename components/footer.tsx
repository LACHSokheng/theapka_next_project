import { translations } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-khmer text-xl font-bold mb-2">{t.coupleNames}</h3>
        <p className="font-khmer text-sm mb-4">{t.footer}</p>
        <p className="text-xs opacity-75">
          © 2025 {t.coupleNames}. {t.allRights}
        </p>
      </div>
    </footer>
  )
}

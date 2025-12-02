import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];
  const isKhmer = language === "km";

  return (
    <footer
      className="bg-primary text-primary-foreground py-8 px-4"
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className=" text-xl font-bold mb-2">{t.coupleNames}</h3>
        <p className=" text-sm mb-4">{t.footer}</p>
        <p className="text-xs opacity-75">
          © 2025 {t.coupleNames}. {t.allRights}
        </p>
      </div>
    </footer>
  );
}

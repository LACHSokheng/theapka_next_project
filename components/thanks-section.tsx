import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface ThankYouProps {
  language: Language;
}

export default function ThanksSection({ language }: ThankYouProps) {
  const text = translations[language].thanksMessage;
  const isKhmer = language === "km";

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/decoration/bg7.jpg')",
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-oswald), sans-serif",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      <div className="relative max-w-3xl text-center text-white bg-black/40 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {language === "en" ? "Thank You" : "សូមអរគុណ"}
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line">{text}</p>
      </div>
    </section>
  );
}

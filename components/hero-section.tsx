import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const bgImageUrl = "/wedding-couple-in-cambodian-temple.jpg";

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-red-700 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="font-khmer text-5xl md:text-6xl font-bold mb-4">
          {t.coupleNames}
        </h1>

        <div className="flex justify-center gap-4 my-8">
          <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <span className="text-4xl">💍</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-light mb-6">
          {t.heroSubtitle}
        </h2>

        <p className="font-khmer text-lg md:text-xl mb-4 leading-relaxed">
          {t.heroBigText}
        </p>

        <p className="font-khmer text-base md:text-lg mb-8 leading-relaxed opacity-90">
          {t.heroSmallText}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-khmer font-bold hover:opacity-90 transition-opacity">
            {t.rsvpLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

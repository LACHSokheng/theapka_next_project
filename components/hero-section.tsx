import Image from "next/image";
import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const bgImageUrl = "/decoration/bg2.jpg";
  const vectorImg = "/heros/vector-frame.png";
  const frameImg = "/heros/gold-frame.png";
  const isKhmer = language === "km";

  return (
    <section
      className="
        relative w-full min-h-screen
        bg-center bg-cover
        flex items-center justify-center
        px-4 sm:px-6 lg:px-16
      "
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-imperialScript), var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Corner decorations */}
      <Image
        src="/heros/corner-gold.png"
        alt="Top right decoration"
        width={300}
        height={300}
        className="
          absolute top-2 right-2 
          w-20 sm:w-32 md:w-40 lg:w-60
          h-auto z-10 pointer-events-none
        "
      />
      <Image
        src="/heros/corner-gold.png"
        alt="Bottom left decoration"
        width={300}
        height={300}
        className="
          absolute bottom-2 left-2 rotate-180
          w-20 sm:w-32 md:w-40 lg:w-60
          h-auto z-10 pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-2xl">
        <h1 className=" text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
          {t.title}
        </h1>

        {/* Vector image with couple names */}
        <div className="relative flex justify-center items-center my-4 sm:my-8">
          <Image
            src={vectorImg}
            alt="Couple names decoration"
            width={400}
            height={200}
            className="w-56 sm:w-72 md:w-96 h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-bokor text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              {t.coupleNames}
            </p>
          </div>
        </div>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6">
          {t.heroSubtitle}
        </h2>

        {/* Decorative frame */}
        <div className="flex justify-center my-4 sm:my-8">
          <Image
            src={frameImg}
            alt="Decorative frame"
            width={800}
            height={100}
            className="w-56 sm:w-72 md:w-96 lg:w-full max-w-2xl h-auto"
          />
        </div>

        <p className="font-bokor text-base sm:text-lg md:text-xl leading-relaxed mb-4">
          {t.heroBigText}
        </p>

        <p className=" text-sm sm:text-base md:text-lg leading-relaxed opacity-90 mb-6 sm:mb-8">
          {t.heroSmallText}
        </p>
      </div>
    </section>
  );
}

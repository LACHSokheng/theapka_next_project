"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface CountdownSectionProps {
  language: Language;
}

export default function CountdownSection({ language }: CountdownSectionProps) {
  const t = translations[language];
  const weddingDate = new Date("2026-02-27T07:00:00"); // 27 Feb 2026 7AM
  const decoraImg = "/decorative.png";
  const isKhmer = language === "km";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center text-center py-16 px-6 text-white bg-[#790203] backdrop-blur-sm overflow-hidden"
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-imperialScript), var(--font-imperialScript), sans-serif",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/decoration/bg1.png"
          alt="Decorative background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          // Slightly reduce the image opacity so the content sits more prominently
          className="object-cover object-center sm:object-top opacity-70"
        />
        {/* subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/40" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
        {t.countdownSaveDate}
      </h2>

      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-primary/30"></div>
        {/* use the decorative image in the center */}
        <div className="flex items-center justify-center">
          <Image
            src={decoraImg}
            alt={t.timelineTitle || "decorative accent"}
            width={200}
            height={66}
            className="object-contain w-20 md:w-28 lg:w-36 h-auto"
            priority={false}
          />
        </div>
        <div className="h-px w-8 bg-primary/30"></div>
      </div>

      <p className="text-lg md:text-xl">{t.countdownTitle}</p>

      {/* Countdown Box */}
      <div className="mt-6 bg-pink-190 border border-pink-300 rounded-2xl px-6 py-4 md:px-10 md:py-6 flex gap-4 md:gap-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-pink-400">{timeLeft.days}</p>
          <p className="text-sm">{t.countdownDays}</p>
        </div>
        <span className="text-3xl font-bold text-pink-300">:</span>
        <div className="text-center">
          <p className="text-3xl font-bold text-pink-400">{timeLeft.hours}</p>
          <p className="text-sm">{t.countdownHours}</p>
        </div>
        <span className="text-3xl font-bold text-pink-300">:</span>
        <div className="text-center">
          <p className="text-3xl font-bold text-pink-400">{timeLeft.minutes}</p>
          <p className="text-sm">{t.countdownMinutes}</p>
        </div>
        <span className="text-3xl font-bold text-pink-300">:</span>
        <div className="text-center">
          <p className="text-3xl font-bold text-pink-400">{timeLeft.seconds}</p>
          <p className="text-sm">{t.countdownSeconds}</p>
        </div>
      </div>

      {/* Calendar Image */}
      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-base opacity-80 mb-2">{t.calendarTitle}</h3>
        <Image
          src="/calendar.jpg"
          alt="Calendar"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

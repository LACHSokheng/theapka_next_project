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
    <section className="relative flex flex-col items-center text-center py-16 px-6 text-white bg-black/60 backdrop-blur-sm">
      <h2 className="text-xl md:text-2xl font-semibold tracking-wide mb-2">
        {t.countdownSaveDate}
      </h2>
      <p className="text-lg md:text-xl">{t.countdownTitle}</p>

      {/* Countdown Box */}
      <div className="mt-6 bg-white/10 border border-pink-300 rounded-2xl px-6 py-4 md:px-10 md:py-6 flex gap-4 md:gap-8">
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

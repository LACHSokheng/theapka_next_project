"use client";

import { useState, useEffect } from "react";
import LanguageToggle from "@/components/language-toggle";
import HeroSection from "@/components/hero-section";
import StorySection from "@/components/story-section";
import EventSection from "@/components/event-section";
import QRCodeSection from "@/components/qr-code-section";
import RSVPButton from "@/components/rsvp-button";
import Footer from "@/components/footer";
import type { Language } from "@/lib/translations";
import QRPaySection from "@/components/qr-pay-section";
import WeddingSection from "@/components/wedding-section";
import CountdownSection from "@/components/countdown-section";
import { TimelineSection } from "@/components/wedding-timeline";
import ThanksSection from "@/components/thanks-section";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  const handleLanguageChange = () => {
    const newLanguage: Language = language === "en" ? "km" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (!mounted) return null;

  return (
    <main className="w-full">
      <LanguageToggle
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      <HeroSection language={language} />
      <WeddingSection language={language} />
      <CountdownSection language={language} />
      <TimelineSection language={language} />
      <CountdownSection language={language} />
      <QRCodeSection language={language} />
      <QRPaySection language={language} />
      <ThanksSection language={language} />
      <RSVPButton language={language} />
      <Footer language={language} />
    </main>
  );
}

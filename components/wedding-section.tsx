import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface WeddingSectionProps {
  language: Language;
}

export default function WeddingSection({ language }: WeddingSectionProps) {
  const t = translations[language];
  const isKhmer = language === "km";
  const groomIc = "/icons/groom_ic.svg";
  const brideIc = "/icons/bride_ic.svg";
  const decoraImg = "/decorative.png";
  const bg = "/decoration/bg4.jpg";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        w-full min-h-screen px-4 py-10 flex flex-col items-center relative 
        bg-cover bg-center bg-no-repeat wedding-bg 
      "
      style={{
        backgroundImage: "url('/decoration/bg11.jpg')",
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Floating Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-rose-100 opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <h1 className=" text-3xl sm:text-4xl md:text-6xl sm:mb-8 font-semibold text-white font-eng mb-6 z-10">
        {t.title}
      </h1>

      {/* Decorative Line */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-primary/30"></div>

        <Image
          src={decoraImg}
          alt={t.timelineTitle || "decorative accent"}
          width={200}
          height={66}
          className="object-contain w-20 md:w-28 lg:w-36 h-auto"
        />

        <div className="h-px w-8 bg-primary/30"></div>
      </div>

      {/* Photos Wrapper */}
      <div className="relative w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-y-8 sm:gap-x-10 px-3 z-10">
        {/* Groom */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-[230px] flex flex-col items-center text-center"
        >
          <div className="relative w-full h-60 md:h-72 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/groom.jpg"
              alt="Groom"
              width={360}
              height={432}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 z-20">
              <Image
                src={groomIc}
                alt="Groom icon"
                width={44}
                height={44}
                className="rounded-full shadow-md"
              />
            </div>
          </div>

          <div className="mt-3">
            <p className="text-[#E8BC7A] text-sm">{t.groomLabel}</p>
            <p className="font-bold text-[#F5C16C] font-eng text-lg">
              {t.groomName}
            </p>
            <p className="text-xs text-white">{t.groomParents}</p>
          </div>
        </motion.div>

        {/* Heart Icon */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="z-30"
        >
          <Image
            src="/heart.png"
            alt="Heart icon"
            width={90}
            height={90}
            className="drop-shadow-md"
          />
        </motion.div>

        {/* Bride */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-[230px] flex flex-col items-center text-center"
        >
          <div className="relative w-full h-60 md:h-72 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/bride.jpg"
              alt="Bride"
              width={360}
              height={432}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 z-20">
              <Image
                src={brideIc}
                alt="Bride icon"
                width={44}
                height={44}
                className="rounded-full shadow-md"
              />
            </div>
          </div>

          <div className="mt-3">
            <p className="text-[#E8BC7A] text-sm">{t.brideLabel}</p>
            <p className="font-bold text-[#F5C16C] font-eng text-lg">
              {t.brideName}
            </p>
            <p className="text-xs text-white">{t.brideParents}</p>
          </div>
        </motion.div>
      </div>

      {/* Invitation Message */}
      <p className="mt-8 text-center text-white text-sm md:text-base leading-7 max-w-xl font-kh z-10">
        {t.invitationMessage}
      </p>

      {/* Divider */}
      <div className="w-24 h-0.5 bg-[#F5C16C] my-5 opacity-70"></div>

      {/* Date Section */}
      <div className="text-center z-10">
        <p className="text-[#E8BC7A] font-semibold">{t.weddingDateTitle}</p>

        <div className="my-2">
          <p className="text-4xl md:text-5xl font-bold text-[#F5C16C] font-eng">
            {t.weddingDay}
          </p>
          <p className="text-white">{t.weddingMonth}</p>
          <p className="text-white">{t.weddingYear}</p>
        </div>

        <p className="text-[#E8BC7A] font-semibold mt-3">
          {t.weddingTimeTitle}
        </p>
        <p className="text-white">{t.weddingTime}</p>

        <p className="mt-3 text-white text-sm md:text-base max-w-lg px-3 font-kh">
          {t.weddingLocation}
        </p>
      </div>
    </motion.div>
  );
}

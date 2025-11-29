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

  return (
    <div className="w-full min-h-screen bg-[#f7f4ef] p-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-xl font-semibold text-orange-800 mb-4">
        {t.title}
      </h1>

      {/* Photos Wrapper */}
      {/* Photos area: constrained width so layout centered on page */}
      <div className="relative w-full max-w-3xl flex items-center justify-between gap-x-6 px-4">
        {/* Groom column */}
        <div className="w-44 sm:w-48 md:w-56 flex flex-col items-center text-center">
          <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-60 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/groom.jpg"
              alt="groom"
              width={360}
              height={432}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-3">
            <p className="text-orange-800 text-sm">{t.groomLabel}</p>
            <p className="font-bold text-orange-900">{t.groomName}</p>
            <p className="text-xs text-gray-700">{t.groomParents}</p>
          </div>
        </div>

        {/* Bird icon centered between the two person columns.
            We use absolute + left-1/2 -translate-x-1/2 so it stays exactly centered.
            -translate-y-10% pulls it slightly up so it sits between images (not covering text). */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <Image
            src="/heart.png"
            alt="heart icon"
            width={80}
            height={80}
            className="drop-shadow-md w-16 md:w-20 h-16 md:h-20"
          />
        </motion.div>

        {/* Bride column */}
        <div className="w-44 sm:w-48 md:w-56 flex flex-col items-center text-center">
          <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-60 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/bride.jpg"
              alt="bride"
              width={360}
              height={432}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-3">
            <p className="text-orange-800 text-sm">{t.brideLabel}</p>
            <p className="font-bold text-orange-900">{t.brideName}</p>
            <p className="text-xs text-gray-700">{t.brideParents}</p>
          </div>
        </div>
      </div>

      {/* Invitation Message */}
      <p className="mt-6 text-center text-gray-800 leading-7 text-sm px-3">
        {t.invitationMessage}
      </p>

      {/* Divider */}
      <div className="w-24 h-0.5 bg-orange-800 my-4"></div>

      {/* Date Section */}
      <div className="text-center mt-4">
        <p className="text-orange-700 font-semibold">{t.weddingDateTitle}</p>

        <div className="flex justify-center gap-4 my-1">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-900">{t.weddingDay}</p>
            <p className="text-sm text-gray-800">{t.weddingMonth}</p>
            <p className="text-sm text-gray-800">{t.weddingYear}</p>
          </div>
        </div>

        <p className="text-orange-700 font-semibold mt-3">
          {t.weddingTimeTitle}
        </p>
        <p className="text-gray-800">{t.weddingTime}</p>

        {/* Location */}
        <p className="mt-3 text-gray-800 text-sm px-5">{t.weddingLocation}</p>
      </div>
    </div>
  );
}

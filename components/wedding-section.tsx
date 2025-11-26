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
  const groomImg = "/groom.jpg";
  const birdIcon = "/icons/bird-icon.png";

  return (
    <div className="w-full min-h-screen bg-[#f7f4ef] p-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-xl font-semibold text-orange-800 mb-4">
        {t.title}
      </h1>

      {/* Photos */}
      <div className="flex justify-between w-full px-4 gap-3">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-40 rounded-2xl overflow-hidden shadow">
            <Image
              src="/groom.jpg"
              alt="groom"
              width={200}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-2 text-orange-800 text-sm">{t.groomLabel}</p>
          <p className="font-bold text-orange-900">{t.groomName}</p>
          <p className="text-xs text-gray-700">{t.groomParents}</p>
        </div>

        {/* <Image src="/bird-icon.png" alt="bird icon" /> */}

        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-40 rounded-2xl overflow-hidden shadow">
            <Image
              src="/bride.jpg"
              alt="bride"
              width={200}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-2 text-orange-800 text-sm">{t.brideLabel}</p>
          <p className="font-bold text-orange-900">{t.brideName}</p>
          <p className="text-xs text-gray-700">{t.brideParents}</p>
        </div>
      </div>

      {/* Invitation Message */}
      <p className="mt-6 text-center text-gray-800 leading-7 text-sm px-3">
        {t.invitationMessage}
      </p>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-orange-800 my-4"></div>

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

/*
QRCodeSection.tsx
Next.js + TypeScript React component (Tailwind CSS + Framer Motion)

Instructions:
- Place two QR images in your public folder, e.g.: /public/qrs/qr-kh.png and /public/qrs/qr-usd.png
- This component imports your existing translations from '@/lib/translations'.
- To use Framer Motion animations, install: `npm install framer-motion` or `yarn add framer-motion`.
- Import and use in any Next.js page: `import QRCodeSection from '@/components/QRCodeSection';` then
  `<QRCodeSection language={language} />`

Notes:
- The layout is mobile-first, responsive, and includes subtle entrance and hover animations.
- The design tries to fit a wedding/celebration theme: rounded cards, soft shadow, and a small heart accent.
*/

import Image from "next/image";
import { motion } from "framer-motion";
import { translations, type Language } from "@/lib/translations";

interface QRCodeSectionProps {
  language: Language;
  // optional: override image URLs
  qrKhUrl?: string;
  qrUsdUrl?: string;
}

export default function QRPaySection({
  language,
  qrKhUrl = "/money/kh-qr.jpg",
  qrUsdUrl = "/money/us-qr.jpg",
}: QRCodeSectionProps) {
  const t = translations[language];
  const isKhmer = language === "km";
  const decoraImg = "/decorative.png";

  return (
    <section
      aria-labelledby="qr-section-title"
      className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-12 bg-linear-to-b from-white via-rose-50 to-white"
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      {/* Decorative heart accent */}
      <div className="pointer-events-none absolute -top-6 -right-6 opacity-10 transform rotate-12">
        <svg
          width="260"
          height="260"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21s-7-4.35-9-7.5C-0.5 8.5 5 3 9 6c2 1.7 3 3.8 3 3.8S14 7.7 16 6c4-3 9.5 2.5 6 7.5C19 16.7 12 21 12 21z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="qr-section-title"
            className=" text-2xl sm:text-3xl font-bold text-gray-900"
          >
            {t.paymentTitle}
          </h2>

          {/* Decoration */}
          <div className="flex items-center justify-center gap-4 ">
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
          <p className="font-bokor mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {t.paymentSub}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 items-start"
        >
          {/* Card - Khmer QR */}
          <motion.article
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="QR Khmer card"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.coupleNames}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t.paymentTitle} · KHR
                </p>
              </div>

              <div className="shrink-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative rounded-lg overflow-hidden bg-gray-50 p-1">
                  <Image
                    src={qrKhUrl}
                    alt="QR code for Khmer currency and wedding details"
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-sm text-gray-600">{t.rsvpLabel}</p>
              <div className="flex gap-2">
                <a
                  href={qrKhUrl}
                  download
                  className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                >
                  Download
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // small helper to open image in new tab
                    window.open(qrKhUrl, "_blank");
                  }}
                  className="inline-flex items-center rounded-md bg-rose-600 text-white px-3 py-1 text-sm font-medium hover:opacity-95"
                >
                  View
                </a>
              </div>
            </div>
          </motion.article>

          {/* Card - Dollar QR */}
          <motion.article
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="QR Dollar card"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.coupleNames}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t.paymentTitle} · USD
                </p>
              </div>

              <div className="shrink-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative rounded-lg overflow-hidden bg-gray-50 p-1">
                  <Image
                    src={qrUsdUrl}
                    alt="QR code for Dollar currency and wedding details"
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-sm text-gray-600">
                {t.qrDescription.split(".")[0] ?? t.qrDescription}
              </p>
              <div className="flex gap-2">
                <a
                  href={qrUsdUrl}
                  download
                  className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                >
                  Download
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(qrUsdUrl, "_blank");
                  }}
                  className="inline-flex items-center rounded-md bg-rose-600 text-white px-3 py-1 text-sm font-medium hover:opacity-95"
                >
                  View
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Small accessibility note for screen readers on mobile */}
        <p className="sr-only">{t.qrDescription}</p>
      </div>
    </section>
  );
}

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

// Updated QRPaySection with modal view, clean UI, fully responsive, interactive
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { translations, type Language } from "@/lib/translations";

interface QRCodeSectionProps {
  language: Language;
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

  // Modal state
  const [selectedQR, setSelectedQR] = useState<string | null>(null);

  const openModal = (img: string) => setSelectedQR(img);
  const closeModal = () => setSelectedQR(null);

  return (
    <section
      className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white via-rose-50/40 to-white"
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-oswald), var(--font-imperialScript), sans-serif",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-700 drop-shadow-sm">
            {t.paymentTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            {t.paymentSub}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* QR Card Component */}
          {[
            { img: qrKhUrl, label: "KHR" },
            { img: qrUsdUrl, label: "USD" },
          ].map(({ img, label }, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t.coupleNames}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t.paymentTitle} · {label}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative rounded-lg overflow-hidden bg-gray-50 p-1">
                    <Image
                      src={img}
                      alt={`QR for ${label}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={img}
                  download
                  className="inline-flex items-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-gray-50"
                >
                  Download
                </a>
                <button
                  onClick={() => openModal(img)}
                  className="inline-flex items-center rounded-md bg-rose-600 text-white px-3 py-1 text-sm font-medium hover:opacity-95"
                >
                  View
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedQR && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-sm w-full bg-white rounded-2xl p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedQR}
                alt="QR Preview"
                width={600}
                height={600}
                className="w-full h-auto object-contain rounded-md"
              />

              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-2 py-1 text-sm hover:bg-black"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

interface QRCodeSectionProps {
  language: Language;
}

export default function QRCodeSection({ language }: QRCodeSectionProps) {
  const t = translations[language];
  const qr_map_img = "/qr_map.jpg";

  return (
    <section className="py-20 px-4 bg-background">
      {/* Decorative divider */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <div className="w-8 h-8">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-accent"
          >
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h2 className="font-khmer text-2xl md:text-3xl font-bold text-center">
          {t.moreInfo}
        </h2>
        <div className="w-8 h-8">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-accent"
          >
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* QR Code and description */}
      <div className="max-w-md mx-auto text-center">
        <p className="font-khmer text-base mb-8 leading-relaxed">
          {t.qrDescription}
        </p>

        {/* QR Code Image */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-8 bg-white p-4 rounded-lg flex items-center justify-center border-2 border-accent">
          <img
            src={qr_map_img}
            alt="QR Code Map"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="font-khmer text-sm text-muted-foreground">{t.qrLabel}</p>
      </div>
    </section>
  );
}

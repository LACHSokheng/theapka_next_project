import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

interface QRCodeSectionProps {
  language: Language;
  mapQuery?: string;
}

export default function QRCodeSection({
  language,
  mapQuery,
}: QRCodeSectionProps) {
  const t = translations[language];
  const qr_map_img = "/qr_map.jpg";
  const mapQueryStr = mapQuery ?? "ហយ ធីម៉ាសុីនច្រូត";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQueryStr
  )}&output=embed`;

  const isKhmer = language === "km";

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-background "
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-imperialScript), var(--font-oswald), sans-serif",
      }}
    >
      {/* Decorative Title */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="w-6 h-6 md:w-8 md:h-8 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>

        <h2 className=" text-3xl md:text-4xl lg:text-5xl sm:text-2xl font-bold text-center">
          {t.moreInfo}
        </h2>

        <div className="w-6 h-6 md:w-8 md:h-8 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className=" text-sm sm:text-base leading-relaxed">
          {t.qrDescription}
        </p>
      </div>

      {/* QR + Map */}
      <div
        className="
          max-w-5xl mx-auto 
          grid gap-8 
          grid-cols-1 sm:grid-cols-2 
          items-start
        "
      >
        {/* QR Code */}
        <div className="text-center">
          <div
            className="
              w-40 h-40 
              sm:w-48 sm:h-48 
              md:w-56 md:h-56 
              lg:w-64 lg:h-64 
              max-w-full mx-auto 
              bg-white p-4 
              rounded-xl 
              flex items-center 
              justify-center 
              border border-accent
              shadow-sm
            "
          >
            <img
              src={qr_map_img}
              alt="QR Code Map"
              className="w-full h-full object-contain"
            />
          </div>
          <p className=" text-xs sm:text-sm mt-2 text-muted-foreground">
            {t.qrLabel}
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full overflow-hidden rounded-xl border border-accent shadow-sm">
          <iframe
            src={mapSrc}
            title="Google Map"
            className="w-full aspect-square sm:aspect-4/3 md:aspect-video"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

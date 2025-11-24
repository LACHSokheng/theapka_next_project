import { translations } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface EventSectionProps {
  language: Language
}

export default function EventSection({ language }: EventSectionProps) {
  const t = translations[language]
  const bgImageUrl = "/wooden-bridge-over-water-khmer-style.jpg"

  return (
    <section className="py-20 px-4 bg-muted">
      {/* Decorative divider */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-accent">
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="6" r="1" fill="currentColor" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
          </svg>
        </div>
        <h2 className="font-khmer text-2xl md:text-3xl font-bold text-center">{t.eventDetails}</h2>
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-accent">
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="6" r="1" fill="currentColor" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Event image */}
      <div className="relative w-full max-w-4xl mx-auto mb-12 overflow-hidden rounded-lg">
        <img src={bgImageUrl || "/placeholder.svg"} alt="Event location" className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="font-khmer text-2xl md:text-3xl font-bold">{t.eventTitle}</h3>
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="font-khmer text-xl font-bold mb-4">{t.dateLabel}</h3>
          <p className="font-khmer text-lg">{t.eventDate}</p>
        </div>
        <div className="text-center">
          <h3 className="font-khmer text-xl font-bold mb-4">{t.locationLabel}</h3>
          <p className="font-khmer text-lg">{t.eventLocation}</p>
        </div>
      </div>
    </section>
  )
}

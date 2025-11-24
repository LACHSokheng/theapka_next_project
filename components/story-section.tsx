import { translations } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface StorySectionProps {
  language: Language
}

export default function StorySection({ language }: StorySectionProps) {
  const t = translations[language]
  const bgImageUrl = "/cambodian-nature-landscape-flowers.jpg"

  return (
    <section className="py-20 px-4 bg-background">
      {/* Decorative divider */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-accent">
            <path d="M12 5v14M5 12h14" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="font-khmer text-2xl md:text-3xl font-bold text-center">{t.ourStory}</h2>
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-accent">
            <path d="M12 5v14M5 12h14" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Story text */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="font-khmer text-lg leading-relaxed text-foreground">{t.storyText}</p>
      </div>

      {/* Story image */}
      <div className="relative w-full max-w-4xl mx-auto mb-12 overflow-hidden rounded-lg">
        <img src={bgImageUrl || "/placeholder.svg"} alt="Our story" className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="font-khmer text-2xl md:text-3xl font-bold mb-2">{t.storyTitle}</h3>
            <p className="font-khmer text-base">{t.storyDate}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

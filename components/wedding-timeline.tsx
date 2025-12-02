"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Language } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { timelineIcons } from "@/lib/data/timelineIcons";

interface TimelineEvent {
  id: number;
  icon: keyof typeof timelineIcons;
  titleKey: string;
  timeKey: string;
}

export function TimelineSection({ language }: { language: Language }) {
  const t = translations[language];
  const isKhmer = language === "km";

  const events: TimelineEvent[] = [
    { id: 1, icon: "paly", titleKey: "timeline1", timeKey: "timeline1Time" },
    { id: 2, icon: "worship", titleKey: "timeline2", timeKey: "timeline2Time" },
    { id: 3, icon: "guest", titleKey: "timeline3", timeKey: "timeline3Time" },
    {
      id: 4,
      icon: "fruits",
      titleKey: "timeline4",
      timeKey: "timeline4Time",
    },
    { id: 5, icon: "rings", titleKey: "timeline5", timeKey: "timeline5Time" },
    { id: 6, icon: "monk", titleKey: "timeline6", timeKey: "timeline6Time" },
    { id: 7, icon: "tools", titleKey: "timeline7", timeKey: "timeline7Time" },
    {
      id: 8,
      icon: "slaflower",
      titleKey: "timeline8",
      timeKey: "timeline8Time",
    },
    { id: 9, icon: "couple", titleKey: "timeline9", timeKey: "timeline9Time" },
    {
      id: 10,
      icon: "cheers",
      titleKey: "timeline10",
      timeKey: "timeline10Time",
    },
    { id: 9, icon: "dance", titleKey: "timeline11", timeKey: "timeline11Time" },
  ];

  const decoraImg = "/decorative.png";

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      // apply language-specific font using CSS variable loaded in layout
      style={{
        fontFamily: isKhmer
          ? "var(--font-bokor), var(--font-moul), sans-serif"
          : "var(--font-imperialScript), var(--font-imperialScript), sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">
            {t.timelineTitle}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
            {t.timelineDate}
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
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
        </div>

        {/* Timeline Events */}
        <div className="relative ">
          {/* Vertical line - responsive */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-primary/50 to-primary/20 md:transform md:-translate-x-1/2" />

          {/* Events Container */}
          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-start gap-4 md:items-center md:gap-8 pl-14 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2 flex items-start md:items-center">
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <time className="text-sm font-semibold text-primary/80">
                      {t[event.timeKey as keyof typeof t] || ""}
                    </time>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mt-1 md:mt-2">
                      {t[event.titleKey as keyof typeof t] || ""}
                    </h3>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-6 md:left-1/2 top-2 md:top-3 z-10 transform md:-translate-x-1/2 -translate-x-6 shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-card border-2 border-primary shadow-md">
                    <Image
                      src={timelineIcons[event.icon] || "/placeholder.svg"}
                      alt={t[event.titleKey as keyof typeof t] || ""}
                      width={28}
                      height={28}
                      className="md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

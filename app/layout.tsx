import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Battambang } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import {
  bokor,
  moul,
  moulpali,
  suwannaphum,
  playfairDisplay,
  oswald,
  missFajardose,
  imperialScript,
} from "@/lib/fonts";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _battambang = Battambang({ weight: ["400", "700"], subsets: ["khmer"] });

export const metadata: Metadata = {
  title: "VORDIN & SOKHENG's Wedding",
  description:
    "ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និង ប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ប្រសិទ្ធិពរជ័យសិរីសួស្តី ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ",
  // generator: "v0.app",
  icons: {
    icon: [
      // Primary favicon (SVG) — replace `favicon.svg` in `/public/` with your own icon if needed
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
      // Standard PNG/legacy icons
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      // Fallback ICO (optional)
      {
        url: "/favicon.ico",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sophea & Sokha's Wedding",
    description:
      "You're invited to Sophea & Sokha's wedding — details, RSVP and bilingual support in Khmer & English.",
    url: "https://theapka.example/",
    siteName: "Sophea & Sokha's Wedding",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophea & Sokha's Wedding",
    description:
      "You're invited to Sophea & Sokha's wedding — details, RSVP and bilingual support in Khmer & English.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${bokor.variable}
          ${moul.variable}
          ${moulpali.variable}
          ${suwannaphum.variable}
          ${missFajardose.variable}
          ${imperialScript.variable}
          ${oswald.variable}
          ${playfairDisplay.variable}
          ${_geist.className}
          ${_geistMono.className}
          ${_battambang.className}
          font-sans antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

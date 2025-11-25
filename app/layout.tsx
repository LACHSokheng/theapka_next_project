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
  title: "Sophea & Sokha's Wedding",
  description:
    "Join us in celebrating our wedding with bilingual Khmer and English support",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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

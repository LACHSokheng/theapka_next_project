// app/lib/fonts.ts
import localFont from "next/font/local";

// Khmer Fonts
export const bokor = localFont({
  src: "../public/fonts/khmer/Bokor-Regular.ttf",
  variable: "--font-bokor",
});
export const moul = localFont({
  src: "../public/fonts/khmer/Moul-Regular.ttf",
  variable: "--font-moul",
});
export const moulpali = localFont({
  src: "../public/fonts/khmer/Moulpali-Regular.ttf",
  variable: "--font-moulpali",
});
export const suwannaphum = localFont({
  src: "../public/fonts/khmer/Suwannaphum-Regular.ttf",
  variable: "--font-suwannaphum",
});

// English fonts
export const imperialScript = localFont({
  src: "../public/fonts/english/ImperialScript-Regular.ttf",
  variable: "--font-ImperialScript",
});
export const missFajardose = localFont({
  src: "../public/fonts/english/MissFajardose-Regular.ttf",
  variable: "--font-MissFajardose",
});

export const oswald = localFont({
  src: "../public/fonts/english/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
});
export const playfairDisplay = localFont({
  src: "../public/fonts/english/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
});

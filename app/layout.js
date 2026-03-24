import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/theme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata = {
  title: "Sudip Paul | Structural Engineering Portfolio",
  description:
    "Executive portfolio of Sudip Paul, General Manager - Structural Engineering at Engineers India Limited.",
  keywords: [
    "Sudip Paul",
    "Structural Engineering",
    "Civil Engineering",
    "Engineers India Limited",
    "Portfolio"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${manrope.variable} bg-espresso font-body text-parchment antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

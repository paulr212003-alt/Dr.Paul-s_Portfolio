import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  DEFAULT_THEME,
  THEME_IDS,
  THEME_STORAGE_KEY
} from "@/lib/themes";
import "./globals.css";
import "@/styles/theme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const themeInitScript = `
  (function () {
    var storageKey = "${THEME_STORAGE_KEY}";
    var fallbackTheme = "${DEFAULT_THEME}";
    var validThemes = ${JSON.stringify(THEME_IDS)};

    try {
      var storedTheme = window.localStorage.getItem(storageKey);
      var theme = validThemes.indexOf(storedTheme) >= 0 ? storedTheme : fallbackTheme;
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.style.colorScheme = "light";
    } catch (error) {
      document.documentElement.setAttribute("data-theme", fallbackTheme);
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export const metadata = {
  title: "Dr. Sudip Paul | Structural Engineering Portfolio",
  description:
    "Executive portfolio of Dr. Sudip Paul, General Manager - Structural Engineering at Engineers India Limited.",
  keywords: [
    "Dr. Sudip Paul",
    "Structural Engineering",
    "Civil Engineering",
    "Engineers India Limited",
    "Portfolio"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} bg-bg font-body text-text antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

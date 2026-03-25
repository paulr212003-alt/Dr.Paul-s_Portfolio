import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  DEFAULT_THEME,
  DEFAULT_THEME_MODE,
  THEME_IDS,
  THEME_MODE_STORAGE_KEY,
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
    var themeStorageKey = "${THEME_STORAGE_KEY}";
    var modeStorageKey = "${THEME_MODE_STORAGE_KEY}";
    var fallbackTheme = "${DEFAULT_THEME}";
    var fallbackMode = "${DEFAULT_THEME_MODE}";
    var validThemes = ${JSON.stringify(THEME_IDS)};

    try {
      var storedTheme = window.localStorage.getItem(themeStorageKey);
      var storedMode = window.localStorage.getItem(modeStorageKey);
      var theme = validThemes.indexOf(storedTheme) >= 0 ? storedTheme : fallbackTheme;
      var mode = storedMode === "dark" ? "dark" : fallbackMode;
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-mode", mode);
      document.documentElement.style.colorScheme = mode;
    } catch (error) {
      document.documentElement.setAttribute("data-theme", fallbackTheme);
      document.documentElement.setAttribute("data-mode", fallbackMode);
      document.documentElement.style.colorScheme = fallbackMode;
    }
  })();
`;

export const metadata = {
  title: "Dr. Sudip Paul | Executive Portfolio",
  description:
    "Executive portfolio of Dr. Sudip Paul, General Manager of Structural Engineering and Industrial & Offshore Infrastructure leadership.",
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

"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeModeSwitch() {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDarkMode}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      onClick={toggleMode}
      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--color-secondary)/0.34)] bg-[rgb(var(--color-secondary)/0.12)] px-2 py-2 shadow-soft transition duration-300 hover:border-accent/45 hover:bg-[rgb(var(--color-secondary)/0.16)] hover:shadow-glow sm:px-2.5"
    >
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted/90 2xl:inline">
        Light
      </span>
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition duration-300 ${
          isDarkMode
            ? "bg-accent"
            : "bg-[rgb(var(--color-secondary)/0.34)]"
        }`}
      >
        <span
          className={`inline-flex h-5 w-5 rounded-full bg-surface shadow-soft transition duration-300 ${
            isDarkMode ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </span>
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted/90 2xl:inline">
        Dark
      </span>
    </button>
  );
}

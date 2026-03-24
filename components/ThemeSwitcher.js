"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="relative">
      <label htmlFor="theme-switcher" className="sr-only">
        Choose theme
      </label>
      <select
        id="theme-switcher"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        className="theme-select appearance-none py-2 pl-4 pr-10 text-[11px] font-semibold uppercase tracking-[0.18em] outline-none"
        aria-label="Choose theme"
      >
        {themes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[10px] text-muted">
        v
      </span>
    </div>
  );
}

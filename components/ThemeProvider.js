"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  THEMES,
  THEME_STORAGE_KEY,
  isValidTheme
} from "@/lib/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof document !== "undefined") {
      const currentTheme = document.documentElement.dataset.theme;

      if (isValidTheme(currentTheme)) {
        return currentTheme;
      }
    }

    return DEFAULT_THEME;
  });

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (isValidTheme(storedTheme)) {
        setThemeState(storedTheme);
      }
    } catch (error) {
      // Ignore localStorage issues and continue with the default theme.
    }
  }, []);

  useEffect(() => {
    const activeTheme = THEMES.find((item) => item.id === theme) ?? THEMES[0];

    document.documentElement.dataset.theme = activeTheme.id;
    document.documentElement.style.colorScheme = activeTheme.scheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme.id);
    } catch (error) {
      // Ignore write failures so the UI remains functional.
    }
  }, [theme]);

  const setTheme = (value) => {
    if (isValidTheme(value)) {
      setThemeState(value);
    }
  };

  const activeTheme = THEMES.find((item) => item.id === theme) ?? THEMES[0];

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setTheme,
        theme,
        themes: THEMES
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}

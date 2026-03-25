"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  DEFAULT_THEME_MODE,
  THEMES,
  THEME_MODE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  isValidTheme,
  isValidThemeMode
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

  const [mode, setModeState] = useState(() => {
    if (typeof document !== "undefined") {
      const currentMode = document.documentElement.dataset.mode;

      if (isValidThemeMode(currentMode)) {
        return currentMode;
      }
    }

    return DEFAULT_THEME_MODE;
  });

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
      const storedMode = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);

      if (isValidTheme(storedTheme)) {
        setThemeState(storedTheme);
      }

      if (isValidThemeMode(storedMode)) {
        setModeState(storedMode);
      }
    } catch (error) {
      // Ignore localStorage issues and continue with defaults.
    }
  }, []);

  useEffect(() => {
    const activeTheme = THEMES.find((item) => item.id === theme) ?? THEMES[0];
    const activeMode = isValidThemeMode(mode) ? mode : DEFAULT_THEME_MODE;

    document.documentElement.dataset.theme = activeTheme.id;
    document.documentElement.dataset.mode = activeMode;
    document.documentElement.style.colorScheme =
      activeMode === "dark" ? "dark" : "light";

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme.id);
      window.localStorage.setItem(THEME_MODE_STORAGE_KEY, activeMode);
    } catch (error) {
      // Ignore write failures so the UI remains functional.
    }
  }, [mode, theme]);

  const setTheme = (value) => {
    if (isValidTheme(value)) {
      setThemeState(value);
    }
  };

  const setMode = (value) => {
    if (isValidThemeMode(value)) {
      setModeState(value);
    }
  };

  const toggleMode = () => {
    setModeState((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  const activeTheme = THEMES.find((item) => item.id === theme) ?? THEMES[0];
  const isDarkMode = mode === "dark";

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        isDarkMode,
        mode,
        setMode,
        setTheme,
        theme,
        themes: THEMES,
        toggleMode
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

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeSwitcher() {
  const { activeTheme, themes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-[90]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-w-[8.5rem] items-center justify-between gap-2 rounded-full border border-border bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text shadow-soft transition duration-300 hover:border-accent/50 hover:shadow-glow"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className="hidden text-muted sm:inline">Theme</span>
        <span className="max-w-[7rem] truncate text-accent">
          {activeTheme.shortLabel}
        </span>
        <span className="text-[10px] text-muted">{isOpen ? "^" : "v"}</span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full mt-3 max-h-[65vh] w-[17rem] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-[1.35rem] border border-border bg-surface p-2 shadow-soft">
          {themes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setTheme(item.id);
                setIsOpen(false);
              }}
              className={`flex w-full flex-col rounded-[1rem] border px-4 py-3 text-left transition duration-300 ${
                item.id === activeTheme.id
                  ? "border-accent/35 bg-surface-soft text-text shadow-glow"
                  : "border-transparent bg-surface text-text hover:border-accent/20 hover:bg-surface-soft"
              }`}
              aria-pressed={item.id === activeTheme.id}
            >
              <span className="text-sm font-semibold">{item.label}</span>
              <span className="mt-1 text-xs leading-6 text-muted">
                {item.description}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

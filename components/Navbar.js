"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import ThemeModeSwitch from "@/components/ThemeModeSwitch";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#experience" },
  { label: "Academics", href: "#academics" },
  { label: "Publications", href: "#publications" },
  { label: "Affiliations", href: "#affiliations" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" }
];

const mobileNavItems = navItems.filter(
  (item) => item.label !== "Projects" && item.label !== "Timeline"
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[120] px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={`relative z-[3] mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 rounded-[1.65rem] border px-4 py-3 backdrop-blur-xl transition duration-300 sm:flex-nowrap sm:px-6 xl:gap-4 ${
          scrolled
            ? "border-border/80 bg-surface/94 shadow-soft"
            : "border-border/60 bg-surface/86"
        }`}
      >
        <a href="#hero" className="min-w-0 xl:shrink-0 xl:pr-3">
          <span className="block truncate font-heading text-lg text-text sm:text-xl">
            Dr. Sudip Paul
          </span>
          <span className="hidden leading-4 text-[10px] uppercase tracking-[0.22em] text-accent/80 sm:block">
            Structural Engineering
          </span>
        </a>

        <div className="hidden min-w-0 items-center gap-3 xl:flex xl:flex-1 xl:justify-center 2xl:gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-muted hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 xl:shrink-0">
          <ThemeSwitcher />
          <ThemeModeSwitch />
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="hidden 2xl:inline-flex"
          >
            Contact
          </Button>
        </div>
      </nav>

      <div className="relative z-[2] mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto rounded-full border border-border/60 bg-surface/78 px-3 py-2 backdrop-blur xl:hidden">
        {mobileNavItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-muted hover:border-accent/25 hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

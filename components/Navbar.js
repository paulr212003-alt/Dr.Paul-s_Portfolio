"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import ThemeModeSwitch from "@/components/ThemeModeSwitch";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Academics", href: "#academics" },
  { label: "Publications", href: "#publications" },
  { label: "Affiliations", href: "#affiliations" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 rounded-[1.65rem] border px-4 py-3 backdrop-blur-xl transition duration-300 sm:flex-nowrap sm:px-6 ${
          scrolled
            ? "border-border/80 bg-surface/94 shadow-soft"
            : "border-border/60 bg-surface/86"
        }`}
      >
        <a href="#hero" className="min-w-0">
          <span className="block truncate font-heading text-lg text-text sm:text-xl">
            Dr. Sudip Paul
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-accent/80 sm:block">
            Structural Engineering
          </span>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.22em] text-muted hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />
          <ThemeModeSwitch />
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Contact
          </Button>
        </div>
      </nav>

      <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto rounded-full border border-border/60 bg-surface/78 px-3 py-2 backdrop-blur xl:hidden">
        {navItems.map((item) => (
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

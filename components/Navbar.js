"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition duration-300 sm:px-6 ${
          scrolled
            ? "border-gold/25 bg-[#26160f]/88 shadow-glow"
            : "border-gold/15 bg-[#26160f]/65"
        }`}
      >
        <a href="#hero" className="min-w-0">
          <span className="block truncate font-heading text-lg text-parchment sm:text-xl">
            Sudip Paul
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-gold/75 sm:block">
            Structural Engineering
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.26em] text-mist/80 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-gold/25 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-gold hover:shadow-glow"
        >
          Contact
        </a>
      </nav>

      <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto rounded-full border border-gold/10 bg-[#26160f]/70 px-3 py-2 backdrop-blur lg:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-mist/80 hover:border-gold/20 hover:text-gold"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

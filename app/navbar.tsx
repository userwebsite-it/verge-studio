"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setScrolled(window.scrollY > 24);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setScrolled(window.scrollY > heroBottom - 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-violet-500/10 bg-[#080810]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent"
        >
          Verge Studio
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-[#fafaf9]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get Your Free Site Audit
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] px-4 py-2 text-xs font-medium text-white lg:hidden"
        >
          Free Site Audit
        </a>
      </nav>
    </header>
  );
}

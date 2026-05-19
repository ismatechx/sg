"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Sugam Gunam home"
        >
          <span className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1C7 1 2 4 2 8C2 10.76 4.24 13 7 13C9.76 13 12 10.76 12 8C12 4 7 1 7 1Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            Sugam Gunam
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 bg-sage-500 text-white text-sm font-medium rounded-full hover:bg-sage-600 transition-colors duration-150"
          >
            Book visit
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 5H16M2 9H16M2 13H16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-500 px-3 py-2 hover:text-zinc-900"
            >
              Sign in
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mx-3 px-4 py-2 bg-sage-500 text-white text-sm font-medium rounded-full text-center hover:bg-sage-600 transition-colors"
            >
              Book visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

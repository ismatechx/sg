const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
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
              <span className="text-sm font-semibold text-white">
                Sugam Gunam
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Holistic Healing Center · Chennai · Est. 2007
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} Sugam Gunam. All rights reserved.</span>
          <span>
            Made with care ·{" "}
            <a
              href="mailto:info@sugamgunam.com"
              className="hover:text-zinc-400 transition-colors"
            >
              info@sugamgunam.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

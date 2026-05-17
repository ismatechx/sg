"use client";

import { useEffect, useRef } from "react";

const locations = [
  {
    name: "Anna Nagar",
    address: "AP 393, 17th Street, I Block",
    city: "Chennai 600040",
    maps: "https://maps.google.com/?q=AP+393+17th+Street+I+Block+Anna+Nagar+Chennai",
    primary: true,
  },
  {
    name: "Vadaperumbakkam",
    address: "No. 31, Saraswathi Nagar",
    city: "Madhavaram, Chennai 600060",
    maps: "https://maps.google.com/?q=31+Saraswathi+Nagar+Madhavaram+Chennai",
    primary: false,
  },
];

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

export default function Locations() {
  const headerRef = useFadeIn();
  const card1Ref = useFadeIn(100);
  const card2Ref = useFadeIn(200);
  const infoRef = useFadeIn(150);

  return (
    <section id="locations" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={headerRef} className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
          Find us
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
          Two clinics across Chennai
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[
          { loc: locations[0], ref: card1Ref },
          { loc: locations[1], ref: card2Ref },
        ].map(({ loc, ref }) => (
          <div
            key={loc.name}
            ref={ref}
            className={`relative p-7 rounded-2xl border transition-all duration-200 ${
              loc.primary
                ? "border-sage-200 bg-sage-50/50 hover:bg-sage-50"
                : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50"
            }`}
          >
            {loc.primary && (
              <span className="absolute top-5 right-5 text-xs font-medium text-sage-600 bg-sage-100 px-2 py-0.5 rounded-full">
                Main clinic
              </span>
            )}

            <div className="mb-5">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1C5.24 1 3 3.24 3 6C3 9.75 8 15 8 15C8 15 13 9.75 13 6C13 3.24 10.76 1 8 1ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8Z"
                    fill="#71717a"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-1">
                {loc.name}
              </h3>
              <p className="text-sm text-zinc-500">{loc.address}</p>
              <p className="text-sm text-zinc-400">{loc.city}</p>
            </div>

            <a
              href={loc.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Get directions
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 8L8 2M8 2H4M8 2V6"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Hours + contact */}
      <div
        ref={infoRef}
        className="grid sm:grid-cols-3 gap-px bg-zinc-200 rounded-2xl overflow-hidden"
      >
        <div className="bg-white px-6 py-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2">
            Hours
          </p>
          <p className="text-sm font-medium text-zinc-900">
            Mon – Sat: 9:30 AM – 7:30 PM
          </p>
          <p className="text-sm text-zinc-500">Closed Sundays</p>
        </div>
        <div className="bg-white px-6 py-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2">
            Phone
          </p>
          <a
            href="tel:+919488228603"
            className="text-sm font-medium text-zinc-900 hover:text-sage-600 transition-colors"
          >
            +91 94882 28603
          </a>
        </div>
        <div className="bg-white px-6 py-5">
          <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2">
            Email
          </p>
          <a
            href="mailto:info@sugamgunam.com"
            className="text-sm font-medium text-zinc-900 hover:text-sage-600 transition-colors"
          >
            info@sugamgunam.com
          </a>
        </div>
      </div>
    </section>
  );
}

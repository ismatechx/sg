"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    heading: "Acupuncture",
    items: [
      "Single needle therapy",
      "Clinical acupuncture",
      "Moxa therapy",
      "Electro-acupuncture",
    ],
  },
  {
    heading: "Cupping",
    items: ["Wet cupping", "Fire cupping", "Dry cupping", "Facial cupping"],
  },
  {
    heading: "Ayurvedic",
    items: [
      "Abhyangam massage",
      "Kizhi (herbal poultice)",
      "Vasti therapies",
      "Shirodhara",
    ],
  },
  {
    heading: "Bodywork",
    items: [
      "Chiropractic care",
      "Dorn therapy",
      "Reflexology",
      "Meridian massage",
    ],
  },
  {
    heading: "Movement",
    items: [
      "Prenatal yoga",
      "Postnatal yoga",
      "Pregnancy yoga",
      "Therapeutic yoga",
    ],
  },
  {
    heading: "Physical therapy",
    items: [
      "Physiotherapy",
      "Electrotherapy",
      "Steam therapy",
      "Rejuvenation",
    ],
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
      { threshold: 0.05 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

function CategoryCard({
  cat,
  delay,
}: {
  cat: (typeof categories)[0];
  delay: number;
}) {
  const ref = useFadeIn(delay);
  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 transition-all duration-200"
    >
      <h3 className="text-sm font-semibold text-zinc-800 mb-4">{cat.heading}</h3>
      <ul className="space-y-2">
        {cat.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="w-1 h-1 rounded-full bg-sage-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Treatments() {
  const headerRef = useFadeIn();
  const pharmacyRef = useFadeIn(300);

  return (
    <section id="treatments" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={headerRef} className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
          Modalities
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
          Our treatment toolkit
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.heading} cat={cat} delay={i * 80} />
        ))}
      </div>

      {/* Herbal pharmacy note */}
      <div
        ref={pharmacyRef}
        className="mt-8 p-6 rounded-2xl border border-sage-200 bg-sage-50/50 flex items-start gap-4"
      >
        <div className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5C8 1.5 3 4.5 3 8.5C3 11.26 5.24 13.5 8 13.5C10.76 13.5 13 11.26 13 8.5C13 4.5 8 1.5 8 1.5Z"
              fill="#4a7c5f"
              opacity="0.3"
            />
            <path
              d="M8 1.5C8 1.5 3 4.5 3 8.5C3 11.26 5.24 13.5 8 13.5C10.76 13.5 13 11.26 13 8.5C13 4.5 8 1.5 8 1.5Z"
              stroke="#4a7c5f"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-sage-800 mb-1">
            In-house herbal pharmacy
          </h4>
          <p className="text-sm text-sage-700">
            Our clinic houses a curated herbal pharmacy with preparations for
            orthopaedic care, respiratory health, digestive wellness, and systemic
            detox — formulated by our practitioners.
          </p>
        </div>
      </div>
    </section>
  );
}

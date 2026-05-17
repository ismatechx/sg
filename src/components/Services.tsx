"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C10 2 4 5.5 4 11C4 14.31 6.69 17 10 17C13.31 17 16 14.31 16 11C16 5.5 10 2 10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 8V12M8 10H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Pain & Bone Care",
    description:
      "Comprehensive relief for joint pain, arthritis, sciatica, slip disc, frozen shoulder, and sports injuries through targeted non-invasive therapies.",
    tags: ["Joint pain", "Arthritis", "Back pain", "Sciatica", "Slip disc"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 6V10L13 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Women's Wellness",
    description:
      "Holistic support for PCOD/PCOS, hormonal balance, menstrual health, prenatal and postnatal care, skin and hair restoration.",
    tags: ["PCOD/PCOS", "Hormonal health", "Menstrual care", "Postnatal"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10H17M10 3V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Metabolic Health",
    description:
      "Evidence-based natural approaches to diabetes, thyroid disorders, weight management, hypertension, stress, and detox therapies.",
    tags: ["Diabetes", "Thyroid", "Weight loss", "Hypertension", "Detox"],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
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
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-sage-200 hover:bg-sage-50/30 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-sage-100 group-hover:text-sage-600 group-hover:border-sage-200 transition-colors duration-300 mb-5">
        {service.icon}
      </div>
      <h3 className="text-base font-semibold text-zinc-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed mb-5">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-100 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useReveal();

  return (
    <section id="services" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={headerRef} className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
          What we treat
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 max-w-xl">
          Conditions we specialise in
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

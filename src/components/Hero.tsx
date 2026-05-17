"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* Sage glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,124,95,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs text-zinc-500 font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
          Healing naturally since 2007 · Chennai
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.08] mb-6 max-w-4xl mx-auto">
          Healing that addresses{" "}
          <span className="text-sage-500">root causes,</span>
          <br />
          not just symptoms.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto mb-10">
          Sugam Gunam integrates Siddha medicine, Naturopathy, and Acupuncture
          into one complete path to lasting wellness — in Chennai since 2007.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-sage-500 text-white text-sm font-medium rounded-full hover:bg-sage-600 transition-colors duration-200 shadow-sm"
          >
            Book a consultation
          </a>
          <a
            href="#services"
            className="px-6 py-2.5 bg-white text-zinc-700 text-sm font-medium rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200"
          >
            Explore treatments
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 divide-x divide-zinc-200 max-w-lg mx-auto border border-zinc-200 rounded-2xl overflow-hidden">
          {[
            { value: "18+", label: "Years of practice" },
            { value: "2", label: "Clinic locations" },
            { value: "5000+", label: "Lives transformed" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-5 text-center bg-zinc-50/50">
              <div className="text-2xl font-semibold text-zinc-900 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="animate-bounce"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="23"
            rx="7.5"
            stroke="currentColor"
          />
          <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

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

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section
      id="contact"
      className="py-28 border-t border-zinc-200 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-400 mb-4">
            Begin your journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5">
            Ready to experience integrated healing?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-10 text-[15px]">
            Book a consultation at either of our Chennai clinics. Our
            practitioners will assess your condition holistically and design a
            personalised treatment path.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href="tel:+919488228603"
              className="px-6 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-100 transition-colors duration-200"
            >
              Call +91 94882 28603
            </a>
            <a
              href="mailto:info@sugamgunam.com"
              className="px-6 py-2.5 bg-zinc-800 text-white text-sm font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors duration-200"
            >
              Email us
            </a>
          </div>

          {/* Online consultation badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" />
            Online consultations available for out-of-city patients
          </div>
        </div>
      </div>
    </section>
  );
}

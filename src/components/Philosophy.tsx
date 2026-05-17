"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    number: "01",
    name: "Siddha",
    tagline: "Restoring vital force",
    description:
      "One of the world's oldest medical systems, Siddha medicine works to restore the body's innate vital energy — addressing illness at its energetic root before it manifests physically.",
  },
  {
    number: "02",
    name: "Naturopathy",
    tagline: "Nature as medicine",
    description:
      "Water, mud, sunlight, and air become therapeutic tools. Naturopathy trusts the body's self-healing intelligence and creates the ideal conditions for recovery without synthetic intervention.",
  },
  {
    number: "03",
    name: "Acupuncture",
    tagline: "Meridian activation",
    description:
      "By stimulating precise points along the body's energy meridians, acupuncture restores the free flow of vital energy — reducing pain, inflammation, and systemic imbalance with precision.",
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

function PillarCard({
  pillar,
  delay,
}: {
  pillar: (typeof pillars)[0];
  delay: number;
}) {
  const ref = useFadeIn(delay);
  return (
    <div ref={ref} className="bg-white p-8 flex flex-col gap-4">
      <span className="text-xs font-mono text-zinc-300">{pillar.number}</span>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">
          {pillar.name}
        </h3>
        <p className="text-xs font-medium text-sage-500 uppercase tracking-wider">
          {pillar.tagline}
        </p>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed flex-1">
        {pillar.description}
      </p>
      <div className="w-8 h-px bg-sage-300 mt-2" />
    </div>
  );
}

export default function Philosophy() {
  const headerRef = useFadeIn();
  const quoteRef = useFadeIn(200);

  return (
    <section
      id="philosophy"
      className="py-28 border-t border-zinc-200 bg-zinc-50/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
            Our approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            Three disciplines, one complete path
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            Modern medicine excels at treating symptoms. We go further — combining
            three ancient disciplines into a unified framework that addresses the
            cause, not its expression.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-zinc-200 rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <PillarCard key={p.name} pillar={p} delay={i * 120} />
          ))}
        </div>

        {/* Pull quote */}
        <div ref={quoteRef} className="mt-16 max-w-2xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-zinc-700 leading-snug tracking-tight">
            &ldquo;True healing is not the suppression of symptoms — it is the
            restoration of the body&rsquo;s own wisdom.&rdquo;
          </blockquote>
          <p className="text-sm text-zinc-400 mt-4">
            — Prof. Raja Sheik Peer, Founder
          </p>
        </div>
      </div>
    </section>
  );
}

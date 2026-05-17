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

export default function About() {
  const leftRef = useFadeIn(0);
  const rightRef = useFadeIn(150);

  return (
    <section
      id="about"
      className="py-28 border-t border-zinc-200 bg-zinc-50/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story */}
          <div ref={leftRef}>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Our story
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
              Founded on conviction, not convention.
            </h2>
            <div className="space-y-4 text-zinc-500 leading-relaxed text-[15px]">
              <p>
                Sugam Gunam was founded in Chennai in 2007 by Prof. Raja Sheik
                Peer and Dr. Sheba — practitioners who believed the future of
                healthcare lay in integrating the best of ancient traditions
                rather than discarding them.
              </p>
              <p>
                The name itself reflects this ethos:{" "}
                <em className="text-zinc-700 not-italic font-medium">
                  Sugam Gunam
                </em>{" "}
                means &ldquo;well-being&rdquo; in Tamil — a state that goes
                beyond the absence of disease to encompass vitality, clarity, and
                harmony.
              </p>
              <p>
                Over 18 years, the center has grown from a single practice into
                two fully-equipped clinics serving thousands of patients across
                Chennai — while maintaining the personal, attentive care that
                defines the Sugam Gunam experience.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  Prof. Raja Sheik Peer
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Founder · Siddha & Acupuncture
                </div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  Dr. Sheba
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Co-founder · Naturopathy
                </div>
              </div>
            </div>
          </div>

          {/* Right: values grid */}
          <div ref={rightRef} className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "◎",
                title: "Root cause focus",
                body: "We spend time understanding why — not just treating what — so healing is lasting.",
              },
              {
                icon: "◈",
                title: "Integrated care",
                body: "Three disciplines, one coherent treatment plan tailored to your specific constitution.",
              },
              {
                icon: "◇",
                title: "No side effects",
                body: "Every therapy we use is natural, gentle, and designed to support — not suppress — the body.",
              },
              {
                icon: "◉",
                title: "Personal attention",
                body: "Small clinic, senior practitioners. You speak to the expert, every single visit.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-5 rounded-2xl border border-zinc-200 bg-white"
              >
                <div className="text-sage-400 text-xl mb-3">{v.icon}</div>
                <h4 className="text-sm font-semibold text-zinc-900 mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

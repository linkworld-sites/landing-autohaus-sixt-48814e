"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { track } from "@/lib/funnel";

const STATS = [
  { value: 24, unit: "h", label: "Faire Bewertung in 24 Stunden" },
  { value: 500, unit: "+", label: "Zufriedene Kunden" },
  { value: 10, unit: " Jahre", label: "Erfahrung & Kompetenz" },
];

function Counter({ value, unit }: { value: number; unit: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      void animate(count, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [inView, value, count]);

  return (
    <div ref={ref} className="flex items-end gap-1">
      <motion.span
        className="font-syne font-bold text-reinweiss leading-none"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.03em" }}
      >
        {rounded}
      </motion.span>
      <span className="font-syne font-bold text-signal text-3xl md:text-4xl pb-1">
        {unit}
      </span>
    </div>
  );
}

export function AnVerkauf() {
  const [submitted, setSubmitted] = useState(false);
  const started = useRef(false);

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      track("form_start");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("lead");
    track("convert");
    setSubmitted(true);
  };

  return (
    <section id="ankauf" className="bg-stahl py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Headline + Stats */}
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-8">
              An- & Verkauf
            </p>
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.6, 0.01, 0, 0.9] }}
              className="font-syne font-bold text-reinweiss text-4xl md:text-5xl mb-12"
              style={{ letterSpacing: "-0.02em" }}
            >
              Faire Preise.
              <br />
              Klare Prozesse.
              <br />
              Kein Umweg.
            </motion.h2>

            <div className="space-y-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-l-2 border-signal/30 pl-6"
                >
                  <Counter value={stat.value} unit={stat.unit} />
                  <p className="mt-1 font-inter text-chrom/50 text-xs uppercase tracking-[0.18em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Proposition + Quick form */}
          <div>
            <p className="font-inter text-chrom leading-relaxed text-lg mb-10">
              Wir kaufen Ihr Fahrzeug direkt an — transparent bewertet, sofort
              abgewickelt. Kein Warteraum, keine Auktion, kein Stress.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-signal/30 bg-tiefgrau p-8"
              >
                <p className="font-syne font-bold text-reinweiss text-xl">
                  Direktankauf. Heute noch.
                </p>
                <p className="mt-2 font-inter text-chrom/60 text-sm">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onFocus={handleFocus}
                className="space-y-4"
              >
                <div>
                  <label className="block font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/50 mb-2">
                    Kennzeichen
                  </label>
                  <input
                    type="text"
                    placeholder="z.B. M-AB 1234"
                    className="w-full bg-tiefgrau border border-chrom/15 px-4 py-3 font-inter text-reinweiss placeholder-chrom/25 outline-none focus:border-signal transition-colors duration-250"
                  />
                </div>
                <div>
                  <label className="block font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/50 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+49"
                    className="w-full bg-tiefgrau border border-chrom/15 px-4 py-3 font-inter text-reinweiss placeholder-chrom/25 outline-none focus:border-signal transition-colors duration-250"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#FF8533" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full bg-signal text-tiefgrau font-syne font-bold text-xs uppercase tracking-[0.18em] py-4 mt-2"
                >
                  Direktankauf. Heute noch.
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

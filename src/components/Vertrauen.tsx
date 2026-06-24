"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Endlich ein Autohaus, das wirklich zuhört. Keine versteckten Kosten, keine Überredung — nur klare Beratung und ein Fahrzeug, das perfekt zu uns passt.",
    author: "Stefan M.",
    location: "München",
  },
  {
    quote:
      "Die Werkstatt hat mein Auto in Rekordzeit fertig — und das zu einem fairen Preis. Ich komme seit fünf Jahren hierher und das bleibt so.",
    author: "Claudia R.",
    location: "Augsburg",
  },
  {
    quote:
      "Ankauf innerhalb von 24 Stunden, wie versprochen. Kein Feilschen, kein Theater. Genau so soll es laufen.",
    author: "Thomas B.",
    location: "Landsberg am Lech",
  },
];

const BRANDS = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche", "Opel"];

export function Vertrauen() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-stahl py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-16 text-center">
          Was unsere Kunden sagen
        </p>

        {/* Testimonial */}
        <div className="relative min-h-[300px] md:min-h-[260px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full text-center max-w-3xl mx-auto"
            >
              <div
                className="font-syne font-bold text-signal/25 leading-none select-none mb-4"
                style={{ fontSize: "clamp(5rem, 15vw, 10rem)" }}
                aria-hidden
              >
                &ldquo;
              </div>
              <p
                className="font-syne text-reinweiss text-xl md:text-2xl lg:text-3xl leading-relaxed"
                style={{ letterSpacing: "-0.01em" }}
              >
                {TESTIMONIALS[current].quote}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-signal" />
                <p className="font-inter text-sm text-chrom/60">
                  {TESTIMONIALS[current].author} · {TESTIMONIALS[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-400 ${
                i === current ? "w-10 bg-signal" : "w-4 bg-chrom/25"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Brand partner logos */}
        <div className="mt-24 pt-12 border-t border-chrom/10">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-chrom/30 text-center mb-10">
            Marken die wir kennen & warten
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 lg:gap-20">
            {BRANDS.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ color: "#C0C0C0" }}
                className="font-syne font-bold text-sm uppercase tracking-widest text-chrom/15 transition-colors duration-300 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

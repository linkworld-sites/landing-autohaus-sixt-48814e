"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PANELS = [
  {
    label: "Neuwagen",
    sub: "Die neuesten Modelle — transparent beraten, fair bepreist.",
    image: "/images/hero.png",
    number: "01",
  },
  {
    label: "Gebrauchtwagen",
    sub: "Geprüfte Fahrzeuge mit vollständiger Servicehistorie.",
    image: "/images/lifestyle.png",
    number: "02",
  },
  {
    label: "Service & Werkstatt",
    sub: "Meisterbetrieb für alle Marken — Ihr Fahrzeug in den besten Händen.",
    image: "/images/environment.png",
    number: "03",
  },
];

export function Triptych() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <section id="leistungen" ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Section label — visible before pinning begins */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Slide container */}
        <motion.div
          className="flex h-full"
          style={{ x, width: "300vw" }}
        >
          {PANELS.map((panel, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden"
              style={{ width: "100vw", height: "100vh" }}
            >
              {/* Background image */}
              <img
                src={panel.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover scale-105"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-tiefgrau/65 via-tiefgrau/20 to-tiefgrau/75" />
              <div className="absolute inset-0 bg-tiefgrau/30" />

              {/* Ghost number */}
              <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                aria-hidden
              >
                <span
                  className="font-syne font-bold text-reinweiss/5"
                  style={{ fontSize: "28vw", lineHeight: 1 }}
                >
                  {panel.number}
                </span>
              </div>

              {/* Panel content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 md:px-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-inter text-xs uppercase tracking-[0.25em] text-signal mb-6">
                    {panel.number}
                  </p>
                  <h2
                    className="font-syne font-bold text-reinweiss text-5xl md:text-7xl lg:text-8xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {panel.label}
                  </h2>
                  <p className="mt-6 font-inter text-chrom text-base md:text-xl max-w-md leading-relaxed">
                    {panel.sub}
                  </p>
                  <div className="mt-8 mx-auto h-px w-16 bg-signal" />
                </motion.div>
              </div>

              {/* Panel position indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {PANELS.map((_, j) => (
                  <div
                    key={j}
                    className={`h-px transition-all duration-300 ${
                      j === i ? "w-10 bg-signal" : "w-4 bg-chrom/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

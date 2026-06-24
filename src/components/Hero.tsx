"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { track } from "@/lib/funnel";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-tiefgrau">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <img
          src="/images/hero.png"
          alt=""
          className="h-[110%] w-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-tiefgrau/90 via-tiefgrau/55 to-tiefgrau/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-tiefgrau/80 via-transparent to-tiefgrau/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24"
        style={{ y: contentY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-xs uppercase tracking-[0.25em] text-signal mb-5"
        >
          Autohaus SIXT — München
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-bold text-reinweiss leading-[0.95] text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] max-w-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ihr Autohaus.
          <br />
          Ihr Vorteil.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-inter text-chrom text-base md:text-lg max-w-lg leading-relaxed"
        >
          Von der Probefahrt bis zur Inspektion — alles aus einer Hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-6"
        >
          <Link href="/contact">
            <motion.button
              onClick={() => track("intent")}
              whileHover={{
                scale: 1.03,
                borderRadius: "20px",
                backgroundColor: "#FF8533",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-signal text-tiefgrau font-syne font-bold text-xs uppercase tracking-[0.18em] px-10 py-4 rounded-2xl"
            >
              Termin vereinbaren
            </motion.button>
          </Link>
          <Link
            href="#fahrzeuge"
            className="font-inter text-xs uppercase tracking-[0.15em] text-chrom/60 hover:text-chrom transition-colors duration-300"
          >
            Fahrzeuge entdecken →
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-chrom/30"
        />
        <span
          className="font-inter text-[10px] uppercase tracking-[0.3em] text-chrom/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scrollen
        </span>
      </motion.div>
    </section>
  );
}

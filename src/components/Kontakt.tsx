"use client";

import { motion } from "framer-motion";
import ConversionForm from "@/components/ConversionForm";

const FIELDS = [
  { name: "name", label: "Name", required: true },
  { name: "phone", label: "Telefon", type: "tel" },
  { name: "subject", label: "Betreff", type: "text" },
  { name: "message", label: "Nachricht", type: "textarea" },
];

const INFO = [
  {
    label: "Adresse",
    lines: ["Autohaus SIXT", "München, Deutschland"],
  },
  {
    label: "Öffnungszeiten",
    lines: ["Mo–Fr 08:00–18:00 Uhr", "Sa 09:00–14:00 Uhr"],
  },
  {
    label: "Telefon",
    lines: ["+49 (0) 89 000 000"],
  },
];

export function Kontakt() {
  return (
    <section id="kontakt" className="bg-tiefgrau py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-stahl p-8 md:p-12"
          >
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-6">
              Kontakt & Anfahrt
            </p>
            <h2
              className="font-syne font-bold text-reinweiss text-3xl md:text-4xl mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Schreiben Sie uns.
            </h2>
            <div className="text-chrom">
              <ConversionForm
                startStep="form_start"
                submitStep="lead"
                cta="Anfrage senden"
                fields={FIELDS}
              />
            </div>
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-10 justify-center"
          >
            {/* Abstract map */}
            <div className="relative h-48 bg-stahl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Grid lines */}
                {Array.from({ length: 14 }, (_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 15}
                    x2="400"
                    y2={i * 15}
                    stroke="#C0C0C0"
                    strokeWidth="0.4"
                    strokeOpacity="0.06"
                  />
                ))}
                {Array.from({ length: 27 }, (_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 15}
                    y1="0"
                    x2={i * 15}
                    y2="200"
                    stroke="#C0C0C0"
                    strokeWidth="0.4"
                    strokeOpacity="0.06"
                  />
                ))}
                {/* Roads */}
                <path d="M 0 100 Q 120 90 200 100 Q 280 110 400 95" stroke="#C0C0C0" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
                <path d="M 200 0 L 200 200" stroke="#C0C0C0" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                <path d="M 60 0 L 60 200" stroke="#C0C0C0" strokeWidth="0.8" strokeOpacity="0.07" fill="none" />
                <path d="M 0 60 L 400 60" stroke="#C0C0C0" strokeWidth="0.8" strokeOpacity="0.07" fill="none" />
                {/* Location pin */}
                <circle cx="200" cy="100" r="6" fill="#FF6600" fillOpacity="0.9" />
                <circle cx="200" cy="100" r="14" fill="none" stroke="#FF6600" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="200" cy="100" r="24" fill="none" stroke="#FF6600" strokeWidth="0.5" strokeOpacity="0.15" />
              </svg>
              <div className="absolute bottom-4 left-4">
                <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/30">
                  Autohaus SIXT · München
                </p>
              </div>
            </div>

            {/* Contact info */}
            {INFO.map((block) => (
              <div key={block.label} className="border-l-2 border-signal/20 pl-5">
                <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/40 mb-2">
                  {block.label}
                </p>
                {block.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`font-syne ${
                      i === 0
                        ? "text-reinweiss font-medium"
                        : "text-chrom/55 text-sm font-normal"
                    } mt-0.5`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

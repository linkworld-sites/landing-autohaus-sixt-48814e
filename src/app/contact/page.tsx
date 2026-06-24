"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import ConversionForm from "@/components/ConversionForm";
import { track } from "@/lib/funnel";

const FIELDS = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "E-Mail", type: "email", required: true },
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
    lines: ["Mo–Fr 08:00–18:00 Uhr", "Sa 09:00–14:00 Uhr", "So geschlossen"],
  },
  {
    label: "Telefon",
    lines: ["+49 (0) 89 000 000"],
  },
  {
    label: "E-Mail",
    lines: ["info@autohaus-sixt.de"],
  },
];

export default function ContactPage() {
  useEffect(() => {
    track("form_start");
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-tiefgrau pt-28 md:pt-36 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-5">
              Kontakt
            </p>
            <h1
              className="font-syne font-bold text-reinweiss text-5xl md:text-7xl lg:text-8xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Wir sind
              <br />
              für Sie da.
            </h1>
            <p className="mt-6 font-inter text-chrom/60 text-lg max-w-xl leading-relaxed">
              Ob Probefahrt, Fahrzeuganfrage oder Werkstatttermin — schreiben Sie
              uns. Wir antworten persönlich, nicht automatisiert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-stahl p-8 md:p-12"
            >
              <h2
                className="font-syne font-bold text-reinweiss text-2xl md:text-3xl mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                Anfrage senden
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

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 justify-center"
            >
              {INFO.map((block) => (
                <div key={block.label} className="border-l-2 border-signal/25 pl-6">
                  <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-chrom/35 mb-2">
                    {block.label}
                  </p>
                  {block.lines.map((line, i) => (
                    <p
                      key={i}
                      className={`font-syne ${
                        i === 0
                          ? "text-reinweiss font-medium text-lg"
                          : "text-chrom/55 text-sm font-normal"
                      } mt-0.5`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}

              <div className="mt-4 pt-8 border-t border-chrom/10">
                <p className="font-inter text-xs text-chrom/40 leading-relaxed">
                  Autohaus SIXT ist Ihr lokaler Partner für Neuwagen, Gebrauchtwagen
                  und Werkstattservice. Wir arbeiten herstellerunabhängig und sind
                  für alle Marken zugelassen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

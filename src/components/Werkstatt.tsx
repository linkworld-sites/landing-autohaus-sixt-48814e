"use client";

import { motion } from "framer-motion";

const SERVICES = [
  { label: "Hauptuntersuchung (HU/AU)", detail: "TÜV-Vorbereitung & Abnahme" },
  { label: "Inspektion & Ölwechsel", detail: "Herstellerkonformer Service" },
  { label: "Bremsenservice", detail: "Beläge, Scheiben, Flüssigkeit" },
  { label: "Reifenservice", detail: "Montage, Auswuchten, Einlagerung" },
  { label: "Klimaservice", detail: "Prüfung, Befüllung, Desinfektion" },
  { label: "Fahrzeugdiagnose", detail: "Fehlerspeicher & Elektronik" },
  { label: "Unfallreparatur", detail: "Karosserie & Lackierung" },
  { label: "Garantiearbeiten", detail: "Alle gängigen Hersteller" },
];

export function Werkstatt() {
  return (
    <section id="service" className="bg-tiefgrau py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Workshop image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden h-[420px] md:h-[600px] lg:h-[680px]">
              <img
                src="/images/environment.png"
                alt="Autohaus SIXT Werkstatt"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tiefgrau/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-tiefgrau/15" />
            </div>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p
                className="font-syne font-bold text-reinweiss text-xl md:text-2xl"
                style={{ letterSpacing: "-0.01em" }}
              >
                Wir kennen jedes Fahrzeug —<br />und jeden Kunden.
              </p>
              <div className="mt-4 h-px w-12 bg-signal" />
            </div>
          </motion.div>

          {/* Right: Service checklist */}
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-6">
              Werkstatt & Service
            </p>
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.6, 0.01, 0, 0.9] }}
              className="font-syne font-bold text-reinweiss text-4xl md:text-5xl mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Meisterbetrieb
            </motion.h2>
            <p className="font-inter text-chrom/60 leading-relaxed mb-12 text-sm md:text-base">
              Modernste Diagnostik, qualifizierte Techniker, herstellerunabhängige
              Kompetenz — für alle Marken und Modelle.
            </p>

            {/* Service items */}
            <div>
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between py-4 border-b border-chrom/10 hover:border-signal/25 transition-colors duration-300"
                >
                  <div>
                    <p className="font-inter font-medium text-reinweiss text-sm group-hover:text-signal transition-colors duration-300">
                      {service.label}
                    </p>
                    <p className="mt-0.5 font-inter text-chrom/40 text-xs">
                      {service.detail}
                    </p>
                  </div>
                  <motion.span
                    className="text-signal text-base ml-4 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, backgroundColor: "#FF8533" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-block font-inter text-xs uppercase tracking-[0.18em] text-tiefgrau bg-signal px-8 py-4"
              >
                Werkstatttermin anfragen
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

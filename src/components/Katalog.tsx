"use client";

import { motion } from "framer-motion";

const VEHICLES = [
  {
    model: "BMW 5 Series",
    spec: "530d xDrive · Automatik · 2024",
    type: "Neuwagen",
    image: "/images/lifestyle.png",
    featured: true,
  },
  {
    model: "Mercedes C-Klasse",
    spec: "C220d · 4MATIC · 2023",
    type: "Gebrauchtwagen",
    image: "/images/environment.png",
    featured: false,
  },
  {
    model: "Audi Q5",
    spec: "45 TDI · quattro · 2024",
    type: "Neuwagen",
    image: "/images/texture.png",
    featured: false,
  },
];

interface Vehicle {
  model: string;
  spec: string;
  type: string;
  image: string;
  featured: boolean;
}

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  const imgHeight = vehicle.featured
    ? "h-[360px] md:h-[520px]"
    : "h-56 md:h-64";

  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden bg-stahl h-full flex flex-col"
    >
      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${imgHeight}`}>
        <motion.img
          src={vehicle.image}
          alt=""
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stahl/80" />

        {/* Type badge */}
        <span className="absolute top-4 left-4 font-inter text-[10px] uppercase tracking-[0.2em] text-tiefgrau bg-signal px-3 py-1">
          {vehicle.type}
        </span>

        {/* Placeholder notice */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-px w-20 bg-chrom/40" />
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/40">
            Fahrzeugfoto folgt
          </p>
          <div className="h-px w-20 bg-chrom/40" />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h3
            className="font-syne font-bold text-reinweiss text-xl md:text-2xl"
            style={{ letterSpacing: "-0.01em" }}
          >
            {vehicle.model}
          </h3>
          <p className="mt-1 font-inter text-chrom/60 text-sm">{vehicle.spec}</p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <motion.a
            href="/contact"
            className="font-inter text-xs uppercase tracking-[0.18em] text-signal"
            whileHover={{ letterSpacing: "0.22em" }}
            transition={{ duration: 0.2 }}
          >
            Details anfragen →
          </motion.a>
        </div>
      </div>

      {/* Hover shadow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
    </motion.article>
  );
}

export function Katalog() {
  return (
    <section id="fahrzeuge" className="bg-tiefgrau py-24 md:py-32">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-5">
              Fahrzeugkatalog
            </p>
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.6, 0.01, 0, 0.9] }}
              className="font-syne font-bold text-reinweiss text-4xl md:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ausgewählte Fahrzeuge
            </motion.h2>
          </div>
          <p className="font-inter text-chrom/60 text-sm max-w-xs mt-6 md:mt-0 leading-relaxed">
            Jedes Fahrzeug sorgfältig geprüft — Qualität statt Quantität.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stahl/20"
          style={{ gridTemplateRows: "auto" }}
        >
          {/* Featured: 2 cols wide */}
          <div className="md:col-span-2">
            <VehicleCard vehicle={VEHICLES[0]} index={0} />
          </div>

          {/* Two standard cards stacked */}
          <div className="flex flex-col gap-px">
            <VehicleCard vehicle={VEHICLES[1]} index={1} />
            <VehicleCard vehicle={VEHICLES[2]} index={2} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02, borderColor: "#FF6600", color: "#FF6600" }}
            transition={{ duration: 0.2 }}
            className="inline-block font-inter text-xs uppercase tracking-[0.2em] text-chrom border border-chrom/20 px-10 py-4"
          >
            Alle Fahrzeuge anfragen
          </motion.a>
        </div>
      </div>
    </section>
  );
}

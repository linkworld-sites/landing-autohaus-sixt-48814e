"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "An & Verkauf", href: "#ankauf" },
  { label: "Service", href: "#service" },
  { label: "Journal", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-stahl/95 backdrop-blur-sm border-b border-chrom/5" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 h-16 md:h-20 max-w-screen-xl mx-auto">
        {/* Wordmark */}
        <Link href="/" className="font-syne font-bold text-xl tracking-[0.08em] text-reinweiss">
          SIXT
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative font-inter text-xs uppercase tracking-[0.15em] text-chrom hover:text-reinweiss transition-colors duration-300 py-2 block"
              >
                {label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-signal"
                  initial={{ scaleX: 0, originX: "50%" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-px w-6 bg-reinweiss origin-center"
              animate={
                open
                  ? {
                      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                      y: i === 0 ? 6 : i === 2 ? -6 : 0,
                      opacity: i === 1 ? 0 : 1,
                    }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25, delay: i * 0.04 }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-stahl/98 border-t border-chrom/10 overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 font-inter text-xs uppercase tracking-[0.15em] text-chrom hover:text-reinweiss hover:bg-signal/5 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

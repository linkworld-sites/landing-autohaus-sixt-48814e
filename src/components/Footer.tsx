import Link from "next/link";

const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "An & Verkauf", href: "#ankauf" },
  { label: "Service", href: "#service" },
  { label: "Journal", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
];

const LEGAL = [
  { label: "Impressum", href: "/legal/impressum" },
  { label: "Datenschutz", href: "/legal/datenschutz" },
  { label: "Cookies", href: "/legal/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-tiefgrau">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto py-16">
        {/* Top signal rule */}
        <div className="h-px w-full bg-signal mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand column */}
          <div>
            <span className="font-syne font-bold text-2xl text-reinweiss tracking-[0.08em]">
              SIXT
            </span>
            <p className="mt-4 font-inter text-chrom/50 text-sm leading-relaxed max-w-xs">
              Ihr regionaler Automobilpartner — von der ersten Probefahrt bis zur
              langjährigen Inspektion. Vertrauen durch Präzision.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/30 mb-5">
                Navigation
              </p>
              <ul className="space-y-3">
                {NAV.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-inter text-xs text-chrom/50 hover:text-signal transition-colors duration-300 uppercase tracking-wide"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-chrom/30 mb-5">
                Rechtliches
              </p>
              <ul className="space-y-3">
                {LEGAL.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-inter text-xs text-chrom/50 hover:text-signal transition-colors duration-300 uppercase tracking-wide"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-chrom/8 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-inter text-xs text-chrom/25">
            © 2026 Autohaus SIXT. Alle Rechte vorbehalten.
          </p>
          <p className="font-inter text-xs text-chrom/25">
            Präzision. Vertrauen. Fahrfreude.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autohaus SIXT — Ihr Autohaus. Ihr Vorteil.",
  description: "Ihr Autohaus für Neuwagen, Gebrauchtwagen und Werkstattservice in München. Faire Preise, klare Prozesse — alles aus einer Hand.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-tiefgrau text-reinweiss">
        <FunnelTracker />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}

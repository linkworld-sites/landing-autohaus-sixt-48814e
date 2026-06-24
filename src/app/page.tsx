import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Triptych } from "@/components/Triptych";
import { Katalog } from "@/components/Katalog";
import { AnVerkauf } from "@/components/AnVerkauf";
import { Werkstatt } from "@/components/Werkstatt";
import { Vertrauen } from "@/components/Vertrauen";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Triptych />
      <Katalog />
      <AnVerkauf />
      <Werkstatt />
      <Vertrauen />
      <Kontakt />
      <Footer />
    </>
  );
}
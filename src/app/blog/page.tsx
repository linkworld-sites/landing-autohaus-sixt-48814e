import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Journal — Autohaus SIXT",
  description: "Neuigkeiten, Fahrzeugberichte und Einblicke vom Autohaus SIXT.",
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-tiefgrau pt-28 md:pt-36 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
          <div className="mb-16">
            <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-5">
              Journal
            </p>
            <h1
              className="font-syne font-bold text-reinweiss text-5xl md:text-7xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Neuigkeiten &<br />Einblicke
            </h1>
          </div>

          {posts.length === 0 ? (
            <p className="font-inter text-chrom/50 mt-8">
              Neue Beiträge sind in Vorbereitung — schauen Sie bald wieder vorbei.
            </p>
          ) : (
            <ul className="space-y-0 border-t border-chrom/10">
              {posts.map((p) => (
                <li key={p.slug} className="border-b border-chrom/10">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-8 hover:bg-stahl/30 transition-colors duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
                  >
                    <div className="flex-1">
                      {p.date && (
                        <p className="font-inter text-xs uppercase tracking-[0.18em] text-signal mb-3">
                          {p.date}
                        </p>
                      )}
                      <h2
                        className="font-syne font-bold text-reinweiss text-2xl md:text-3xl group-hover:text-signal transition-colors duration-300"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {p.title}
                      </h2>
                      {p.description && (
                        <p className="mt-2 font-inter text-chrom/55 text-sm leading-relaxed max-w-xl">
                          {p.description}
                        </p>
                      )}
                    </div>
                    <span className="font-inter text-xs uppercase tracking-[0.15em] text-signal/60 group-hover:text-signal transition-colors duration-300 flex-shrink-0 pt-1">
                      Lesen →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16">
            <Link
              href="/"
              className="font-inter text-xs uppercase tracking-[0.15em] text-chrom/40 hover:text-signal transition-colors duration-300"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

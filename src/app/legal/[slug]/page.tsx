import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-tiefgrau pt-28 md:pt-36 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
          <Link
            href="/"
            className="font-inter text-xs uppercase tracking-[0.15em] text-chrom/40 hover:text-signal transition-colors duration-300"
          >
            ← Zurück
          </Link>
          <div className="mt-10 max-w-2xl">
            <article
              className="post-body"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

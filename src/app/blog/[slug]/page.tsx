import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-tiefgrau pt-28 md:pt-36 pb-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
          <Link
            href="/blog"
            className="font-inter text-xs uppercase tracking-[0.15em] text-chrom/40 hover:text-signal transition-colors duration-300"
          >
            ← Alle Beiträge
          </Link>

          <div className="mt-10 mb-12 pb-12 border-b border-chrom/10">
            {post.date && (
              <p className="font-inter text-xs uppercase tracking-[0.22em] text-signal mb-5">
                {post.date}
              </p>
            )}
            <h1
              className="font-syne font-bold text-reinweiss text-4xl md:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h1>
          </div>

          <article
            className="post-body max-w-2xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

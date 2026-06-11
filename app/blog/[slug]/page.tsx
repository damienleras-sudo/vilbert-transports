import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article introuvable" };
  }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.vilbert-transports.fr${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Vilbert Transports" },
    publisher: {
      "@type": "Organization",
      name: "Vilbert Transports",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vilbert-transports.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.vilbert-transports.fr/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative bg-[#1a3d6b]">
        <div className="absolute inset-0">
          <Image
            src={post.image || "/hero.jpg"}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-28">
          <span className="inline-block bg-[#f5b800] text-gray-900 text-xs font-black px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100 text-sm">
            <span>📅 {formatDate(post.date)}</span>
            <span>⏱️ {post.readingTime} min de lecture</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3" aria-label="Fil d'ariane">
        <div className="max-w-4xl mx-auto text-sm text-gray-500 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#1a3d6b]">
            Accueil
          </Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-[#1a3d6b]">
            Blog
          </Link>
          <span>›</span>
          <span className="text-gray-700 font-medium truncate">{post.title}</span>
        </div>
      </nav>

      {/* Article body */}
      <article className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
            {post.intro}
          </p>

          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-black text-[#1a3d6b] mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#f5b800] font-black mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-black text-[#1a3d6b] mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {post.faq.map((f, i) => (
                  <details
                    key={i}
                    className="group border border-gray-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-black text-[#1a3d6b]">
                      {f.question}
                      <span className="text-[#f5b800] group-open:rotate-45 transition-transform text-xl">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA box */}
          <div className="mt-12 bg-[#1a3d6b] rounded-2xl p-8 text-center">
            <h2 className="text-xl md:text-2xl font-black text-white mb-3">
              Besoin d&apos;un transport dans la Somme ?
            </h2>
            <p className="text-blue-100 mb-6">{post.cta}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0322930286"
                className="bg-[#f5b800] text-gray-900 font-black px-7 py-3.5 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                📞 03 22 93 02 86
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-black px-7 py-3.5 rounded-lg hover:bg-white hover:text-[#1a3d6b] transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-14 px-4 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
                >
                  <div className="relative h-44 bg-gray-200">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#1a3d6b] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-black text-gray-900 mb-2 leading-snug group-hover:text-[#1a3d6b] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 text-[#1a3d6b] font-bold text-sm">
                      Lire l&apos;article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

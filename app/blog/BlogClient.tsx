"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogCategories, type BlogPost } from "@/lib/blog-posts";

type Post = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "date" | "readingTime" | "image" | "imageAlt"
>;

const categories = blogCategories;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Blog &amp; Actualités</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Actualités, conseils et informations sur le transport de matériaux et d&apos;engins en Hauts-de-France.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-white py-8 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === cat
                  ? "bg-[#1a3d6b] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-[#1a3d6b]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#1a3d6b] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>📅 {formatDate(post.date)}</span>
                    <span>⏱️ {post.readingTime} min de lecture</span>
                  </div>
                  <h2 className="font-black text-gray-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#1a3d6b] font-bold text-sm hover:underline"
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Un besoin de transport ?</h2>
          <p className="text-gray-400 mb-8">
            Contactez notre équipe pour un devis rapide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-black px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

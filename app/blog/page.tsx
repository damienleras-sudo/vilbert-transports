import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Actualités | Transport de matériaux dans la Somme (80)",
  description:
    "Conseils et actualités sur le transport de matériaux, d'engins et de déchets dans la Somme (80) et les Hauts-de-France. Guides ampliroll, FMA, ADR, porte-engins et transport exceptionnel.",
};

export default function BlogPage() {
  return <BlogClient posts={blogPosts} />;
}

import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Actualités | Vilbert Transports",
  description:
    "Actualités, conseils et informations sur le transport de matériaux et d'engins en Hauts-de-France.",
};

const posts = [
  {
    slug: "transport-exceptionnel-europe",
    title: "Transport exceptionnel en Europe : nos autorisations et procédures",
    excerpt:
      "Comment organiser un convoi exceptionnel en dehors de la France ? Autorisations, délais, itinéraires — notre guide complet.",
    category: "Transport exceptionnel",
    date: "2025-05-10",
    readingTime: 5,
    image: "/blog/transport-exceptionnel.jpg",
  },
  {
    slug: "charte-co2-transport",
    title: "Charte Objectif CO2 : notre engagement pour le transport durable",
    excerpt:
      "Signataires de la Charte Objectif CO2, nous détaillons nos actions concrètes pour réduire l'empreinte carbone de nos livraisons.",
    category: "Environnement",
    date: "2025-04-15",
    readingTime: 4,
    image: "/blog/charte-co2.jpg",
  },
  {
    slug: "camions-euro6-flotte",
    title: "Pourquoi nous avons renouvelé notre flotte en Euro 6",
    excerpt:
      "Les normes Euro 6 représentent un saut technologique majeur. Découvrez les bénéfices concrets pour nos clients et l'environnement.",
    category: "Flotte",
    date: "2025-03-20",
    readingTime: 3,
    image: "/blog/euro6.jpg",
  },
  {
    slug: "ampliroll-benne-amovible",
    title: "Ampliroll : tout comprendre sur la benne amovible",
    excerpt:
      "Le camion ampliroll est l'outil idéal pour les chantiers BTP. Comment ça fonctionne, quand l'utiliser, quels matériaux transporter ?",
    category: "Conseils",
    date: "2025-02-28",
    readingTime: 4,
    image: "/blog/ampliroll.jpg",
  },
  {
    slug: "dashdoc-tracabilite-numerique",
    title: "DashDoc : la traçabilité numérique au service du transport",
    excerpt:
      "Fini le papier ! Avec DashDoc, nos bons de transport sont dématérialisés. Signature électronique, archivage automatique, conformité totale.",
    category: "Innovation",
    date: "2025-01-30",
    readingTime: 3,
    image: "/blog/dashdoc.jpg",
  },
  {
    slug: "porte-engins-transport-chantier",
    title: "Transport de porte-engins : comment préparer votre convoi",
    excerpt:
      "Déplacer une pelle, un bulldozer ou un compacteur nécessite une organisation rigoureuse. Nos conseils pour un transport sécurisé.",
    category: "Conseils",
    date: "2024-12-15",
    readingTime: 5,
    image: "/blog/porte-engins.jpg",
  },
];

export default function BlogPage() {
  return <BlogClient posts={posts} />;
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: {
    default: "Vilbert Transports | Transport routier — Somme (80) Hauts-de-France",
    template: "%s | Vilbert Transports",
  },
  description:
    "Vilbert Transports — camions 6x4, 8x4, ampliroll, semi TP, FMA, grue, porte-engins. Transport exceptionnel France & Europe. ADR, déchets, liquides. Somme (80) Hauts-de-France.",
  keywords: [
    "transport matériaux Somme",
    "camion benne 80",
    "transport exceptionnel Hauts-de-France",
    "ampliroll Somme",
    "porte-engins 80",
    "transport ADR Somme",
    "Vilbert Transports",
    "transporteur BTP Somme",
  ],
  metadataBase: new URL("https://www.vilbert-transports.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vilbert Transports",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vilbert Transports — Flotte de camions Somme",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SchemaOrg />
        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}

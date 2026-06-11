import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "Vilbert Transports | Transport de matériaux & engins — Hauts-de-France",
    template: "%s | Vilbert Transports",
  },
  description:
    "Vilbert Transports — flotte de camions 6x4, 8x4, ampliroll, semi TP, FMA, grue, porte-engins. Transport exceptionnel France & Europe. Somme (80), Hauts-de-France.",
  metadataBase: new URL("https://www.vilbert-transports.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vilbert Transports",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}

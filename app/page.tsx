import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vilbert Transports | Transport de matériaux & engins — Hauts-de-France",
  description:
    "Vilbert Transports : spécialiste du transport de matériaux TP et d'engins de chantier en Hauts-de-France. Flotte de camions 6x4, 8x4, ampliroll, semi TP, FMA, grue, porte-engins. Transport exceptionnel agréé France & Europe.",
};

const fleetItems = [
  {
    icon: "🚛",
    name: "6x4 Benne",
    desc: "Bennes basculantes pour transport de matériaux TP",
    href: "/parc-vehicules#6x4",
    img: "/6x4.jpg",
  },
  {
    icon: "🚚",
    name: "8x4 Benne",
    desc: "Grands volumes — remblais, granulats, terres",
    href: "/parc-vehicules#8x4",
    img: "/8x4.jpg",
  },
  {
    icon: "🔄",
    name: "Ampliroll",
    desc: "Benne amovible — déchets inertes et matériaux",
    href: "/parc-vehicules#ampliroll",
    img: "/ampliroll.jpg",
  },
  {
    icon: "🏗️",
    name: "Semi TP",
    desc: "Semi-remorque travaux publics — grands chantiers",
    href: "/parc-vehicules#semi-tp",
    img: "/semi-tp.jpg",
  },
  {
    icon: "📦",
    name: "FMA",
    desc: "Fond mouvant amovible — matières en vrac",
    href: "/parc-vehicules#fma",
    img: "/fma.jpg",
  },
  {
    icon: "🏗️",
    name: "8x4 + Grue",
    desc: "Chargement autonome — accès difficile",
    href: "/parc-vehicules#grue",
    img: "/grue.jpg",
  },
  {
    icon: "🚜",
    name: "Porte-engins",
    desc: "Transport d'engins de chantier et convois",
    href: "/parc-vehicules#porte-engins",
    img: "/porte-engins.jpg",
  },
  {
    icon: "⚠️",
    name: "Transport Exceptionnel",
    desc: "Convois exceptionnels — France & Europe, agréé",
    href: "/transport-exceptionnel",
    img: "/transport-exceptionnel.jpg",
  },
];

const services = [
  {
    icon: "🪨",
    title: "Transport de matériaux TP",
    desc: "Granulats, terres, remblais, enrobés, béton, sable — livraison sur chantier en Hauts-de-France et au-delà.",
    href: "/services#materiaux",
  },
  {
    icon: "🚜",
    title: "Transport d'engins de chantier",
    desc: "Pelleteuses, bulldozers, compacteurs, nacelles — porte-engins adaptés à tous gabarits.",
    href: "/services#engins",
  },
  {
    icon: "♻️",
    title: "Ampliroll & déchets inertes",
    desc: "Mise à disposition de bennes amovibles, collecte et transport de déchets inertes de chantier.",
    href: "/services#materiaux",
  },
  {
    icon: "🛣️",
    title: "Transport sur mesure",
    desc: "Besoin spécifique ? Notre équipe étudie chaque demande et propose une solution adaptée.",
    href: "/contact",
  },
];

const engagements = [
  {
    icon: "🌿",
    titre: "Charte Objectif CO2",
    desc: "Signataires de la Charte Objectif CO2 — engagement mesurable pour réduire nos émissions.",
  },
  {
    icon: "📡",
    titre: "Télématique embarquée",
    desc: "Tous nos camions équipés de télématique : suivi en temps réel, optimisation des tournées.",
  },
  {
    icon: "📋",
    titre: "DashDoc — Traçabilité",
    desc: "Gestion documentaire digitale avec DashDoc : bons de transport, conformité, zéro papier.",
  },
  {
    icon: "🚛",
    titre: "Flotte Euro 6",
    desc: "Camions récents aux normes Euro 6 — les moins polluants de leur catégorie.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#1a3d6b] overflow-hidden min-h-[90vh] flex items-center">
        {/* Diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              📍 Somme · Hauts-de-France · Europe
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              Transport de<br />
              <span className="text-[#f5b800]">matériaux</span><br />
              &amp; d&apos;engins
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
              Vilbert Transports met à votre disposition une flotte complète de camions spécialisés —
              6x4, 8x4, ampliroll, semi TP, FMA, grue et porte-engins.
              Agréés transport exceptionnel France &amp; Europe.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:0322930286"
                className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-xl"
              >
                📞 03 22 93 02 86
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-black px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#1a3d6b] transition-colors"
              >
                Demander un devis
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {["⏱️ Réponse rapide", "🚛 Flotte propre", "🌍 Agréé Europe"].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white text-sm font-bold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="Flotte de camions Vilbert Transports en action"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "8", label: "types de véhicules" },
              { value: "France & Europe", label: "Zone d'intervention" },
              { value: "+30 ans", label: "d'expérience" },
              { value: "Euro 6", label: "Flotte" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#f5b800] font-black text-xl md:text-2xl">{stat.value}</div>
                <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT TYPES ===== */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            Nous transportons pour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏗️",
                title: "Entreprises BTP",
                desc: "Terrassiers, maçons, routes — approvisionnement chantier, évacuation déblais, transport d'engins.",
              },
              {
                icon: "🏛️",
                title: "Collectivités & Mairies",
                desc: "Communes, intercommunalités — travaux de voirie, aménagements, entretien des espaces publics.",
              },
              {
                icon: "🌾",
                title: "Particuliers & Agriculteurs",
                desc: "Particuliers en construction, exploitants agricoles — transport de matériaux et engins agricoles.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-[#1a3d6b] transition-colors"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-black text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLEET OVERVIEW ===== */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Notre flotte de camions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              8 types de véhicules spécialisés pour répondre à tous vos besoins de transport BTP,
              de la benne classique au convoi exceptionnel.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {fleetItems.map((vehicle) => (
              <Link
                key={vehicle.name}
                href={vehicle.href}
                className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg border border-gray-100 hover:border-[#1a3d6b] transition-all"
              >
                <div className="relative h-36 bg-gray-200">
                  <Image
                    src={vehicle.img}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 text-2xl">{vehicle.icon}</div>
                </div>
                <div className="p-3">
                  <h3 className="font-black text-sm text-gray-900 mb-1">{vehicle.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{vehicle.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/parc-vehicules"
              className="inline-flex items-center gap-2 bg-[#1a3d6b] text-white font-black px-8 py-4 rounded-lg hover:bg-[#254d8a] transition-colors shadow-lg"
            >
              Voir toute notre flotte →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRANSPORT EXCEPTIONNEL BAND ===== */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="text-7xl flex-shrink-0">⚠️</div>
          <div className="flex-1">
            <div className="inline-block bg-[#1a3d6b] text-white text-xs font-black px-3 py-1 rounded mb-3 uppercase tracking-widest">
              Autorisation officielle
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Transport exceptionnel France &amp; Europe
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Vilbert Transports est agréé pour les convois exceptionnels dépassant les gabarits standards —
              poids lourds, largeur hors normes, hauteur ou longueur excessives.
              Nous intervenons sur toute la France et en Europe avec les autorisations requises.
            </p>
            <Link
              href="/transport-exceptionnel"
              className="inline-flex items-center gap-2 bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Nos services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Du transport de granulats à l&apos;acheminement d&apos;engins hors-gabarit, nous avons la solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group border-2 border-gray-100 rounded-xl p-6 hover:border-[#1a3d6b] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-black text-gray-900 mb-2 group-hover:text-[#1a3d6b] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#1a3d6b] text-[#1a3d6b] font-black px-6 py-3 rounded-lg hover:bg-[#1a3d6b] hover:text-white transition-colors"
            >
              Découvrir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENTS ===== */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Nos engagements</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              Qualité, sécurité et professionnalisme au service de vos chantiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((e) => (
              <div key={e.titre} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{e.icon}</div>
                <h3 className="font-black text-white mb-2">{e.titre}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZONE D'INTERVENTION ===== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Zone d&apos;intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Basés à Talmas (Somme), nous intervenons principalement en Hauts-de-France
              et sur toute la France &amp; l&apos;Europe pour les transports exceptionnels.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map embed desktop */}
            <div className="hidden lg:block rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.0!2d2.353!3d50.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzEyLjAiTiAywrAyMScxMC44Ikc!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Vilbert Transports — Talmas (Somme)"
              />
            </div>
            {/* Mobile: link to maps */}
            <div className="lg:hidden">
              <a
                href="https://share.google/AiI8apyJiUMyka8p9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-100 border-2 border-gray-200 rounded-xl p-8 hover:border-[#1a3d6b] transition-colors"
              >
                <span className="text-4xl">🗺️</span>
                <span className="font-black text-gray-800">Voir sur Google Maps</span>
              </a>
            </div>
            {/* Coverage info */}
            <div>
              <h3 className="font-black text-gray-900 text-xl mb-6">Zones couvertes</h3>
              <div className="space-y-4">
                {[
                  {
                    flag: "🟠",
                    zone: "Somme (80)",
                    desc: "Zone principale — intervention quotidienne sur tout le département",
                  },
                  {
                    flag: "🟠",
                    zone: "Oise (60)",
                    desc: "Intervention régulière — Beauvais, Compiègne, Senlis",
                  },
                  {
                    flag: "🟠",
                    zone: "Pas-de-Calais (62)",
                    desc: "Arras, Lens, Boulogne-sur-Mer et environs",
                  },
                  {
                    flag: "🇫🇷",
                    zone: "France entière",
                    desc: "Pour les transports exceptionnels et missions longue distance",
                  },
                  {
                    flag: "🇪🇺",
                    zone: "Europe",
                    desc: "Convois exceptionnels transfrontaliers — autorisations en règle",
                  },
                ].map((z) => (
                  <div key={z.zone} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-xl flex-shrink-0">{z.flag}</span>
                    <div>
                      <div className="font-black text-gray-900">{z.zone}</div>
                      <div className="text-gray-500 text-sm">{z.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-[#f5b800] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Votre transport commence ici
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Contactez notre équipe pour un devis rapide — nous répondons dans la journée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322930286"
              className="bg-gray-900 text-white font-black px-10 py-4 rounded-lg text-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-black px-10 py-4 rounded-lg text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

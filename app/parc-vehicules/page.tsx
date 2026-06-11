import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parc de véhicules — Flotte de camions spécialisés",
  description:
    "Découvrez la flotte Vilbert Transports : 6x4 benne, 8x4 benne, ampliroll, semi TP, FMA fond mouvant, 8x4 avec grue, porte-engins, transport exceptionnel. Tous les véhicules pour vos chantiers BTP.",
};

const vehicles = [
  {
    id: "6x4",
    icon: "🚛",
    name: "6x4 Benne basculante",
    img: "/6x4.jpg",
    desc: "Le 6x4 benne est le cheval de bataille du transport de matériaux TP. Sa benne basculante permet le déchargement rapide sur chantier, sans équipement supplémentaire.",
    useCases: [
      "Transport de granulats (gravier, sable, tout-venant)",
      "Livraison de remblais et terres",
      "Évacuation de déblais",
      "Approvisionnement chantier en béton recyclé",
      "Transport d'enrobés",
    ],
    specs: [
      { label: "PTAC", value: "26 tonnes" },
      { label: "Charge utile", value: "≈ 16 t" },
      { label: "Volume benne", value: "10 à 14 m³" },
      { label: "Déchargement", value: "Benne hydraulique" },
      { label: "Usage principal", value: "Matériaux TP" },
    ],
  },
  {
    id: "8x4",
    icon: "🚚",
    name: "8x4 Benne (porteur)",
    img: "/fleet.jpg",
    desc: "Plus grand que le 6x4, le porteur 8x4 benne offre une charge utile et un volume supérieurs. Idéal pour les chantiers nécessitant de gros volumes en une seule rotation.",
    useCases: [
      "Grands volumes de granulats",
      "Remblais importants",
      "Livraison de sable et gravillons",
      "Évacuation de terres en grande quantité",
      "Tout-venant et matériaux de carrière",
    ],
    specs: [
      { label: "PTAC", value: "32 tonnes" },
      { label: "Charge utile", value: "≈ 20 t" },
      { label: "Volume benne", value: "14 à 18 m³" },
      { label: "Déchargement", value: "Benne hydraulique" },
      { label: "Usage principal", value: "Gros volumes" },
    ],
  },
  {
    id: "ampliroll",
    icon: "🔄",
    name: "Camion ampliroll",
    img: "/transport-enrobe.jpg",
    desc: "Le camion ampliroll (ou multilift) est équipé d'un système de bras ampliroll permettant de déposer, récupérer et échanger des bennes amovibles sans manipulation manuelle.",
    useCases: [
      "Mise à disposition de bennes sur chantier",
      "Collecte de déchets inertes (gravats, béton)",
      "Rotation de bennes selon remplissage",
      "Transport de conteneurs spéciaux",
      "Collecte décombres et démolition",
    ],
    specs: [
      { label: "PTAC", value: "26 à 32 tonnes" },
      { label: "Charge utile", value: "≈ 14 à 18 t" },
      { label: "Volume benne", value: "10 à 20 m³ (variable)" },
      { label: "Système", value: "Ampliroll (bras hydraulique)" },
      { label: "Usage principal", value: "Bennes amovibles" },
    ],
  },
  {
    id: "semi-tp",
    icon: "🏗️",
    name: "Semi-remorque TP",
    img: "/semi-tp.jpg",
    desc: "La semi-remorque travaux publics est la solution pour les grands chantiers nécessitant des volumes importants ou des distances longues. Combinée à un tracteur routier, elle offre une capacité maximale.",
    useCases: [
      "Grands chantiers TP longue distance",
      "Transport de matériaux en grande quantité",
      "Carrières et mines (matériaux en vrac)",
      "Chantiers autoroutiers",
      "Approvisionnement massif",
    ],
    specs: [
      { label: "PTAC semi", value: "44 tonnes" },
      { label: "Charge utile", value: "≈ 28 t" },
      { label: "Volume", value: "≈ 24 à 30 m³" },
      { label: "Déchargement", value: "Benne ou fond poussant" },
      { label: "Usage principal", value: "Grands volumes longue distance" },
    ],
  },
  {
    id: "fma",
    icon: "📦",
    name: "FMA — Fond Mouvant Amovible",
    img: "/fma.jpg",
    desc: "Le FMA (Fond Mouvant Amovible) est un système de déchargement par tapis ou chaînes intégrés au plancher de la remorque. Il permet le déchargement de matières en vrac sans basculement.",
    useCases: [
      "Matières en vrac (compost, copeaux, paillettes)",
      "Céréales et produits agricoles",
      "Déchets végétaux et biomasse",
      "Produits difficiles à décharger par benne",
      "Chantiers avec accès hauteur limité",
    ],
    specs: [
      { label: "PTAC", value: "44 tonnes (semi)" },
      { label: "Charge utile", value: "≈ 25 t" },
      { label: "Volume", value: "≈ 90 m³ (variable)" },
      { label: "Déchargement", value: "Fond mouvant (tapis/chaînes)" },
      { label: "Usage principal", value: "Vrac, biomasse, agricole" },
    ],
  },
  {
    id: "grue",
    icon: "🏗️",
    name: "8x4 avec grue auxiliaire",
    img: "/8x4-grue.jpg",
    desc: "Le porteur 8x4 équipé d'une grue auxiliaire offre l'autonomie de chargement/déchargement. Idéal pour les livraisons sur des sites sans engin de manutention ou d'accès difficile.",
    useCases: [
      "Livraison sur sites sans grue fixe",
      "Chargement/déchargement autonome",
      "Zones d'accès difficile",
      "Matériaux lourds unitaires",
      "Chantiers isolés ou particuliers",
    ],
    specs: [
      { label: "PTAC", value: "32 tonnes" },
      { label: "Charge utile", value: "≈ 14 à 16 t (grue déduit)" },
      { label: "Portée grue", value: "Jusqu'à 12 à 20 m" },
      { label: "Capacité grue", value: "Selon équipement" },
      { label: "Usage principal", value: "Chargement autonome" },
    ],
  },
  {
    id: "porte-engins",
    icon: "🚜",
    name: "Porte-engins",
    img: "/porte-engins.jpg",
    desc: "Le porte-engins est spécialement conçu pour le transport d'engins de chantier. Sa plateforme surbaissée facilite le chargement par les propres moyens des engins et garantit une hauteur totale maîtrisée.",
    useCases: [
      "Pelleteuses et pelles hydrauliques",
      "Bulldozers et niveleuses",
      "Compacteurs et rouleaux",
      "Chargeuses et télescopiques",
      "Nacelles et plates-formes élévatrices",
      "Engins agricoles (tracteurs, moissonneuses)",
    ],
    specs: [
      { label: "PTAC", value: "44 tonnes (semi + tracteur)" },
      { label: "Charge utile", value: "≈ 30 t" },
      { label: "Plateau", value: "Surbaissé, rampes" },
      { label: "Longueur plateau", value: "7 à 13 m" },
      { label: "Usage principal", value: "Engins de chantier" },
    ],
  },
];

export default function ParcVehiculesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Notre parc de véhicules
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            7 types de camions spécialisés pour répondre à tous vos besoins de transport BTP.
            Flotte régulièrement renouvelée, entretenue et conforme.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {vehicles.map((v) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="bg-white/10 border border-white/20 text-white text-sm font-bold px-3 py-1.5 rounded-full hover:bg-white hover:text-[#1a3d6b] transition-colors"
              >
                {v.icon} {v.name.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {vehicles.map((v, i) => (
            <div
              key={v.id}
              id={v.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-start scroll-mt-24`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-72 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={v.img}
                  alt={v.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1a3d6b] text-white text-2xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  {v.icon}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">{v.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{v.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Use cases */}
                  <div>
                    <h3 className="text-xs font-black text-[#1a3d6b] uppercase tracking-widest mb-3">
                      Utilisations
                    </h3>
                    <ul className="space-y-1.5">
                      {v.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#1a3d6b] flex-shrink-0 mt-0.5">✓</span>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div>
                    <h3 className="text-xs font-black text-[#1a3d6b] uppercase tracking-widest mb-3">
                      Caractéristiques
                    </h3>
                    <div className="space-y-2">
                      {v.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between text-sm border-b border-gray-100 pb-1">
                          <span className="text-gray-500">{spec.label}</span>
                          <span className="font-bold text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="tel:0322930286"
                  className="inline-flex items-center gap-2 bg-[#1a3d6b] text-white font-black px-6 py-3 rounded-lg hover:bg-[#254d8a] transition-colors"
                >
                  📞 Demander un devis
                </a>
              </div>
            </div>
          ))}

          {/* ADR & Citernes */}
          <div id="adr" className="bg-[#1a3d6b] rounded-2xl p-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl flex-shrink-0">🏭</div>
              <div>
                <div className="inline-block bg-white/20 text-white text-xs font-black px-3 py-1 rounded mb-3 uppercase tracking-widest">
                  Habilitation ADR
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Citernes & Transport ADR</h2>
                <p className="text-blue-200 mb-4 leading-relaxed">
                  Vilbert Transports dispose de véhicules équipés pour le transport de liquides industriels,
                  produits pâteux et matières dangereuses classées ADR. Tous nos chauffeurs concernés sont
                  titulaires de l&apos;habilitation ADR en cours de validité.
                  Nos chauffeurs sont également tous titulaires de l&apos;AIPR (Autorisation d&apos;Intervention
                  à Proximité des Réseaux).
                </p>
                <div className="flex flex-wrap gap-2">
                  {["⚠️ Chauffeurs ADR habilités", "🦺 Chauffeurs AIPR", "🏭 Liquides industriels", "♻️ Agrément déchets"].map((badge) => (
                    <span key={badge} className="bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Transport exceptionnel */}
          <div id="transport-exceptionnel" className="bg-gray-900 rounded-2xl p-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl flex-shrink-0">⚠️</div>
              <div>
                <div className="inline-block bg-[#1a3d6b] text-white text-xs font-black px-3 py-1 rounded mb-3 uppercase tracking-widest">
                  Autorisation officielle
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Transport Exceptionnel</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Vilbert Transports est agréé pour les convois exceptionnels.
                  Nous gérons les autorisations et l&apos;escorte pour toute la France et l&apos;Europe.
                </p>
                <Link
                  href="/transport-exceptionnel"
                  className="inline-flex items-center gap-2 bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Voir la page dédiée →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3d6b] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Quel véhicule pour votre besoin ?</h2>
          <p className="text-blue-200 mb-6">
            Notre équipe vous conseille sur le bon véhicule selon votre chargement, votre accès et votre budget.
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
              className="border-2 border-white text-white font-black px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a3d6b] transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

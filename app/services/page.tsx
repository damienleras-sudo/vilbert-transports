import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services de transport BTP — matériaux, engins, ampliroll",
  description:
    "Vilbert Transports : transport de matériaux TP (granulats, terres, remblais), transport d'engins de chantier, ampliroll, transport exceptionnel, location de camion avec chauffeur en Hauts-de-France.",
};

const services = [
  {
    id: "materiaux",
    icon: "🪨",
    title: "Transport de matériaux",
    subtitle: "Granulats, terres, remblais, enrobés",
    desc: "Notre flotte de camions benne 6x4 et 8x4 assure la livraison et l'évacuation de tous types de matériaux de travaux publics sur vos chantiers en Hauts-de-France et au-delà.",
    details: [
      "Granulats (gravier, sable, tout-venant)",
      "Terres et remblais (clean fill, déblais de fouille)",
      "Enrobés et matériaux de voirie",
      "Béton recyclé, grave-ciment",
      "Déchets inertes (évacuation chantier)",
      "Matériaux agricoles (amendements, compost)",
    ],
    vehicles: ["6x4 Benne", "8x4 Benne", "Semi TP", "FMA"],
    cta: "/parc-vehicules#6x4",
  },
  {
    id: "engins",
    icon: "🚜",
    title: "Transport d'engins de chantier",
    subtitle: "Pelleteuses, bulldozers, compacteurs, nacelles",
    desc: "Notre service porte-engins permet l'acheminement sécurisé de tous vos engins de chantier sur n'importe quel site. Sangles, cales et équipements de sécurité inclus.",
    details: [
      "Pelleteuses et pelles hydrauliques",
      "Bulldozers et niveleuses",
      "Compacteurs et rouleaux",
      "Nacelles et engins de levage",
      "Chargeurs et télescopiques",
      "Mini-pelles et équipements légers",
    ],
    vehicles: ["Porte-engins", "Semi TP"],
    cta: "/parc-vehicules#porte-engins",
  },
  {
    id: "ampliroll",
    icon: "♻️",
    title: "Ampliroll & déchets inertes",
    subtitle: "Bennes amovibles — inertes et gravats",
    desc: "Notre camion ampliroll permet la mise à disposition de bennes amovibles sur vos chantiers pour la collecte de déchets inertes (gravats, béton, céramique, briques) et leur transport vers les filières agréées.",
    details: [
      "Mise à disposition de benne amovible",
      "Collecte gravats et béton cassé",
      "Transport céramiques et briques",
      "Déchets de démolition inertes",
      "Rotation benne selon remplissage",
      "Destination filières agréées",
    ],
    vehicles: ["Ampliroll"],
    cta: "/parc-vehicules#ampliroll",
  },
  {
    id: "exceptionnel",
    icon: "⚠️",
    title: "Transport exceptionnel",
    subtitle: "Convois hors-gabarit — France & Europe",
    desc: "Vilbert Transports est agréé pour les convois exceptionnels dépassant les gabarits légaux. Nous gérons l'ensemble des démarches administratives et l'escorte si nécessaire.",
    details: [
      "Poids total > 19 tonnes",
      "Largeur > 2,55 m",
      "Hauteur > 4 m",
      "Longueur > 18,75 m",
      "Autorisations France & Europe",
      "Escorte et signalisation",
    ],
    vehicles: ["Porte-engins semi", "Véhicules spéciaux"],
    cta: "/transport-exceptionnel",
  },
  {
    id: "location",
    icon: "🤝",
    title: "Location avec chauffeur",
    subtitle: "Mise à disposition de camion + conducteur",
    desc: "Besoin d'un chauffeur poids lourd et de son camion pour une mission précise ? Nous proposons la location de véhicules avec chauffeur qualifié pour vos besoins ponctuels ou réguliers.",
    details: [
      "Chauffeur qualifié et expérimenté",
      "Tous types de véhicules disponibles",
      "Mission courte ou longue durée",
      "Facturation à la tâche ou au temps",
      "Camions récents et entretenus",
      "Disponibilité rapide",
    ],
    vehicles: ["Tous véhicules de la flotte"],
    cta: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Hauts-de-France · France · Europe
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Nos services de transport
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Du transport de granulats à l&apos;acheminement d&apos;engins hors-gabarit,
            Vilbert Transports couvre tous vos besoins BTP.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-start`}
            >
              <div className="flex-1">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-black text-gray-900 mb-1">{service.title}</h2>
                <p className="text-[#1a3d6b] font-bold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.vehicles.map((v) => (
                    <span
                      key={v}
                      className="bg-blue-50 text-[#1a3d6b] text-xs font-bold px-3 py-1 rounded-full border border-blue-200"
                    >
                      🚛 {v}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.cta}
                  className="inline-flex items-center gap-2 bg-[#1a3d6b] text-white font-black px-6 py-3 rounded-lg hover:bg-[#254d8a] transition-colors"
                >
                  En savoir plus →
                </Link>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-widest">
                  Ce que nous transportons
                </h3>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#1a3d6b] mt-0.5 flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Besoin d&apos;un service sur mesure ?
          </h2>
          <p className="text-gray-400 mb-8">
            Chaque chantier est unique. Contactez notre équipe pour étudier votre besoin.
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
    </>
  );
}

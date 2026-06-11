import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réalisations — Nos chantiers de transport en Hauts-de-France",
  description:
    "Découvrez les réalisations de Vilbert Transports : transport de matériaux, transport d'engins de chantier, convois exceptionnels en Somme et Hauts-de-France.",
};

const categories = [
  {
    id: "materiaux",
    label: "Transport matériaux",
    icon: "🪨",
    color: "bg-blue-100 text-[#1a3d6b]",
  },
  {
    id: "engins",
    label: "Transport engins",
    icon: "🚜",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "exceptionnel",
    label: "Convois exceptionnels",
    icon: "⚠️",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const realisations = [
  {
    id: 1,
    title: "Transport d'engins de chantier — terrassement",
    category: "engins",
    location: "Somme (80)",
    desc: "Acheminement d'engins de terrassement sur chantier BTP. Transport sécurisé sur porte-engins surbaissé avec sangles homologuées.",
    img: "/transport-engins.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 2,
    title: "Convoi exceptionnel — équipement industriel",
    category: "exceptionnel",
    location: "Hauts-de-France → Normandie",
    desc: "Transport d'un équipement industriel hors-gabarit avec autorisation préfectorale et voiture-pilote. Trajet de nuit réglementé.",
    img: "/transport-exceptionnel.jpg",
    vehicle: "Semi exceptionnel",
  },
  {
    id: 3,
    title: "Transport porte-engins — pelleteuse 20T",
    category: "engins",
    location: "Pas-de-Calais (62)",
    desc: "Acheminement d'une pelle hydraulique depuis le dépôt du client jusqu'au chantier, sur porte-engins surbaissé.",
    img: "/porte-engins.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 4,
    title: "Livraison semi TP — chantier autoroutier",
    category: "materiaux",
    location: "Somme (80)",
    desc: "Transport de matériaux en grande quantité pour approvisionnement d'un chantier autoroutier. Semi-remorque TP en rotations continues.",
    img: "/semi-tp.jpg",
    vehicle: "Semi TP",
  },
  {
    id: 5,
    title: "Transport FMA — biomasse et vrac",
    category: "materiaux",
    location: "Oise (60)",
    desc: "Transport de matières en vrac sur fond mouvant amovible. Déchargement sans basculement grâce au tapis intégré.",
    img: "/fma.jpg",
    vehicle: "FMA",
  },
  {
    id: 6,
    title: "Transport agricole — matériel de récolte",
    category: "engins",
    location: "Somme (80)",
    desc: "Acheminement de matériel agricole (tracteurs, équipements de récolte) d'un site de stockage vers l'exploitation.",
    img: "/transport-agricole.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 7,
    title: "Transport machine industrielle",
    category: "engins",
    location: "Nord (59)",
    desc: "Transport d'une machine industrielle lourde. Chargement autonome grâce à la grue auxiliaire embarquée.",
    img: "/transport-machine.jpg",
    vehicle: "8x4 Grue",
  },
  {
    id: 8,
    title: "Transport de tracteur — déménagement agricole",
    category: "engins",
    location: "Somme (80)",
    desc: "Transport d'un tracteur agricole entre deux exploitations. Manutention soigneuse et sécurisation du chargement.",
    img: "/transport-tracteur.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 9,
    title: "Convoi exceptionnel — cuve industrielle",
    category: "exceptionnel",
    location: "France → Belgique",
    desc: "Transport d'une cuve industrielle hors-gabarit. Coordination avec les autorités pour les autorisations transfrontalières.",
    img: "/transport-exceptionnel-cuve.jpg",
    vehicle: "Convoi spécial",
  },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Nos réalisations
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Quelques exemples de nos missions de transport en Hauts-de-France et au-delà.
            Chaque chantier est unique, chaque solution est sur mesure.
          </p>
        </div>
      </section>

      {/* Category filters (display only) */}
      <section className="bg-white py-8 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${cat.color}`}
            >
              {cat.icon} {cat.label}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((real) => {
              const cat = categories.find((c) => c.id === real.category);
              return (
                <div
                  key={real.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-gray-200">
                    <Image
                      src={real.img}
                      alt={real.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {/* Category badge */}
                    {cat && (
                      <span
                        className={`absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${cat.color}`}
                      >
                        {cat.icon} {cat.label}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 font-bold">📍 {real.location}</span>
                      <span className="text-xs text-[#1a3d6b] font-bold bg-blue-50 px-2 py-0.5 rounded">
                        {real.vehicle}
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{real.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{real.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Votre projet de transport
          </h2>
          <p className="text-gray-400 mb-8">
            Vous avez un chantier à approvisionner ou des engins à déplacer ?
            Contactez notre équipe pour étudier votre besoin.
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

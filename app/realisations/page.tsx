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
    color: "bg-orange-100 text-[#b5451b]",
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
    title: "Approvisionnement chantier autoroutier A29",
    category: "materiaux",
    location: "Somme (80)",
    desc: "Transport de granulats et matériaux de voirie pour renforcement de la structure autoroutière. Plusieurs dizaines de rotations effectuées sur plusieurs semaines.",
    img: "/realisations/real-01.jpg",
    vehicle: "8x4 Benne",
  },
  {
    id: 2,
    title: "Transport de pelleteuse — chantier privé",
    category: "engins",
    location: "Pas-de-Calais (62)",
    desc: "Acheminement d'une pelle hydraulique 20T depuis le dépôt du client jusqu'au chantier, sur porte-engins surbaissé avec sangles homologuées.",
    img: "/realisations/real-02.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 3,
    title: "Convoi exceptionnel — structure métallique",
    category: "exceptionnel",
    location: "Hauts-de-France → Normandie",
    desc: "Transport d'une charpente métallique hors-gabarit (largeur 4,2m) avec autorisation préfectorale et voiture-pilote. Trajet de nuit réglementé.",
    img: "/realisations/real-03.jpg",
    vehicle: "Semi exceptionnel",
  },
  {
    id: 4,
    title: "Évacuation déblais — lotissement",
    category: "materiaux",
    location: "Oise (60)",
    desc: "Évacuation de terres et déblais issus des fondations d'un lotissement résidentiel. Ampliroll et 6x4 en rotation sur 3 semaines.",
    img: "/realisations/real-04.jpg",
    vehicle: "6x4 Benne + Ampliroll",
  },
  {
    id: 5,
    title: "Transport compacteur — travaux de voirie",
    category: "engins",
    location: "Somme (80)",
    desc: "Mise à disposition d'un compacteur à une commune pour travaux de réfection de voirie communale. Transport aller-retour.",
    img: "/realisations/real-05.jpg",
    vehicle: "Porte-engins",
  },
  {
    id: 6,
    title: "Livraison enrobés — RD 1001",
    category: "materiaux",
    location: "Somme (80)",
    desc: "Approvisionnement de chantier de réfection de route départementale. Coordination avec le poste d'enrobage et le poseur.",
    img: "/realisations/real-06.jpg",
    vehicle: "Semi TP",
  },
  {
    id: 7,
    title: "Convoi nacelle télescopique — chantier industriel",
    category: "engins",
    location: "Nord (59)",
    desc: "Transport d'une nacelle télescopique 45m sur remorque surbaissée. Hauteur totale 4,2m — autorisation de transport exceptionnel requise.",
    img: "/realisations/real-07.jpg",
    vehicle: "Porte-engins semi",
  },
  {
    id: 8,
    title: "Transport ampliroll — démolition",
    category: "materiaux",
    location: "Somme (80)",
    desc: "Mise à disposition de bennes ampliroll sur chantier de démolition. Rotation quotidienne pendant 2 semaines pour évacuation des déchets inertes.",
    img: "/realisations/real-08.jpg",
    vehicle: "Ampliroll",
  },
  {
    id: 9,
    title: "Convoi exceptionnel international",
    category: "exceptionnel",
    location: "France → Belgique",
    desc: "Transport transfrontalier d'un équipement industriel. Coordination avec les autorités belges pour les autorisations, escorte des deux côtés de la frontière.",
    img: "/realisations/real-09.jpg",
    vehicle: "Convoi spécial",
  },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#b5451b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Nos réalisations
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
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
                      <span className="text-xs text-[#b5451b] font-bold bg-orange-50 px-2 py-0.5 rounded">
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

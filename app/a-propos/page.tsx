import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Vilbert Transports, filiale du Groupe Vilbert",
  description:
    "Découvrez l'histoire de Vilbert Transports, spécialiste du transport TP en Hauts-de-France depuis plus de 30 ans. Membre du Groupe Vilbert aux côtés de Vilbert TP, Vilbert Hydro et Vilbert Recyclage.",
};

const stats = [
  { value: "30+", label: "ans d'expérience" },
  { value: "7", label: "types de véhicules" },
  { value: "4", label: "filiales Groupe Vilbert" },
  { value: "Euro 6", label: "Flotte" },
];

const certifications = [
  {
    icon: "🌿",
    title: "Charte Objectif CO2",
    desc: "Signataires de la Charte Objectif CO2 — engagement mesurable pour réduire nos émissions de transport.",
  },
  {
    icon: "📡",
    title: "Télématique embarquée",
    desc: "Tous nos camions équipés de télématique : suivi en temps réel, optimisation des tournées et réduction des trajets à vide.",
  },
  {
    icon: "🚛",
    title: "Transport exceptionnel",
    desc: "Autorisations officielles pour les convois exceptionnels en France et en Europe.",
  },
  {
    icon: "⚠️",
    title: "Transport ADR habilité",
    desc: "Habilitation pour le transport de matières dangereuses (ADR) — chauffeurs certifiés et véhicules équipés.",
  },
  {
    icon: "♻️",
    title: "Agrément transport de déchets",
    desc: "Agrément préfectoral pour le transport de déchets par route — déchets inertes, industriels non dangereux et DIS.",
  },
  {
    icon: "🦺",
    title: "Chauffeurs AIPR",
    desc: "Tous nos chauffeurs sont titulaires de l'AIPR (Autorisation d'Intervention à Proximité des Réseaux).",
  },
];

const filiales = [
  {
    name: "Vilbert TP",
    desc: "Travaux publics — terrassement, VRD, réseaux, voirie",
    href: "https://www.vilbert-tp.fr",
    icon: "🏗️",
  },
  {
    name: "Vilbert Hydro",
    desc: "Hydrocurage, nettoyage industriel, pompage",
    href: "https://www.vilbert-hydro.fr",
    icon: "💧",
  },
  {
    name: "Vilbert Recyclage",
    desc: "Valorisation et recyclage de matériaux inertes",
    href: "https://www.vilbert-recyclage.fr",
    icon: "♻️",
  },
  {
    name: "Groupe Vilbert",
    desc: "Holding du groupe — coordination des filiales",
    href: "https://www.groupe-vilbert.fr",
    icon: "🏢",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">À propos de nous</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Vilbert Transports — spécialiste du transport de matériaux et d&apos;engins
            en Hauts-de-France depuis plus de 30 ans.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[#f5b800] font-black text-3xl md:text-4xl mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Implantée à Talmas dans la Somme, Vilbert Transports est une entreprise familiale
                  fondée il y a plus de 30 ans. Depuis ses débuts, la société s&apos;est spécialisée dans
                  le transport de matériaux de travaux publics et l&apos;acheminement d&apos;engins de chantier.
                </p>
                <p>
                  Au fil des années, nous avons développé une flotte complète et diversifiée pour
                  répondre aux besoins croissants de nos clients : entreprises BTP, collectivités,
                  agriculteurs et particuliers de toute la région Hauts-de-France.
                </p>
                <p>
                  Aujourd&apos;hui, Vilbert Transports fait partie intégrante du <strong>Groupe Vilbert</strong>,
                  groupe familial picard qui regroupe quatre filiales complémentaires dans les métiers
                  des travaux publics, du transport, du recyclage et des services industriels.
                </p>
                <p>
                  Notre agrément transport exceptionnel nous permet d&apos;intervenir sur toute la France
                  et en Europe pour les convois hors-gabarit, positionnant Vilbert Transports comme
                  un acteur incontournable du transport spécialisé dans les Hauts-de-France.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: "1990s", event: "Création de Vilbert Transports à Talmas (Somme)" },
                { year: "2000s", event: "Développement de la flotte — ajout des porteurs 8x4 et ampliroll" },
                { year: "2010s", event: "Obtention des autorisations transport exceptionnel France & Europe" },
                { year: "2015", event: "Intégration au Groupe Vilbert — synergie avec les filiales TP et Hydro" },
                { year: "2020s", event: "Renouvellement de flotte — véhicules normes Euro 6, télématique embarquée et DashDoc" },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <div className="bg-[#1a3d6b] text-white text-xs font-black px-3 py-1.5 rounded-lg flex-shrink-0 min-w-16 text-center">
                    {item.year}
                  </div>
                  <p className="text-gray-600 text-sm pt-1 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10">
            Certifications &amp; engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#1a3d6b] transition-colors"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤝", title: "Proximité", desc: "Une équipe locale, disponible et à l'écoute de vos besoins." },
              { icon: "⚡", title: "Réactivité", desc: "Réponse rapide aux demandes, délais respectés." },
              { icon: "🔒", title: "Fiabilité", desc: "Flotte entretenue, chauffeurs professionnels." },
              { icon: "🌍", title: "Responsabilité", desc: "Engagement environnemental et sécurité au travail." },
            ].map((v) => (
              <div key={v.title} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-black text-white mb-2">{v.title}</h3>
                <p className="text-blue-200 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groupe Vilbert */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Le Groupe Vilbert</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vilbert Transports fait partie d&apos;un groupe familial picard aux expertises complémentaires
              dans les travaux publics et les services à l&apos;industrie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filiales.map((f) => (
              <a
                key={f.name}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-100 rounded-xl p-5 hover:border-[#1a3d6b] hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-black text-gray-900 mb-1 group-hover:text-[#1a3d6b] transition-colors">
                  {f.name} ↗
                </h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Travaillons ensemble</h2>
          <p className="text-gray-400 mb-8">
            Faites confiance à 30 ans d&apos;expertise dans le transport BTP en Hauts-de-France.
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
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

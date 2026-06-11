import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transport Exceptionnel — Convois hors-gabarit France & Europe",
  description:
    "Vilbert Transports est agréé transport exceptionnel en France et Europe. Convois hors-gabarit, poids lourds, largeur > 2,55m, hauteur > 4m. Gestion des autorisations et escorte. Devis rapide.",
};

const criteria = [
  { icon: "⚖️", label: "Poids", value: "PTAC > 48 t ou essieu > limites légales" },
  { icon: "↔️", label: "Largeur", value: "> 2,55 m" },
  { icon: "↕️", label: "Hauteur", value: "> 4,00 m" },
  { icon: "↔️", label: "Longueur", value: "> 18,75 m (véhicule seul)" },
];

const loadTypes = [
  { icon: "🏗️", label: "Charpentes métalliques et poutres" },
  { icon: "🔩", label: "Équipements industriels hors-normes" },
  { icon: "🚜", label: "Engins de chantier volumineux" },
  { icon: "🏠", label: "Maisons préfabriquées et modules" },
  { icon: "⚡", label: "Éoliennes et composants énergétiques" },
  { icon: "🛢️", label: "Réservoirs et cuves industrielles" },
  { icon: "🚢", label: "Composants portuaires et maritimes" },
  { icon: "🌉", label: "Éléments de pont et génie civil" },
];

const steps = [
  {
    num: "01",
    title: "Contactez-nous",
    desc: "Décrivez votre besoin : dimensions, poids, point de départ, destination, délais.",
  },
  {
    num: "02",
    title: "Étude de faisabilité",
    desc: "Nos équipes étudient le tracé, les contraintes de hauteur (ponts, lignes) et les accès.",
  },
  {
    num: "03",
    title: "Demande d'autorisation",
    desc: "Nous déposons les demandes auprès des préfectures concernées (France) ou autorités compétentes (Europe).",
  },
  {
    num: "04",
    title: "Planification et escorte",
    desc: "Organisation du convoi, véhicules d'accompagnement, horaires imposés et itinéraire validé.",
  },
  {
    num: "05",
    title: "Réalisation du convoi",
    desc: "Transport sécurisé par nos chauffeurs expérimentés dans les règles de l'art.",
  },
];

const faqs = [
  {
    q: "Quels pays couvrez-vous en transport exceptionnel ?",
    a: "Nous intervenons principalement en France métropolitaine et dans les pays de l'Union Européenne. Chaque pays ayant sa propre réglementation, nous gérons les démarches administratives spécifiques à chaque État traversé.",
  },
  {
    q: "Combien de temps prend l'obtention des autorisations ?",
    a: "En France, les délais varient selon le type d'autorisation : de 5 jours ouvrés pour une autorisation individuelle simple, à plusieurs semaines pour des convois complexes multi-départements. Anticipez vos besoins au maximum.",
  },
  {
    q: "L'escorte est-elle obligatoire ?",
    a: "L'escorte dépend des caractéristiques du convoi. À partir de certains gabarits (largeur > 3m, longueur > 25m, etc.), une ou plusieurs voitures-pilotes sont obligatoires. Pour les convois les plus exceptionnels, une escorte de police peut être requise.",
  },
  {
    q: "Quels horaires pour les convois exceptionnels ?",
    a: "Les convois exceptionnels circulent généralement la nuit ou aux heures creuses, selon les arrêtés préfectoraux. Les horaires précis sont définis dans l'autorisation délivrée.",
  },
  {
    q: "Puis-je transporter un engin de chantier hors-gabarit ?",
    a: "Oui, c'est notre spécialité. Engins larges, très hauts ou très lourds — nous étudions chaque cas et choisissons le véhicule adapté (porte-engins surbaissé, plateau extensible, etc.).",
  },
];

export default function TransportExceptionnelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#1a3d6b] text-white text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            ⚠️ Autorisation officielle France &amp; Europe
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            Transport exceptionnel
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Convois hors-gabarit, charges lourdes, dimensions hors-normes.
            Vilbert Transports gère l&apos;ensemble de votre transport exceptionnel,
            des autorisations à la livraison.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-xl"
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

      {/* What is exceptional transport */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Qu&apos;est-ce qu&apos;un transport exceptionnel ?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Un transport exceptionnel est un convoi qui dépasse les limites légales de gabarit ou de poids
                fixées par la réglementation française et européenne. Ce type de transport nécessite des
                autorisations spéciales délivrées par les autorités compétentes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chez Vilbert Transports, nous prenons en charge l&apos;intégralité des démarches :
                étude de faisabilité, demande d&apos;autorisation, organisation de l&apos;escorte et réalisation du convoi
                par des chauffeurs spécialement formés.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {criteria.map((c) => (
                <div key={c.label} className="bg-gray-50 border-2 border-gray-100 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <div className="font-black text-gray-900 mb-1">{c.label}</div>
                  <div className="text-sm text-[#1a3d6b] font-bold">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our authorizations */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            Nos autorisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h3 className="font-black text-white text-xl mb-3">France entière</h3>
              <p className="text-blue-200 leading-relaxed">
                Autorisations préfectorales pour tous les départements français.
                Nous gérons les demandes multi-départements pour les longs trajets.
                Escorte et signalisation conformes à la réglementation française.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <div className="text-4xl mb-4">🇪🇺</div>
              <h3 className="font-black text-white text-xl mb-3">Europe</h3>
              <p className="text-blue-200 leading-relaxed">
                Convois transfrontaliers en Europe. Maîtrise des réglementations
                des pays limitrophes (Belgique, Luxembourg, Allemagne, etc.).
                Gestion des autorisations pays par pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Load types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-4">
            Ce que nous transportons
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Du matériel industriel aux structures de génie civil, nous avons l&apos;expérience
            des charges les plus atypiques.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loadTypes.map((l) => (
              <div key={l.label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl mb-2">{l.icon}</div>
                <p className="text-sm font-bold text-gray-800">{l.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10">
            Comment ça fonctionne ?
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="bg-[#1a3d6b] text-white font-black text-lg w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  {step.num}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-black text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-[#1a3d6b] flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Un convoi exceptionnel à planifier ?
          </h2>
          <p className="text-gray-400 mb-8">
            Contactez notre équipe dès maintenant. Nous étudions votre dossier et vous répondons rapidement.
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

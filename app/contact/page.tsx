import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Devis transport matériaux & engins",
  description:
    "Contactez Vilbert Transports pour un devis de transport de matériaux ou d'engins en Hauts-de-France. Tél : 03 22 93 02 86 — tp@groupe-vilbert.fr — Ruelle Mayeux, 80260 Talmas.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d6b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Contactez-nous</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Besoin d&apos;un devis ou d&apos;une information ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Demande de devis</h2>
            <form
              action="mailto:tp@groupe-vilbert.fr"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-bold text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="societe" className="block text-sm font-bold text-gray-700 mb-1">
                    Société
                  </label>
                  <input
                    type="text"
                    id="societe"
                    name="societe"
                    placeholder="Nom de votre société"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.fr"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-bold text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="06 xx xx xx xx"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-1">
                  Type de prestation
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors bg-white"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="materiaux">Transport de matériaux</option>
                  <option value="engins">Transport d&apos;engins</option>
                  <option value="ampliroll">Ampliroll / déchets inertes</option>
                  <option value="adr">Transport ADR & liquides industriels</option>
                  <option value="dechets">Transport de déchets (agrément préfectoral)</option>
                  <option value="exceptionnel">Transport exceptionnel</option>
                  <option value="location">Location avec chauffeur</option>
                  <option value="autre">Autre / À préciser</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Décrivez votre besoin : nature du chargement, poids estimé, point de départ, destination, délais souhaités..."
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#1a3d6b] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a3d6b] text-white font-black py-4 px-8 rounded-lg hover:bg-[#254d8a] transition-colors text-lg shadow-lg"
              >
                Envoyer ma demande
              </button>

              <p className="text-xs text-gray-400 text-center">
                En soumettant ce formulaire, votre client mail s&apos;ouvrira avec votre message.
                Vous pouvez aussi nous appeler directement au{" "}
                <a href="tel:0322930286" className="text-[#1a3d6b] font-bold">
                  03 22 93 02 86
                </a>
                .
              </p>
            </form>
          </div>

          {/* Contact info + map */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Nos coordonnées</h2>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="tel:0322930286"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-[#1a3d6b] transition-colors group"
              >
                <div className="bg-[#1a3d6b] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-0.5">
                    Téléphone
                  </div>
                  <div className="font-black text-gray-900 group-hover:text-[#1a3d6b] transition-colors text-lg">
                    03 22 93 02 86
                  </div>
                </div>
              </a>

              <a
                href="mailto:tp@groupe-vilbert.fr"
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-[#1a3d6b] transition-colors group"
              >
                <div className="bg-[#1a3d6b] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-0.5">
                    Email
                  </div>
                  <div className="font-black text-gray-900 group-hover:text-[#1a3d6b] transition-colors">
                    tp@groupe-vilbert.fr
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border-2 border-gray-100">
                <div className="bg-[#1a3d6b] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-0.5">
                    Adresse
                  </div>
                  <div className="font-bold text-gray-900">
                    Ruelle Mayeux<br />
                    80260 Talmas
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border-2 border-gray-100">
                <div className="bg-[#1a3d6b] text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  ⏰
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-0.5">
                    Horaires
                  </div>
                  <div className="font-bold text-gray-900">
                    Lundi — Vendredi : 7h00 – 18h00
                  </div>
                  <div className="text-sm text-gray-500">Samedi et dimanche : fermé</div>
                </div>
              </div>
            </div>

            {/* Google Maps desktop */}
            <div className="hidden lg:block rounded-xl overflow-hidden shadow h-64 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.0!2d2.353!3d50.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzEyLjAiTiAywrAyMScxMC44Ikc!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Vilbert Transports — Talmas"
              />
            </div>

            {/* Mobile maps link */}
            <a
              href="https://share.google/AiI8apyJiUMyka8p9"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center justify-center gap-3 bg-gray-100 border-2 border-gray-200 rounded-xl p-6 hover:border-[#1a3d6b] transition-colors"
            >
              <span className="text-3xl">🗺️</span>
              <span className="font-black text-gray-800">Voir sur Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Group links */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">Vilbert Transports est membre du</p>
          <h2 className="font-black text-gray-900 text-xl mb-6">Groupe Vilbert</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Vilbert TP", href: "https://www.vilbert-tp.fr" },
              { label: "Vilbert Hydro", href: "https://www.vilbert-hydro.fr" },
              { label: "Vilbert Recyclage", href: "https://www.vilbert-recyclage.fr" },
              { label: "Groupe Vilbert", href: "https://www.groupe-vilbert.fr" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 text-gray-700 font-bold px-5 py-2 rounded-lg hover:border-[#1a3d6b] hover:text-[#1a3d6b] transition-colors text-sm"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

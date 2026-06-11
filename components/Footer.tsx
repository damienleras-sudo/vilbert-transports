import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* CTA Banner */}
      <div className="bg-[#1a3d6b] py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            Un besoin de transport de matériaux ou d&apos;engins ?
          </h2>
          <p className="text-blue-200 mb-6 text-lg">
            Contactez-nous pour un devis rapide — intervention en Hauts-de-France et partout en France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="bg-white text-[#1a3d6b] font-black px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Logo + description */}
          <div>
            <div className="relative w-40 h-10 mb-4">
              <Image
                src="/logo.png"
                alt="Vilbert Transports — Logo"
                fill
                sizes="160px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Spécialiste du transport de matériaux et d&apos;engins de chantier en Hauts-de-France.
              Flotte de camions adaptée à tous vos besoins BTP.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#1a3d6b] text-white p-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Facebook Vilbert Transports"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://share.google/AiI8apyJiUMyka8p9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#1a3d6b] text-white p-2 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Google Maps Vilbert Transports"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Notre Flotte */}
          <nav aria-label="Navigation flotte">
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Notre Flotte</h3>
            <ul className="space-y-2">
              {[
                { label: "6x4 Benne", href: "/parc-vehicules#6x4" },
                { label: "8x4 Benne", href: "/parc-vehicules#8x4" },
                { label: "Ampliroll", href: "/parc-vehicules#ampliroll" },
                { label: "Semi TP", href: "/parc-vehicules#semi-tp" },
                { label: "FMA (Fond Mouvant)", href: "/parc-vehicules#fma" },
                { label: "8x4 avec Grue", href: "/parc-vehicules#grue" },
                { label: "Porte-engins", href: "/parc-vehicules#porte-engins" },
                { label: "Transport Exceptionnel", href: "/transport-exceptionnel" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-[#f5b800] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Autres filiales + Services */}
          <div>
            <nav aria-label="Navigation groupe Vilbert">
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Groupe Vilbert</h3>
              <ul className="space-y-2">
                {[
                  { label: "Vilbert TP", href: "https://www.vilbert-tp.fr" },
                  { label: "Vilbert Hydro", href: "https://www.vilbert-hydro.fr" },
                  { label: "Vilbert Recyclage", href: "https://www.vilbert-recyclage.fr" },
                  { label: "Groupe Vilbert", href: "https://www.groupe-vilbert.com" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-[#f5b800] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded"
                    >
                      {item.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Navigation services" className="mt-6">
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { label: "Transport de matériaux", href: "/services#materiaux" },
                  { label: "Transport ADR & Liquides", href: "/services#adr" },
                  { label: "Transport de déchets", href: "/services#dechets" },
                  { label: "Transport exceptionnel", href: "/transport-exceptionnel" },
                  { label: "Location avec chauffeur", href: "/services#location" },
                  { label: "À propos", href: "/a-propos" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-[#f5b800] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-4">Contact</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#f5b800] mt-0.5" aria-hidden="true">📍</span>
                  <span>Ruelle Mayeux<br />80260 Talmas</span>
                </li>
                <li>
                  <a href="tel:0322930286" className="flex items-center gap-2 hover:text-[#f5b800] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded">
                    <span className="text-[#f5b800]" aria-hidden="true">📞</span>
                    03 22 93 02 86
                  </a>
                </li>
                <li>
                  <a href="mailto:transports@groupe-vilbert.fr" className="flex items-center gap-2 hover:text-[#f5b800] transition-colors break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded">
                    <span className="text-[#f5b800]" aria-hidden="true">✉️</span>
                    transports@groupe-vilbert.fr
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5b800] mt-0.5" aria-hidden="true">⏰</span>
                  <span>Lun–Ven : 9h–12h30 · 13h30–17h30</span>
                </li>
                <li>
                  <a
                    href="https://share.google/AiI8apyJiUMyka8p9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#f5b800] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f5b800] rounded"
                  >
                    <span className="text-[#f5b800]" aria-hidden="true">🗺️</span>
                    Voir sur Google Maps
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black text-gray-500 text-xs py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Vilbert Transports — Tous droits réservés</p>
          <nav aria-label="Navigation légale">
            <div className="flex flex-wrap gap-4">
              <Link href="/mentions-legales" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white rounded">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white rounded">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white rounded">
                CGU
              </Link>
              <Link href="/sitemap-html" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white rounded">
                Plan du site
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white rounded">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

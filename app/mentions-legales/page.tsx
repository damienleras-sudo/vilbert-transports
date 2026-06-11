import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Vilbert Transports — éditeur, hébergeur, données personnelles.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Mentions légales</h1>
        <p className="text-gray-500 mb-10 text-sm">Dernière mise à jour : juin 2025</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              1. Éditeur du site
            </h2>
            <p className="mb-2">
              Le présent site <strong>www.vilbert-transports.fr</strong> est édité par :
            </p>
            <ul className="space-y-1 text-sm">
              <li><strong>Société :</strong> Vilbert Transports</li>
              <li><strong>Forme juridique :</strong> À compléter (SAS / SARL / etc.)</li>
              <li><strong>Adresse du siège :</strong> Ruelle Mayeux, 80260 Talmas</li>
              <li><strong>Téléphone :</strong> <a href="tel:0322930286" className="text-[#1a3d6b] font-bold">03 22 93 02 86</a></li>
              <li><strong>Email :</strong> <a href="mailto:tp@groupe-vilbert.fr" className="text-[#1a3d6b] font-bold">tp@groupe-vilbert.fr</a></li>
              <li><strong>Capital social :</strong> À compléter</li>
              <li><strong>SIRET :</strong> À compléter</li>
              <li><strong>N° TVA intra. :</strong> À compléter</li>
              <li><strong>RCS :</strong> À compléter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              2. Directeur de la publication
            </h2>
            <p>Le directeur de la publication est le représentant légal de Vilbert Transports.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              3. Hébergeur
            </h2>
            <p className="mb-2">Ce site est hébergé par :</p>
            <ul className="space-y-1 text-sm">
              <li><strong>Hébergeur :</strong> À compléter (ex : Vercel, OVH, etc.)</li>
              <li><strong>Adresse :</strong> À compléter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes, etc.)
              sont la propriété exclusive de Vilbert Transports ou de ses partenaires, et sont protégés
              par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, transmission ou dénaturation,
              totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit,
              est interdite sans l&apos;autorisation préalable écrite de Vilbert Transports.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              5. Données personnelles (RGPD)
            </h2>
            <p className="mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants
              concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:tp@groupe-vilbert.fr" className="text-[#1a3d6b] font-bold">
                tp@groupe-vilbert.fr
              </a>
            </p>
            <p className="mt-3">
              Les données collectées via le formulaire de contact sont utilisées uniquement pour
              répondre à vos demandes de devis et ne sont pas transmises à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              6. Cookies
            </h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
              Aucun cookie publicitaire ou de traçage n&apos;est déposé sans votre consentement.
              Vous pouvez paramétrer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              7. Responsabilité
            </h2>
            <p>
              Vilbert Transports s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
              diffusées sur ce site. Toutefois, Vilbert Transports ne peut garantir l&apos;exactitude,
              la précision ou l&apos;exhaustivité des informations mises à la disposition sur ce site
              et décline toute responsabilité pour les erreurs ou omissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              8. Liens hypertextes
            </h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site Internet en direction
              d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité
              de Vilbert Transports.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3 border-b-2 border-[#1a3d6b] pb-2">
              9. Droit applicable
            </h2>
            <p>
              Le présent site et ces mentions légales sont soumis au droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <Link href="/" className="text-[#1a3d6b] font-bold hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

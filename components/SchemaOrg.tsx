export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.vilbert-transports.fr/#organization",
    name: "Vilbert Transports",
    description:
      "Entreprise de transport routier de matériaux, engins et marchandises. Flotte de camions 6x4, 8x4, ampliroll, semi TP, FMA, grue, porte-engins. Transport exceptionnel France et Europe. Agréé transport de déchets. Chauffeurs ADR et AIPR.",
    url: "https://www.vilbert-transports.fr",
    telephone: "+33322930286",
    email: "transports@groupe-vilbert.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruelle Mayeux",
      addressLocality: "Talmas",
      postalCode: "80260",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 50.06, longitude: 2.38 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    areaServed: ["Somme", "Oise", "Pas-de-Calais", "Hauts-de-France"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de transport",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de matériaux" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport d'engins de chantier" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport exceptionnel" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport ADR" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de déchets" } },
      ],
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Groupe Vilbert",
      url: "https://www.groupe-vilbert.com",
    },
    sameAs: ["https://www.facebook.com/p/Groupe-Vilbert-100063776760913/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

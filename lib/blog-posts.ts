export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  intro: string;
  sections: { heading: string; body: string; list?: string[] }[];
  faq?: { question: string; answer: string }[];
  cta: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "transport-materiaux-somme-80",
    title: "Transport de matériaux dans la Somme (80) : granulats, terres et remblais",
    metaTitle: "Transport de matériaux Somme (80) | Vilbert Transports",
    metaDescription:
      "Transport de granulats, terres et remblais dans la Somme (80). Camions benne 6x4 et 8x4 Vilbert Transports à Amiens, Abbeville, Péronne et Albert.",
    excerpt:
      "Granulats, terres, remblais, enrobés : Vilbert Transports assure la livraison et l'évacuation de tous vos matériaux dans la Somme avec une flotte de camions benne 6x4 et 8x4.",
    category: "Transport matériaux",
    date: "2025-06-02",
    readingTime: 6,
    image: "/6x4.jpg",
    imageAlt: "Camion benne 6x4 Vilbert Transports livrant des granulats sur un chantier dans la Somme",
    keywords: ["transport matériaux Somme", "transport granulats 80", "camion benne Amiens", "livraison remblais Somme"],
    intro:
      "Le transport de matériaux est au cœur de tout chantier de travaux publics dans la Somme. Que vous soyez une entreprise de BTP, une collectivité ou un agriculteur, l'approvisionnement et l'évacuation de granulats, de terres et de remblais conditionnent l'avancement de vos travaux. Vilbert Transports, basée à Talmas (80260), met sa flotte de camions benne au service des chantiers de tout le département. Découvrez nos solutions de transport de matériaux dans la Somme.",
    sections: [
      {
        heading: "Les types de matériaux que nous transportons",
        body:
          "Notre flotte de camions benne transporte l'ensemble des matériaux de travaux publics couramment utilisés sur les chantiers de la Somme. Nous acheminons les granulats (graviers, sables, cailloux, ballast), les terres végétales et les terres de remblai, ainsi que les enrobés à chaud et à froid pour la voirie. Nous prenons également en charge l'évacuation des déblais, gravats et matériaux inertes issus de vos terrassements. Chaque matériau est transporté dans un véhicule adapté à sa densité et à son volume pour optimiser chaque rotation.",
        list: [
          "Granulats : graviers, sables, ballast, concassés",
          "Terres végétales et terres de remblai",
          "Enrobés et matériaux de voirie",
          "Déblais, gravats et matériaux inertes",
          "Amendements et matériaux agricoles",
        ],
      },
      {
        heading: "Notre flotte dédiée : camions 6x4 et 8x4",
        body:
          "Pour répondre à la diversité des chantiers, nous disposons de camions benne 6x4 et 8x4 aux normes Euro 6. Le 6x4 benne basculante est le cheval de bataille du transport de matériaux : maniable, il accède facilement aux chantiers urbains d'Amiens comme aux exploitations rurales. Le 8x4 offre une charge utile supérieure, idéale pour les gros volumes de granulats et les rotations longue distance. Tous nos véhicules sont équipés de bennes basculantes permettant un déchargement rapide et autonome, sans engin de manutention supplémentaire sur site.",
      },
      {
        heading: "Notre zone d'intervention en Somme",
        body:
          "Vilbert Transports intervient sur l'ensemble du département de la Somme et au-delà. Notre position centrale à Talmas, au nord d'Amiens, nous permet de desservir rapidement les principaux pôles d'activité du territoire. Nous livrons aussi bien les grands chantiers urbains que les chantiers ruraux isolés, avec la même réactivité. Voici les principales villes où nous intervenons régulièrement.",
        list: [
          "Amiens et son agglomération",
          "Abbeville et la vallée de la Somme",
          "Péronne, Albert et le Santerre",
          "Doullens et le Doullennais",
          "Montdidier, Roye, Corbie et Chaulnes",
        ],
      },
      {
        heading: "Délais et organisation des livraisons",
        body:
          "La logistique de chantier ne tolère pas l'approximation : un retard de livraison de granulats peut bloquer une équipe entière. C'est pourquoi nous planifions chaque transport avec rigueur grâce à notre télématique embarquée et à la solution de traçabilité DashDoc. Vous bénéficiez d'un suivi en temps réel de vos rotations et d'une confirmation de chaque livraison. Notre équipe locale adapte les horaires à vos contraintes, y compris pour les livraisons tôt le matin ou en flux tendu.",
      },
      {
        heading: "Pourquoi choisir Vilbert Transports",
        body:
          "Choisir Vilbert Transports pour le transport de vos matériaux dans la Somme, c'est faire confiance à une entreprise familiale implantée localement depuis plus de 30 ans. Nous appartenons au Groupe Vilbert, ce qui nous permet de mobiliser des moyens importants et de garantir une grande disponibilité. Notre flotte récente aux normes Euro 6 limite l'impact environnemental de vos transports, un atout dans le cadre de la Charte Objectif CO2 que nous avons signée. Enfin, la proximité de nos équipes assure une réactivité et une connaissance fine du terrain picard que les grands groupes nationaux ne peuvent offrir.",
      },
    ],
    faq: [
      {
        question: "Quels matériaux transportez-vous ?",
        answer:
          "Nous transportons les granulats (graviers, sables, ballast), les terres végétales et de remblai, les enrobés, ainsi que les déblais, gravats et matériaux inertes. Nous prenons aussi en charge certains matériaux agricoles comme les amendements.",
      },
      {
        question: "Dans quelles villes de la Somme intervenez-vous ?",
        answer:
          "Nous intervenons dans toute la Somme : Amiens, Abbeville, Péronne, Albert, Doullens, Montdidier, Roye, Corbie, Chaulnes et l'ensemble des communes du département, ainsi que dans l'Oise et le Pas-de-Calais.",
      },
      {
        question: "Avez-vous des camions 6x4 et 8x4 ?",
        answer:
          "Oui, notre flotte comprend des camions benne 6x4 et 8x4 aux normes Euro 6, adaptés à tous les volumes et à tous les types de chantiers, urbains comme ruraux.",
      },
    ],
    cta:
      "Besoin de faire livrer des granulats, des terres ou des remblais sur votre chantier dans la Somme ? Contactez Vilbert Transports pour un devis rapide et personnalisé.",
  },
  {
    slug: "camion-ampliroll-somme",
    title: "Camion ampliroll dans la Somme : benne amovible pour vos chantiers",
    metaTitle: "Camion Ampliroll Somme (80) | Vilbert Transports",
    metaDescription:
      "Camion ampliroll dans la Somme : benne amovible pour l'enlèvement de déchets inertes et l'approvisionnement de vos chantiers. Vilbert Transports à Talmas (80).",
    excerpt:
      "Le camion ampliroll et sa benne amovible révolutionnent la logistique de chantier. Vilbert Transports déploie ce service flexible dans toute la Somme.",
    category: "Flotte",
    date: "2025-05-28",
    readingTime: 5,
    image: "/fleet.jpg",
    imageAlt: "Camion ampliroll Vilbert Transports déposant une benne amovible sur un chantier dans la Somme",
    keywords: ["camion ampliroll Somme", "benne amovible chantier", "enlèvement déchets inertes 80"],
    intro:
      "Le camion ampliroll est devenu un incontournable des chantiers de travaux publics et des sites industriels. Grâce à son système de bras hydraulique, il dépose et reprend des bennes amovibles en quelques minutes, sans intervention extérieure. Dans la Somme, Vilbert Transports met ce service au service des entreprises de BTP, des collectivités et des industriels d'Amiens à Abbeville. Découvrez comment l'ampliroll peut simplifier la gestion de vos matériaux et de vos déchets.",
    sections: [
      {
        heading: "Qu'est-ce qu'un camion ampliroll ?",
        body:
          "Le camion ampliroll, aussi appelé camion polybenne, est équipé d'un bras hydraulique articulé en forme de crochet. Ce bras permet de charger, décharger et basculer des bennes amovibles directement depuis le châssis du véhicule. Le chauffeur dépose une benne vide sur votre chantier, repart, puis revient la collecter une fois pleine. Ce principe de dépose-reprise transforme chaque benne en un conteneur autonome que vous pouvez remplir à votre rythme.",
      },
      {
        heading: "Les avantages de la benne amovible sur chantier",
        body:
          "La benne amovible offre une souplesse incomparable dans l'organisation d'un chantier. Vous n'immobilisez pas un camion pendant le chargement : la benne reste sur site le temps nécessaire, ce qui fluidifie vos opérations. Cette solution réduit les coûts de transport en optimisant chaque rotation et en limitant les trajets à vide. Elle s'adapte aussi bien à un petit chantier de rénovation dans Amiens qu'à un grand site de terrassement dans le Santerre.",
        list: [
          "Dépose et reprise rapides, sans engin supplémentaire",
          "La benne reste sur site, vous chargez à votre rythme",
          "Optimisation des rotations et réduction des coûts",
          "Adaptée aux chantiers urbains comme ruraux",
        ],
      },
      {
        heading: "Matériaux et déchets acceptés",
        body:
          "Le camion ampliroll de Vilbert Transports prend en charge une grande variété de matériaux et de déchets. Nous évacuons les gravats, déblais et déchets inertes issus de la démolition et du terrassement. Nous transportons également les ferrailles, les déchets verts et les matériaux de tri sélectif de chantier. Pour l'approvisionnement, l'ampliroll livre granulats, sables et autres matériaux en vrac directement dans la benne déposée sur votre site.",
      },
      {
        heading: "Notre service ampliroll en Somme",
        body:
          "Depuis notre base de Talmas, nous déployons nos camions ampliroll dans toute la Somme et les départements limitrophes. Nous intervenons à Amiens, Abbeville, Péronne, Albert, Doullens et jusqu'à Roye et Montdidier. Notre agrément préfectoral pour le transport de déchets nous permet d'assurer l'enlèvement et l'évacuation vers les filières de traitement et de recyclage adaptées. Chaque enlèvement bénéficie d'une traçabilité numérique complète via DashDoc.",
      },
      {
        heading: "Tarifs et organisation",
        body:
          "Le coût d'un service ampliroll dépend du volume de la benne, de la nature des matériaux et de la distance d'intervention. Nous établissons un devis clair et sans surprise, adapté à la fréquence de vos enlèvements. Pour les chantiers de longue durée, nous proposons des rotations planifiées qui garantissent que vous ne manquez jamais de benne disponible. Contactez notre équipe locale pour définir ensemble la solution la plus économique pour votre projet.",
      },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un ampliroll ?",
        answer:
          "Un ampliroll est un camion équipé d'un bras hydraulique à crochet qui dépose et reprend des bennes amovibles. La benne reste sur votre chantier le temps nécessaire, puis le camion revient la collecter une fois pleine.",
      },
      {
        question: "Pour quels types de déchets ?",
        answer:
          "L'ampliroll convient aux gravats, déblais, déchets inertes, ferrailles, déchets verts et matériaux de tri de chantier. Grâce à notre agrément transport de déchets, nous évacuons vers les filières de traitement adaptées.",
      },
      {
        question: "Quelle capacité de benne ?",
        answer:
          "Nous proposons des bennes amovibles de différentes capacités selon votre besoin. Notre équipe vous conseille sur le volume le plus adapté à votre chantier dans la Somme.",
      },
    ],
    cta:
      "Besoin d'une benne amovible sur votre chantier dans la Somme ? Vilbert Transports met son service ampliroll à votre disposition. Demandez votre devis dès maintenant.",
  },
  {
    slug: "transport-exceptionnel-somme-hauts-de-france",
    title: "Transport exceptionnel dans la Somme et Hauts-de-France : nos convois autorisés",
    metaTitle: "Transport Exceptionnel Somme | Vilbert Transports",
    metaDescription:
      "Transport exceptionnel dans la Somme et Hauts-de-France : convois hors gabarit autorisés en France et en Europe. Machines, cuves, structures lourdes. Vilbert Transports.",
    excerpt:
      "Convois hors gabarit, machines industrielles, cuves, structures métalliques : Vilbert Transports est autorisé au transport exceptionnel en France et en Europe.",
    category: "Transport exceptionnel",
    date: "2025-05-20",
    readingTime: 7,
    image: "/transport-exceptionnel.jpg",
    imageAlt: "Convoi exceptionnel Vilbert Transports transportant une charge hors gabarit en Hauts-de-France",
    keywords: ["transport exceptionnel Somme", "convoi exceptionnel Hauts-de-France", "transport hors gabarit 80"],
    intro:
      "Le transport exceptionnel concerne toutes les charges qui dépassent les limites réglementaires de poids, de largeur, de hauteur ou de longueur. Déplacer une machine industrielle, une cuve ou une structure métallique exige des autorisations, une organisation millimétrée et un savoir-faire spécifique. Vilbert Transports, basée dans la Somme, est autorisée à réaliser des convois exceptionnels en France et en Europe. Voici tout ce qu'il faut savoir sur nos prestations de transport hors gabarit.",
    sections: [
      {
        heading: "Qu'est-ce que le transport exceptionnel ?",
        body:
          "Le transport exceptionnel désigne l'acheminement de marchandises dont les dimensions ou le poids dépassent les limites du Code de la route. On parle de convoi exceptionnel dès que la largeur excède 2,55 m, la hauteur 4 m, la longueur 18,75 m ou que le poids total dépasse les seuils légaux. Ces transports requièrent des véhicules spécialisés, des itinéraires étudiés et parfois une escorte. Dans la Somme comme partout en Hauts-de-France, ces convois sont strictement encadrés par la réglementation.",
      },
      {
        heading: "Les autorisations nécessaires en France",
        body:
          "Tout convoi exceptionnel doit faire l'objet d'une autorisation administrative préalable, délivrée par les services de l'État. Il existe trois catégories de convois selon les dimensions et le poids, chacune soumise à des règles spécifiques d'itinéraire et d'horaire. Vilbert Transports gère l'intégralité de ces démarches pour le compte de ses clients, de la demande d'autorisation à la définition du parcours. Nous connaissons parfaitement les contraintes de circulation du réseau routier de la Somme et des Hauts-de-France.",
      },
      {
        heading: "Nos autorisations étendues à l'Europe",
        body:
          "Au-delà du territoire national, Vilbert Transports dispose des autorisations nécessaires pour réaliser des convois exceptionnels en Europe. Cette capacité ouvre des perspectives aux industriels de la Somme qui doivent expédier ou réceptionner des charges hors gabarit depuis l'étranger. Nous coordonnons les autorisations transfrontalières et les escortes requises dans chaque pays traversé. Cette dimension européenne fait de nous un partenaire de choix pour les projets industriels d'envergure.",
      },
      {
        heading: "Types de charges transportées",
        body:
          "Notre expérience couvre une large gamme de charges exceptionnelles. Nous transportons des machines industrielles lourdes, des cuves et silos, des structures métalliques de grande dimension et des équipements agricoles hors normes. Chaque charge fait l'objet d'une étude préalable pour déterminer le véhicule, l'arrimage et l'itinéraire les plus adaptés. Cette polyvalence nous permet de répondre aux besoins des industriels, des constructeurs et des exploitations de toute la région.",
        list: [
          "Machines industrielles lourdes",
          "Cuves, silos et réservoirs",
          "Structures et charpentes métalliques",
          "Équipements agricoles hors gabarit",
        ],
      },
      {
        heading: "Itinéraires et accompagnement dans la Somme",
        body:
          "La réussite d'un convoi exceptionnel repose sur la préparation de son itinéraire. Nous étudions chaque parcours dans la Somme et au-delà en tenant compte des ponts, des ronds-points, des lignes électriques et des ouvrages d'art. De Talmas vers Amiens, Abbeville ou Péronne, nous identifions les passages délicats et organisons l'escorte si nécessaire. Notre connaissance fine du territoire picard est un atout déterminant pour sécuriser chaque transport hors gabarit.",
      },
      {
        heading: "Délais d'obtention des autorisations",
        body:
          "Les délais d'obtention d'une autorisation de transport exceptionnel varient selon la catégorie du convoi et l'itinéraire emprunté. Une autorisation peut nécessiter de quelques jours à plusieurs semaines pour les parcours les plus complexes ou transfrontaliers. Anticiper votre demande est donc essentiel pour respecter vos plannings de projet. Notre équipe vous accompagne dès la phase d'étude pour optimiser ces délais et planifier votre convoi sereinement.",
      },
    ],
    faq: [
      {
        question: "Combien de temps pour une autorisation ?",
        answer:
          "Les délais varient de quelques jours à plusieurs semaines selon la catégorie du convoi et la complexité de l'itinéraire. Pour les parcours transfrontaliers, il est recommandé d'anticiper. Notre équipe gère l'ensemble des démarches pour vous.",
      },
      {
        question: "Intervenez-vous en Europe ?",
        answer:
          "Oui, Vilbert Transports dispose des autorisations pour réaliser des convois exceptionnels en France et en Europe. Nous coordonnons les autorisations transfrontalières et les escortes nécessaires.",
      },
      {
        question: "Quelles charges maximales ?",
        answer:
          "Nous transportons machines industrielles, cuves, structures métalliques et équipements agricoles hors gabarit. Chaque charge fait l'objet d'une étude préalable pour déterminer le véhicule et l'itinéraire adaptés.",
      },
    ],
    cta:
      "Vous avez une charge hors gabarit à transporter dans la Somme, en France ou en Europe ? Faites appel à l'expertise de Vilbert Transports en transport exceptionnel.",
  },
  {
    slug: "porte-engins-somme",
    title: "Transport de porte-engins dans la Somme : déplacement de vos machines de chantier",
    metaTitle: "Porte-engins Somme (80) | Vilbert Transports",
    metaDescription:
      "Transport de porte-engins dans la Somme : déplacement de pelles, bulldozers, compacteurs et minipelles. Vilbert Transports intervient à Amiens et dans tout le 80.",
    excerpt:
      "Pelles, bulldozers, compacteurs, nacelles : Vilbert Transports déplace vos engins de chantier dans toute la Somme grâce à son porte-engins spécialisé.",
    category: "Flotte",
    date: "2025-05-12",
    readingTime: 6,
    image: "/porte-engins.jpg",
    imageAlt: "Porte-engins Vilbert Transports chargeant une pelle mécanique près d'Amiens dans la Somme",
    keywords: ["porte-engins Somme", "transport pelle mécanique 80", "déplacement bulldozer Amiens"],
    intro:
      "Déplacer un engin de chantier d'un site à un autre ne s'improvise pas. Une pelle mécanique, un bulldozer ou un compacteur représente une charge lourde et encombrante qui nécessite un véhicule spécialisé : le porte-engins. Dans la Somme, Vilbert Transports assure le transport sécurisé de vos machines de chantier, d'Amiens à Abbeville en passant par le Santerre. Découvrez notre service de transport de porte-engins.",
    sections: [
      {
        heading: "Le porte-engins : outil indispensable du BTP",
        body:
          "Le porte-engins est une remorque surbaissée conçue pour transporter des engins de chantier lourds. Sa plateforme abaissée et ses rampes d'accès permettent de charger des machines à chenilles ou à pneus en toute sécurité. Sans cet équipement, le déplacement des engins entre deux chantiers serait impossible ou dangereux. Pour les entreprises de BTP de la Somme, disposer d'un transporteur fiable de porte-engins est un gage de productivité.",
      },
      {
        heading: "Engins transportables",
        body:
          "Notre porte-engins est dimensionné pour accueillir la grande majorité des machines de chantier. Nous transportons des pelles mécaniques de différents tonnages, des bulldozers, des compacteurs et des rouleaux. Nous déplaçons également des nacelles élévatrices et des minipelles pour les chantiers urbains d'Amiens. Chaque engin est arrimé selon les règles de sécurité en vigueur pour garantir un transport sans risque.",
        list: [
          "Pelles mécaniques et minipelles",
          "Bulldozers et chargeuses",
          "Compacteurs et rouleaux",
          "Nacelles élévatrices",
        ],
      },
      {
        heading: "Préparation du convoi",
        body:
          "Le transport d'un engin commence bien avant le chargement. Nous vérifions les dimensions et le poids de la machine pour confirmer la compatibilité avec le porte-engins et la réglementation. L'engin est ensuite chargé sur la plateforme, calé et arrimé avec des sangles et des chaînes adaptées. Cette préparation rigoureuse est essentielle pour éviter tout déplacement de la charge pendant le trajet sur les routes de la Somme.",
      },
      {
        heading: "Réglementation et gabarit",
        body:
          "Selon les dimensions de l'engin transporté, le convoi peut entrer dans la catégorie du transport exceptionnel. Vilbert Transports maîtrise cette réglementation et gère, le cas échéant, les autorisations nécessaires. Nous adaptons l'itinéraire et les horaires de circulation aux contraintes du gabarit. Cette double compétence, porte-engins et transport exceptionnel, nous permet de déplacer même les machines les plus imposantes.",
      },
      {
        heading: "Notre porte-engins en Somme",
        body:
          "Depuis notre base de Talmas, nous mobilisons rapidement notre porte-engins pour vos déplacements de machines. Que vous ayez besoin de transférer une pelle d'un chantier d'Amiens vers Péronne, ou un compacteur de Doullens vers Abbeville, nous organisons l'intervention dans les meilleurs délais. Notre connaissance du réseau routier picard garantit des trajets optimisés et sécurisés.",
      },
      {
        heading: "Zones d'intervention",
        body:
          "Notre service de porte-engins couvre l'ensemble de la Somme et déborde sur les départements voisins de l'Oise et du Pas-de-Calais. Nous intervenons à Amiens, Abbeville, Péronne, Albert, Doullens, Montdidier, Roye et Corbie. Pour les déplacements plus lointains, notre agrément transport exceptionnel nous autorise à intervenir sur toute la France. Contactez-nous pour vérifier notre disponibilité sur votre secteur.",
      },
    ],
    faq: [
      {
        question: "Quels engins pouvez-vous transporter ?",
        answer:
          "Nous transportons pelles mécaniques, minipelles, bulldozers, chargeuses, compacteurs, rouleaux et nacelles élévatrices. Chaque engin est arrimé selon les règles de sécurité en vigueur.",
      },
      {
        question: "Faut-il une autorisation ?",
        answer:
          "Selon les dimensions et le poids de l'engin, le convoi peut relever du transport exceptionnel. Le cas échéant, nous gérons toutes les autorisations et adaptons l'itinéraire.",
      },
      {
        question: "Combien de temps pour organiser un transport ?",
        answer:
          "Pour un transport standard dans la Somme, nous mobilisons notre porte-engins rapidement. Pour les convois exceptionnels nécessitant une autorisation, il faut anticiper de quelques jours. Contactez-nous pour un délai précis.",
      },
    ],
    cta:
      "Vous devez déplacer une pelle, un bulldozer ou un compacteur dans la Somme ? Vilbert Transports met son porte-engins à votre service. Demandez votre devis.",
  },
  {
    slug: "transport-dechets-industriels-hauts-de-france",
    title: "Transport de déchets industriels en Hauts-de-France : agrément et solutions",
    metaTitle: "Transport Déchets Industriels Hauts-de-France | Vilbert Transports",
    metaDescription:
      "Transport de déchets industriels en Hauts-de-France : agrément préfectoral, déchets inertes, ADR, traçabilité DashDoc. Vilbert Transports dans la Somme (80).",
    excerpt:
      "Agrément préfectoral, traçabilité DashDoc, chauffeurs ADR : Vilbert Transports assure le transport de déchets industriels en Hauts-de-France dans le respect de la réglementation.",
    category: "Transport déchets",
    date: "2025-05-05",
    readingTime: 6,
    image: "/fleet.jpg",
    imageAlt: "Camion Vilbert Transports agréé pour le transport de déchets industriels en Hauts-de-France",
    keywords: ["transport déchets industriels", "collecte déchets BTP Somme", "transport déchets dangereux 80"],
    intro:
      "Le transport de déchets industriels est une activité strictement réglementée qui exige un agrément et un savoir-faire spécifiques. Entre déchets inertes, déchets non dangereux et matières dangereuses, chaque flux obéit à des règles précises de transport et de traçabilité. Vilbert Transports, agréée et basée dans la Somme, propose des solutions complètes de transport de déchets en Hauts-de-France. Découvrez notre offre et nos garanties.",
    sections: [
      {
        heading: "Réglementation du transport de déchets par route",
        body:
          "Le transport de déchets par route est encadré par le Code de l'environnement, qui impose des obligations strictes aux transporteurs. Toute entreprise qui transporte des déchets à titre professionnel doit être déclarée et, selon les volumes, disposer d'un agrément préfectoral. La réglementation impose également la tenue de registres et l'émission de bordereaux de suivi pour assurer la traçabilité de chaque flux. Vilbert Transports respecte scrupuleusement l'ensemble de ces obligations.",
      },
      {
        heading: "Notre agrément préfectoral",
        body:
          "Vilbert Transports dispose de l'agrément préfectoral pour le transport de déchets par route. Cet agrément atteste de notre conformité aux exigences réglementaires et de notre capacité à transporter différents types de déchets. Il rassure nos clients industriels et les entreprises de BTP de la Somme sur la légalité et la sécurité de leurs flux. Cet agrément est régulièrement renouvelé et contrôlé par les services de l'État.",
      },
      {
        heading: "Déchets inertes et non dangereux",
        body:
          "Nous assurons le transport des déchets inertes issus des chantiers de BTP : gravats, béton, terres non polluées et matériaux de démolition. Nous prenons également en charge les déchets industriels non dangereux générés par les sites de production. Ces déchets sont acheminés vers les filières de traitement, de recyclage ou de valorisation appropriées. Notre flotte de camions benne et ampliroll est parfaitement adaptée à ces flux.",
      },
      {
        heading: "Matières dangereuses (ADR)",
        body:
          "Certains déchets relèvent de la réglementation ADR sur le transport de matières dangereuses. Vilbert Transports dispose de chauffeurs formés et habilités ADR ainsi que de véhicules équipés pour ces transports sensibles. Cette compétence nous permet de prendre en charge des déchets industriels spéciaux dans le strict respect des règles de sécurité. Chaque transport ADR fait l'objet d'une documentation et d'une signalisation conformes.",
      },
      {
        heading: "Traçabilité avec DashDoc",
        body:
          "La traçabilité est au cœur du transport de déchets : chaque flux doit pouvoir être suivi de l'enlèvement jusqu'au traitement. Vilbert Transports utilise la solution numérique DashDoc pour dématérialiser ses bordereaux et garantir un suivi précis. Vous accédez à une preuve de chaque enlèvement et de chaque livraison, archivée automatiquement. Cette transparence facilite vos obligations déclaratives et vos audits environnementaux.",
      },
      {
        heading: "Notre zone d'intervention",
        body:
          "Notre service de transport de déchets couvre toute la région Hauts-de-France. Depuis Talmas, nous intervenons dans la Somme à Amiens, Abbeville, Péronne et Albert, ainsi que dans l'Oise et le Pas-de-Calais. Nous travaillons avec les industriels, les collectivités et les entreprises de BTP de tout le territoire. Notre proximité garantit une réactivité que les grands réseaux nationaux ne peuvent égaler.",
      },
    ],
    faq: [
      {
        question: "Avez-vous l'agrément pour transporter des déchets ?",
        answer:
          "Oui, Vilbert Transports dispose de l'agrément préfectoral pour le transport de déchets par route, régulièrement renouvelé et contrôlé par les services de l'État.",
      },
      {
        question: "Transportez-vous des déchets dangereux ?",
        answer:
          "Oui, nos chauffeurs sont formés et habilités ADR et nos véhicules sont équipés pour le transport de matières dangereuses, dans le strict respect de la réglementation.",
      },
      {
        question: "Comment fonctionne la traçabilité ?",
        answer:
          "Nous utilisons la solution DashDoc pour dématérialiser les bordereaux et assurer une traçabilité complète, de l'enlèvement au traitement, avec archivage automatique des preuves.",
      },
    ],
    cta:
      "Vous cherchez un transporteur agréé pour vos déchets industriels en Hauts-de-France ? Vilbert Transports vous accompagne en toute conformité. Contactez-nous.",
  },
  {
    slug: "camion-fma-fond-mouvant",
    title: "Camion FMA (Fond Mouvant Amovible) : le transport de vrac simplifié",
    metaTitle: "Camion FMA Fond Mouvant | Vilbert Transports Somme",
    metaDescription:
      "Camion FMA à fond mouvant amovible : transport de vrac, biomasse, copeaux et céréales dans la Somme et les Hauts-de-France. Déchargement autonome. Vilbert Transports.",
    excerpt:
      "Biomasse, copeaux, déchets verts, céréales : le camion FMA à fond mouvant amovible décharge votre vrac en autonomie. Vilbert Transports déploie ce service dans la Somme.",
    category: "Flotte",
    date: "2025-04-28",
    readingTime: 6,
    image: "/fma.jpg",
    imageAlt: "Camion FMA à fond mouvant amovible Vilbert Transports transportant du vrac dans la Somme",
    keywords: ["camion FMA", "fond mouvant amovible", "transport vrac Somme", "livraison biomasse 80"],
    intro:
      "Le camion FMA, ou fond mouvant amovible, est une solution de transport de vrac particulièrement performante. Contrairement à une benne classique qui bascule, le FMA décharge sa cargaison horizontalement grâce à un plancher mobile. Cette technologie est idéale pour les produits sensibles ou volumineux comme la biomasse, les copeaux ou les céréales. Vilbert Transports met son camion FMA au service des acteurs agricoles et industriels de la Somme et des Hauts-de-France.",
    sections: [
      {
        heading: "Qu'est-ce qu'un FMA ?",
        body:
          "Le FMA, fond mouvant amovible, est une semi-remorque équipée d'un plancher constitué de lattes mobiles. Ces lattes se déplacent d'avant en arrière pour évacuer progressivement la cargaison sans avoir à lever la caisse. Ce système évite les contraintes de hauteur du basculement, dangereux sous les hangars ou les lignes électriques. Le FMA combine ainsi sécurité, polyvalence et grande capacité de chargement.",
      },
      {
        heading: "Matières transportées",
        body:
          "Le camion FMA de Vilbert Transports transporte une large gamme de produits en vrac. Il est particulièrement adapté à la biomasse, aux copeaux de bois, aux déchets verts et aux plaquettes forestières. Il achemine également les engrais, les amendements et les céréales pour le secteur agricole. Sa polyvalence en fait un atout précieux pour les exploitations et les industries de la Somme.",
        list: [
          "Biomasse et plaquettes forestières",
          "Copeaux de bois et déchets verts",
          "Engrais et amendements",
          "Céréales et produits agricoles en vrac",
        ],
      },
      {
        heading: "Avantages du fond mouvant vs benne classique",
        body:
          "Le principal avantage du FMA sur la benne classique est l'absence de basculement, ce qui supprime les risques liés à la hauteur. Le déchargement s'effectue à plat, en toute sécurité, même dans des lieux confinés comme les hangars agricoles. Le FMA offre également un volume de chargement supérieur, optimisant chaque rotation. Enfin, son plancher mobile permet un déchargement régulier et maîtrisé, sans à-coups.",
      },
      {
        heading: "Déchargement autonome sur site",
        body:
          "Avec le FMA, le déchargement est entièrement autonome et ne nécessite aucun engin de manutention sur place. Le chauffeur actionne le plancher mobile depuis le véhicule pour décharger la cargaison à l'endroit voulu. Cette autonomie simplifie grandement les livraisons sur les sites peu équipés, fréquents en milieu rural. C'est un avantage déterminant pour les exploitations agricoles isolées de la Somme.",
      },
      {
        heading: "Notre FMA en Somme et Hauts-de-France",
        body:
          "Depuis Talmas, notre camion FMA intervient dans toute la Somme et la région Hauts-de-France. Nous livrons et collectons du vrac à Amiens, Abbeville, Péronne, Albert et dans les zones agricoles du Santerre et du Vimeu. Notre flotte récente aux normes Euro 6 garantit des transports propres et efficaces. La télématique embarquée permet un suivi précis de chaque livraison.",
      },
      {
        heading: "Secteurs d'activité concernés",
        body:
          "Le FMA répond aux besoins de plusieurs secteurs d'activité. L'agriculture l'utilise pour le transport de céréales, d'engrais et d'amendements. L'industrie y recourt pour la biomasse et les sous-produits valorisables. Le BTP et la filière bois apprécient sa capacité à transporter copeaux et déchets verts. Cette transversalité fait du FMA l'un des véhicules les plus polyvalents de notre flotte.",
        list: [
          "Agriculture : céréales, engrais, amendements",
          "Industrie : biomasse et sous-produits",
          "Filière bois : copeaux, plaquettes, déchets verts",
        ],
      },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un fond mouvant ?",
        answer:
          "Un fond mouvant est un plancher constitué de lattes mobiles qui déchargent la cargaison horizontalement, sans basculer la caisse. C'est une solution sûre et polyvalente pour le transport de vrac.",
      },
      {
        question: "Quels produits transportez-vous ?",
        answer:
          "Notre FMA transporte biomasse, copeaux de bois, déchets verts, plaquettes forestières, engrais, amendements et céréales, pour l'agriculture comme pour l'industrie.",
      },
      {
        question: "Quelle est la capacité du FMA ?",
        answer:
          "Le FMA offre un volume de chargement important, supérieur à une benne classique. Notre équipe vous précise la capacité disponible selon la nature de votre produit.",
      },
    ],
    cta:
      "Vous avez du vrac, de la biomasse ou des céréales à transporter dans la Somme ? Le camion FMA de Vilbert Transports est la solution. Demandez votre devis.",
  },
  {
    slug: "transport-adr-matieres-dangereuses",
    title: "Transport ADR de matières dangereuses : chauffeurs habilités en Hauts-de-France",
    metaTitle: "Transport ADR Matières Dangereuses | Vilbert Transports",
    metaDescription:
      "Transport ADR de matières dangereuses dans la Somme et les Hauts-de-France : chauffeurs habilités, véhicules équipés, traçabilité. Vilbert Transports à Talmas (80).",
    excerpt:
      "Chauffeurs habilités ADR, véhicules équipés, traçabilité numérique : Vilbert Transports assure le transport de matières dangereuses en Hauts-de-France en toute sécurité.",
    category: "ADR & Liquides",
    date: "2025-04-20",
    readingTime: 6,
    image: "/fleet.jpg",
    imageAlt: "Camion Vilbert Transports habilité ADR pour le transport de matières dangereuses en Hauts-de-France",
    keywords: ["transport ADR Somme", "transport matières dangereuses 80", "chauffeur ADR Hauts-de-France"],
    intro:
      "Le transport de matières dangereuses obéit à une réglementation internationale stricte : l'ADR. Acides, hydrocarbures, produits chimiques ou déchets spéciaux ne peuvent être transportés que par des chauffeurs formés et des véhicules adaptés. Vilbert Transports dispose des habilitations ADR nécessaires pour intervenir dans la Somme et toute la région Hauts-de-France. Découvrez notre expertise du transport ADR.",
    sections: [
      {
        heading: "Qu'est-ce que l'ADR ?",
        body:
          "L'ADR est l'accord européen relatif au transport international des marchandises dangereuses par route. Cet accord définit les conditions de transport des produits présentant un risque pour la sécurité, la santé ou l'environnement. Il fixe des règles précises sur les véhicules, l'emballage, la signalisation et la formation des conducteurs. Respecter l'ADR est une obligation légale incontournable pour tout transporteur de matières dangereuses.",
      },
      {
        heading: "Classes de danger concernées",
        body:
          "L'ADR classe les marchandises dangereuses en plusieurs catégories selon la nature du risque. On y retrouve les matières inflammables, corrosives, toxiques, comburantes ou encore les déchets dangereux. Chaque classe impose des contraintes spécifiques de transport et de signalisation. Vilbert Transports adapte ses moyens à la classe de danger des produits qui lui sont confiés, dans le respect strict de la réglementation.",
      },
      {
        heading: "Formation et habilitation de nos chauffeurs",
        body:
          "Le transport ADR ne peut être assuré que par des conducteurs titulaires d'une formation spécifique et d'un certificat en cours de validité. Les chauffeurs de Vilbert Transports sont formés et habilités ADR pour les classes de produits que nous transportons. Cette formation est régulièrement actualisée pour rester conforme aux évolutions réglementaires. Elle garantit que chaque transport est réalisé par un professionnel qualifié et conscient des risques.",
      },
      {
        heading: "Véhicules équipés pour l'ADR",
        body:
          "Au-delà de la formation des chauffeurs, le transport ADR exige des véhicules conformes et équipés. Nos camions disposent des équipements de sécurité obligatoires : extincteurs, kits anti-pollution, signalisation orange et documentation embarquée. Selon la classe de danger, des aménagements spécifiques peuvent être requis. Vilbert Transports veille à ce que chaque véhicule mobilisé réponde parfaitement aux exigences du transport considéré.",
      },
      {
        heading: "Traçabilité et sécurité",
        body:
          "La sécurité et la traçabilité sont au cœur du transport ADR. Chaque transport fait l'objet d'une documentation précise et d'un suivi numérique via DashDoc. Notre télématique embarquée permet de localiser les véhicules en temps réel et de réagir rapidement en cas d'imprévu. Cette rigueur protège vos marchandises, nos équipes et l'environnement tout au long du trajet.",
      },
      {
        heading: "Notre zone d'intervention",
        body:
          "Vilbert Transports assure le transport ADR dans la Somme et l'ensemble des Hauts-de-France. Depuis Talmas, nous desservons Amiens, Abbeville, Péronne, Albert, Doullens et les zones industrielles de la région. Nous intervenons aussi dans l'Oise et le Pas-de-Calais selon vos besoins. Notre proximité garantit une réactivité précieuse pour les transports sensibles de matières dangereuses.",
      },
    ],
    faq: [
      {
        question: "Vos chauffeurs sont-ils formés ADR ?",
        answer:
          "Oui, les chauffeurs de Vilbert Transports sont formés et habilités ADR, avec des certificats en cours de validité régulièrement actualisés selon les évolutions réglementaires.",
      },
      {
        question: "Quelles classes de danger acceptez-vous ?",
        answer:
          "Nous transportons plusieurs classes de matières dangereuses. Contactez-nous avec la nature précise de votre produit pour confirmer notre capacité à le transporter dans le respect de l'ADR.",
      },
      {
        question: "Comment assurer la traçabilité ?",
        answer:
          "Chaque transport ADR est documenté et suivi via DashDoc, avec une télématique embarquée permettant la localisation en temps réel des véhicules.",
      },
    ],
    cta:
      "Vous devez transporter des matières dangereuses dans la Somme ou en Hauts-de-France ? Confiez votre transport ADR à Vilbert Transports. Demandez votre devis.",
  },
  {
    slug: "transport-agricole-somme",
    title: "Transport agricole dans la Somme : matériaux, tracteurs et équipements",
    metaTitle: "Transport Agricole Somme (80) | Vilbert Transports",
    metaDescription:
      "Transport agricole dans la Somme : livraison d'engrais, semences, terres et déplacement de tracteurs et machines. Vilbert Transports au service des exploitations du 80.",
    excerpt:
      "Engrais, semences, amendements, tracteurs et moissonneuses : Vilbert Transports accompagne les exploitations agricoles de la Somme avec des solutions de transport adaptées.",
    category: "Transport matériaux",
    date: "2025-04-12",
    readingTime: 6,
    image: "/transport-agricole.jpg",
    imageAlt: "Camion Vilbert Transports livrant des matériaux agricoles dans une exploitation de la Somme",
    keywords: ["transport agricole Somme", "livraison matériaux agricoles 80", "transport tracteur Amiens"],
    intro:
      "L'agriculture est un secteur clé de l'économie de la Somme, et ses besoins en transport sont nombreux et variés. Approvisionnement en engrais et semences, évacuation de récoltes, déplacement de tracteurs et de moissonneuses : chaque saison apporte ses contraintes logistiques. Vilbert Transports, ancrée dans le territoire picard, accompagne les exploitations agricoles de la Somme avec des solutions sur mesure. Découvrez notre offre de transport agricole.",
    sections: [
      {
        heading: "Les besoins en transport du secteur agricole",
        body:
          "Le secteur agricole génère des besoins de transport rythmés par les saisons et les cultures. Au printemps, il faut approvisionner les exploitations en semences, engrais et amendements. À l'automne, les récoltes doivent être acheminées vers les silos et les coopératives. Tout au long de l'année, le déplacement des machines entre les parcelles mobilise des moyens de transport spécifiques. Vilbert Transports comprend ces enjeux et adapte ses services au calendrier agricole.",
      },
      {
        heading: "Matériaux agricoles transportés",
        body:
          "Notre flotte transporte l'ensemble des matériaux nécessaires aux exploitations de la Somme. Nous livrons les engrais, les semences et les amendements en vrac ou conditionnés. Nous acheminons également les terres, les composts et les substrats utilisés pour l'amélioration des sols. Notre camion FMA est particulièrement adapté au transport de céréales et de produits en vrac, avec un déchargement autonome sur site.",
        list: [
          "Engrais et amendements",
          "Semences et substrats",
          "Terres et composts",
          "Céréales en vrac (camion FMA)",
        ],
      },
      {
        heading: "Transport d'équipements et machines agricoles",
        body:
          "Au-delà des matériaux, nous assurons le déplacement des équipements et machines agricoles. Le transfert d'un tracteur ou d'une moissonneuse-batteuse entre deux exploitations ou vers un atelier de réparation nécessite un véhicule adapté. Notre porte-engins est dimensionné pour accueillir ces machines volumineuses. Nous gérons également les autorisations lorsque les dimensions relèvent du transport exceptionnel.",
      },
      {
        heading: "Porte-engins pour tracteurs et moissonneuses",
        body:
          "Le déplacement d'une moissonneuse-batteuse ou d'un gros tracteur exige un porte-engins robuste et une organisation rigoureuse. Vilbert Transports charge, arrime et transporte ces machines en toute sécurité sur les routes de la Somme. Nous étudions chaque convoi pour adapter l'itinéraire aux dimensions de la charge. Cette compétence est précieuse en pleine saison de récolte, lorsque les délais sont serrés.",
      },
      {
        heading: "Notre expérience avec les exploitations de la Somme",
        body:
          "Implantée à Talmas depuis plus de 30 ans, Vilbert Transports connaît parfaitement le monde agricole picard. Nous travaillons avec les exploitations du Santerre, du Vimeu et de toute la Somme, d'Amiens à Roye en passant par Montdidier. Cette proximité et cette expérience nous permettent d'anticiper vos besoins et de réagir vite. Nous parlons le même langage que les agriculteurs de la région.",
      },
      {
        heading: "Disponibilité et souplesse horaire",
        body:
          "Le travail agricole ne s'arrête pas aux horaires de bureau, et notre service s'adapte à cette réalité. Nous proposons une grande souplesse horaire pour répondre aux pics d'activité des semis et des récoltes. Notre équipe locale reste joignable et réactive face aux imprévus du calendrier agricole. Cette disponibilité fait de nous un partenaire fiable pour les exploitations de la Somme.",
      },
    ],
    faq: [
      {
        question: "Transportez-vous des machines agricoles ?",
        answer:
          "Oui, notre porte-engins est dimensionné pour transporter tracteurs et moissonneuses-batteuses. Nous gérons les autorisations lorsque les dimensions relèvent du transport exceptionnel.",
      },
      {
        question: "Livrez-vous dans les fermes ?",
        answer:
          "Oui, nous livrons directement dans les exploitations de la Somme. Notre camion FMA décharge le vrac en autonomie, même sur les sites peu équipés en milieu rural.",
      },
      {
        question: "Avez-vous des camions adaptés à la campagne ?",
        answer:
          "Oui, notre flotte comprend des camions benne, un FMA et un porte-engins parfaitement adaptés aux livraisons et aux déplacements en milieu agricole et rural.",
      },
    ],
    cta:
      "Vous êtes agriculteur dans la Somme et avez besoin de transport de matériaux ou de machines ? Vilbert Transports est votre partenaire local. Contactez-nous.",
  },
  {
    slug: "camion-benne-8x4-grue",
    title: "Camion 8x4 avec grue : chargement autonome pour vos livraisons complexes",
    metaTitle: "Camion 8x4 Grue Somme | Vilbert Transports",
    metaDescription:
      "Camion 8x4 avec grue dans la Somme : chargement et déchargement autonomes en zones difficiles d'accès. Matériaux lourds et palettes. Vilbert Transports en Hauts-de-France.",
    excerpt:
      "Livraisons en zones difficiles d'accès, matériaux lourds, palettes hors format : le camion 8x4 avec grue de Vilbert Transports charge et décharge en autonomie dans la Somme.",
    category: "Flotte",
    date: "2025-04-04",
    readingTime: 5,
    image: "/8x4-grue.jpg",
    imageAlt: "Camion 8x4 avec grue Vilbert Transports déchargeant des matériaux lourds dans la Somme",
    keywords: ["camion grue Somme", "8x4 grue Hauts-de-France", "livraison avec grue 80"],
    intro:
      "Certaines livraisons exigent plus qu'un simple camion : elles nécessitent un moyen de manutention intégré. Le camion 8x4 équipé d'une grue répond précisément à ce besoin en assurant le chargement et le déchargement en parfaite autonomie. Cette polyvalence est précieuse pour les chantiers en zones difficiles d'accès ou dépourvus d'engins de levage. Vilbert Transports déploie son 8x4 grue dans toute la Somme et les Hauts-de-France.",
    sections: [
      {
        heading: "Le 8x4 avec grue : polyvalence maximale",
        body:
          "Le camion 8x4 avec grue combine la capacité de charge d'un porteur quatre essieux et la souplesse d'un bras de levage. Cette configuration permet de transporter et de déposer des charges lourdes sans équipement extérieur. Le chauffeur, formé à la manipulation de la grue, positionne précisément les matériaux à l'endroit voulu. C'est l'outil idéal pour les livraisons qui demandent à la fois transport et manutention.",
      },
      {
        heading: "Applications : livraisons en zones difficiles d'accès",
        body:
          "Le 8x4 grue excelle là où les autres véhicules atteignent leurs limites. Sur un chantier urbain encombré d'Amiens, dans une cour exiguë ou sur un terrain sans engin de levage, la grue déploie les matériaux avec précision. Elle permet de franchir un obstacle, de déposer une charge par-dessus une clôture ou de positionner des éléments en hauteur. Cette autonomie évite de mobiliser un engin supplémentaire et accélère vos livraisons.",
      },
      {
        heading: "Capacité et portée de la grue",
        body:
          "La grue de notre 8x4 offre une portée et une capacité de levage adaptées aux charges les plus courantes du BTP. Sa portée permet d'atteindre des points éloignés du camion, jusqu'à plusieurs mètres selon la configuration. Le poids levé dépend de la distance : plus la charge est éloignée, plus la capacité diminue, conformément aux abaques de sécurité. Notre équipe vous renseigne sur la faisabilité de votre opération en fonction de ces paramètres.",
      },
      {
        heading: "Matériaux lourds et palettes hors format",
        body:
          "Le 8x4 grue est parfait pour les matériaux lourds et les charges difficiles à manipuler manuellement. Il livre des palettes de parpaings, des big-bags de granulats, des éléments préfabriqués en béton ou des charges hors format. La grue dépose chaque élément directement à l'endroit d'utilisation, sans rupture de charge. Cette précision fait gagner un temps précieux à vos équipes sur le chantier.",
      },
      {
        heading: "Sécurité et opérateur formé",
        body:
          "La manipulation d'une grue auxiliaire requiert une formation spécifique et une vigilance constante. Les chauffeurs de Vilbert Transports qui opèrent le 8x4 grue sont formés à ces manœuvres et respectent les règles de sécurité. Ils évaluent la stabilité du sol, déploient les stabilisateurs et vérifient l'environnement avant chaque levage. Cette rigueur garantit des opérations sûres pour vos équipes et vos matériaux.",
      },
      {
        heading: "Interventions en Somme",
        body:
          "Depuis Talmas, notre 8x4 grue intervient dans toute la Somme et la région Hauts-de-France. Nous livrons à Amiens, Abbeville, Péronne, Albert, Doullens et dans l'ensemble des communes du département. Que votre chantier soit en ville ou à la campagne, notre camion grue s'adapte à la configuration des lieux. Contactez-nous pour vérifier sa disponibilité sur votre secteur.",
      },
    ],
    faq: [
      {
        question: "Quelle portée pour votre grue ?",
        answer:
          "La grue de notre 8x4 offre une portée de plusieurs mètres selon la configuration. La capacité de levage diminue avec la distance, conformément aux abaques de sécurité. Notre équipe vous renseigne selon votre opération.",
      },
      {
        question: "Pour quels types de chargement ?",
        answer:
          "Le 8x4 grue convient aux matériaux lourds : palettes de parpaings, big-bags de granulats, éléments préfabriqués en béton et charges hors format, déposés directement à l'endroit voulu.",
      },
      {
        question: "Faut-il de la place pour déployer la grue ?",
        answer:
          "Oui, la grue nécessite un espace suffisant pour déployer ses stabilisateurs et opérer en sécurité. Notre chauffeur évalue la configuration des lieux avant chaque levage. Indiquez-nous les contraintes d'accès lors de votre demande.",
      },
    ],
    cta:
      "Vous avez une livraison complexe ou en zone difficile d'accès dans la Somme ? Le camion 8x4 avec grue de Vilbert Transports est la solution. Demandez votre devis.",
  },
  {
    slug: "choisir-transporteur-somme",
    title: "Comment choisir son transporteur de matériaux dans la Somme ? Notre guide",
    metaTitle: "Choisir Transporteur Matériaux Somme | Guide Vilbert Transports",
    metaDescription:
      "Comment choisir son transporteur de matériaux dans la Somme ? Flotte, certifications, couverture, environnement : notre guide complet pour bien décider. Vilbert Transports.",
    excerpt:
      "Flotte, certifications, couverture géographique, engagements environnementaux : notre guide vous aide à choisir le bon transporteur de matériaux BTP dans la Somme.",
    category: "Conseils",
    date: "2025-03-26",
    readingTime: 7,
    image: "/fleet.jpg",
    imageAlt: "Flotte de camions Vilbert Transports, transporteur de matériaux dans la Somme",
    keywords: ["transporteur matériaux Somme", "choisir entreprise transport 80", "devis transport BTP Somme"],
    intro:
      "Choisir un transporteur de matériaux dans la Somme est une décision qui impacte directement la bonne marche de vos chantiers. Délais, fiabilité, conformité réglementaire, impact environnemental : de nombreux critères entrent en jeu. Un mauvais choix peut entraîner retards, surcoûts et complications administratives. Ce guide vous présente les critères essentiels pour sélectionner le partenaire de transport le plus adapté à vos besoins.",
    sections: [
      {
        heading: "Les critères de choix d'un transporteur BTP",
        body:
          "Le choix d'un transporteur BTP repose sur un ensemble de critères complémentaires. La diversité de la flotte, les certifications, la couverture géographique et les engagements environnementaux doivent tous être examinés. La proximité et la réactivité du prestataire jouent également un rôle déterminant pour la fluidité de vos chantiers. Prendre le temps d'évaluer ces aspects vous évite bien des déconvenues par la suite.",
      },
      {
        heading: "La flotte : diversité et état des camions",
        body:
          "Un bon transporteur de matériaux dispose d'une flotte diversifiée capable de répondre à tous les besoins. Bennes 6x4 et 8x4, ampliroll, FMA, porte-engins et camion grue couvrent des usages très différents. L'état et l'âge des véhicules comptent aussi : une flotte récente est plus fiable et moins polluante. Vilbert Transports entretient une flotte complète et renouvelée aux normes Euro 6 pour répondre à chaque situation.",
        list: [
          "Diversité des véhicules pour tous les usages",
          "Flotte récente et bien entretenue",
          "Camions aux normes Euro 6",
        ],
      },
      {
        heading: "Les certifications et agréments",
        body:
          "Les certifications et agréments sont la garantie du sérieux et de la conformité d'un transporteur. L'agrément préfectoral pour le transport de déchets, les habilitations ADR et AIPR des chauffeurs sont des signaux forts. Ils attestent que l'entreprise respecte la réglementation et forme correctement ses équipes. Vilbert Transports cumule ces certifications, gage de fiabilité pour ses clients de la Somme.",
      },
      {
        heading: "La couverture géographique",
        body:
          "La couverture géographique du transporteur doit correspondre à la localisation de vos chantiers. Un prestataire implanté localement réagit plus vite et connaît mieux le terrain qu'un grand réseau national. Vilbert Transports, basée à Talmas, couvre toute la Somme : Amiens, Abbeville, Péronne, Albert, Doullens, Montdidier, Roye, Corbie et au-delà. Notre agrément transport exceptionnel nous permet aussi d'intervenir en France et en Europe.",
      },
      {
        heading: "Les engagements environnementaux",
        body:
          "L'impact environnemental du transport est devenu un critère de choix majeur. Une flotte aux normes Euro 6 et la signature de la Charte Objectif CO2 témoignent d'un engagement concret pour réduire les émissions. La télématique embarquée optimise les tournées et limite les trajets à vide. Vilbert Transports place ces engagements au cœur de sa démarche, un atout pour les donneurs d'ordre soucieux de leur empreinte carbone.",
      },
      {
        heading: "Pourquoi Vilbert Transports est le bon choix en Somme",
        body:
          "Vilbert Transports réunit l'ensemble des critères qui font un transporteur de confiance dans la Somme. Notre flotte complète et récente, nos certifications, notre ancrage local et nos engagements environnementaux nous distinguent. Membre du Groupe Vilbert, nous mobilisons des moyens importants tout en conservant la réactivité d'une entreprise familiale. Pour vos transports de matériaux BTP dans la Somme, nous sommes le partenaire fiable et durable qu'il vous faut.",
      },
    ],
    faq: [
      {
        question: "Comment obtenir un devis rapidement ?",
        answer:
          "Contactez-nous par téléphone au 03 22 93 02 86 ou via notre formulaire de contact en précisant la nature de votre besoin. Nous vous établissons un devis clair et rapide.",
      },
      {
        question: "Intervenez-vous en urgence ?",
        answer:
          "Notre ancrage local et notre flotte disponible nous permettent de réagir rapidement. Contactez-nous pour vérifier notre disponibilité selon votre besoin et votre secteur dans la Somme.",
      },
      {
        question: "Couvrez-vous toute la Somme ?",
        answer:
          "Oui, depuis Talmas nous couvrons l'ensemble de la Somme (Amiens, Abbeville, Péronne, Albert, Doullens, Montdidier, Roye, Corbie...) ainsi que l'Oise et le Pas-de-Calais, et toute la France pour le transport exceptionnel.",
      },
    ],
    cta:
      "Vous cherchez un transporteur de matériaux fiable dans la Somme ? Faites le bon choix avec Vilbert Transports. Demandez votre devis gratuit dès aujourd'hui.",
  },
];

export const blogCategories = [
  "Tous",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 2): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

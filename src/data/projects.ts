import Kenzo from "../assets/kenzo.png";
import Utopia from "../assets/utopia.png";
import Sae202 from "../assets/sae202.jpg";
import Unity from "../assets/Mockup_unity.jpg";
import Tree from "../assets/Mockup_tree.js.png";
import Michel from "../assets/Michel-et-l-Anneau.png";
import BookGraphique from "../assets/BookGraphique.png";
import Spotify from "../assets/spotify.png";
import SiteMomentum from "../assets/SiteMomentum.png";
import AppFilm from "../assets/APP-Movie.png";
import DraftAI from "../assets/DraftAI.png";
import MediSimpleImg from "../assets/medisimpel.23.25.png";
import RansauImg from "../assets/ransau-systeme.png";
import Docly from "../assets/WR602d.png";

export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: ImageMetadata;
    link: string;
    tags: string[];
    year: string;
    technologies: string[];
    role: string;
    duration: string;
    // Champs portfolio obligatoires
    legend: string;
    commentary: string;
    competencies: string[];
}

export const projects: Project[] = [
    {
        slug: "ransau-systeme",
        title: "Refonte Ransau Systeme",
        description: "Refonte complète du site de Ransau Systeme pendant mon stage — modernisation du design, composants React, footer, boutons et animations 3D.",
        longDescription: "Dans le cadre de mon stage, j'ai réalisé une refonte complète du site de Ransau Systeme, une entreprise dont l'ancien système présentait de nombreux manques côté design et expérience utilisateur. Le projet consistait à reconstruire l'interface en React et Tailwind CSS en repartant des problèmes identifiés : absence de cohérence visuelle, boutons non stylisés, footer inexistant, et aucune animation. J'ai redesigné l'ensemble des composants, intégré des animations 3D pour dynamiser l'expérience, et livré une interface moderne, responsive et fidèle à l'identité de l'entreprise.",
        image: RansauImg,
        link: "https://www.ransau-systeme.com/",
        tags: ["Web", "Design", "Stage"],
        year: "2025",
        technologies: ["React", "Tailwind CSS", "Animations 3D"],
        role: "Développeur Front-end — Stagiaire",
        duration: "8 semaines",
        legend: "Capture du site actuel de Ransau Systeme montrant la page d'accueil avec la navigation, le hero section présentant l'activité de consulting/IA/logiciel, les boutons d'action et l'illustration 3D. J'ai identifié plusieurs axes d'amélioration : manque de cohérence typographique, espacement irrégulier, absence de footer structuré, animations limitées et responsive à optimiser.",
        commentary: "Dans le cadre de mon stage, j'ai mené une refonte complète du site. J'ai commencé par un audit UX/UI du site existant, puis j'ai reconstruit l'ensemble des composants en React et Tailwind CSS — navbar, hero, sections, footer, boutons — en intégrant des animations 3D pour dynamiser l'expérience. Ce projet valide ma capacité à mener une refonte de A à Z dans un contexte professionnel.",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "medisimple",
        title: "MediSimple",
        description: "Assistant IA qui analyse les ordonnances médicales pour aider les patients à comprendre leurs médicaments, avec rappels intelligents et suivi personnalisé.",
        longDescription: "MediSimple est une application de santé numérique pensée pour réduire la non-observance médicamenteuse — responsable de 180 000 hospitalisations évitables chaque année en France. L'IA analyse une photo ou un PDF d'ordonnance et génère des explications en langage simple dans plus de 50 langues. Des rappels intelligents sont envoyés au bon moment, et un tableau de bord permet au médecin et à la famille de suivre la prise en temps réel. Le projet intègre un mode Alzheimer (interface ultra-simplifiée, alerte famille automatique), un dashboard médecin avec code couleur d'observance, et une accessibilité totale : grands caractères, lecture vocale, modes daltoniens, écriture RTL. L'application est conforme RGPD, hébergée sur un serveur certifié HDS, et les données sont chiffrées en AES-256.",
        image: MediSimpleImg,
        link: "https://github.com/Hokoala/v0-me-me",
        tags: ["Web", "IA", "SaaS", "Santé"],
        year: "2025",
        technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Claude API", "Tesseract OCR", "Whisper", "Firebase", "Twilio", "PostgreSQL", "Redis"],
        role: "Fondateur & Développeur Full-stack",
        duration: "En cours (depuis mai 2025)",
        legend: "Maquette de la page d'accueil de MediSimple avec le slogan 'Comprenez vos médicaments sans confusion', le bouton 'Commencer gratuitement', les badges de confiance (Conforme RGPD, Testée médicalement, 30+ langues) et les statistiques clés (27K patients traités, 30 min temps moyen d'utilisation). Le design utilise un dégradé violet/bleu moderne.",
        commentary: "J'ai conçu et développé seul cette application qui mobilise des compétences variées : front-end (Next.js, React, Tailwind, shadcn/ui), intégration d'APIs d'IA (Claude API, Tesseract OCR, Whisper), gestion de notifications (Firebase, Twilio SMS) et base de données chiffrée (PostgreSQL AES-256, Redis). J'ai aussi mené une réflexion entrepreneuriale complète : étude de marché, modèle freemium et conformité légale (RGPD, HDS).",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "docly",
        title: "Docly",
        description: "Application SaaS similaire à iLovePDF permettant de manipuler et convertir des fichiers PDF, développée avec React, Symfony et intégrant Stripe.",
        longDescription: "Docly est une application SaaS de manipulation de fichiers PDF développée avec React en front-end et Symfony en back-end. Elle intègre Stripe pour la gestion des paiements et abonnements. Le projet m'a permis de maîtriser l'architecture full-stack d'une application SaaS complète.",
        image: Docly,
        link: "#",
        tags: ["Web", "SaaS"],
        year: "2025",
        technologies: ["React", "Symfony", "Stripe", "PHP", "MySQL"],
        role: "Développeur Full-stack",
        duration: "3 semaines",
        legend: "Page d'accueil de Docly sur fond orange vif avec le slogan 'PDF EN UN CLIC' en grandes lettres blanches. La navigation affiche Convertisseur, Tarifs, Historique, Carnet, Contact, ainsi que les boutons Connexion et Inscription. Au centre, un bouton circulaire blanc 'GENERER PDF' permet de lancer la conversion.",
        commentary: "J'ai développé Docly comme une alternative à iLovePDF en architecture full-stack (React + Symfony). J'ai intégré Stripe pour les abonnements, géré l'authentification utilisateur et conçu les différentes pages de l'application SaaS. Ce projet m'a permis de maîtriser l'architecture complète d'un SaaS, de la gestion des paiements à la persistance des données.",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "draft-ai",
        title: "Draft AI",
        description: "Application SaaS permettant aux freelances et créateurs de contenu de transformer des notes brutes en contenu structuré grâce à l'IA.",
        longDescription: "Draft AI est une application SaaS qui exploite l'intelligence artificielle pour transformer des notes brutes en contenu structuré. Elle cible les freelances et créateurs de contenu qui souhaitent gagner du temps dans leur processus de rédaction. J'ai développé l'interface utilisateur et intégré l'API d'IA.",
        image: DraftAI,
        link: "https://sass-draft-ai.vercel.app/",
        tags: ["Web", "SaaS", "IA"],
        year: "2025",
        technologies: ["React", "Next.js", "API IA", "Tailwind CSS"],
        role: "Développeur Full-stack",
        duration: "3 semaines",
        legend: "Page d'accueil de Draft AI sur fond sombre avec le titre 'Notes en Contenu.' et le sous-titre 'Transforme tes notes brutes en articles de blog, newsletters et threads LinkedIn en quelques secondes, grâce à l'IA.' Le badge 'Nouveau — Génération de contenu par IA' est visible en haut, avec le bouton 'Commencer gratuitement' et la mention '7 jours d'essai gratuit'.",
        commentary: "J'ai conçu et développé Draft AI, un SaaS IA qui transforme des notes brutes en contenu structuré. J'ai intégré une API d'IA pour le traitement du texte, développé le front-end en React/Next.js et mis en place le système d'abonnement. Ce projet m'a permis d'explorer les usages concrets de l'IA dans des produits grand public.",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "site-momentum",
        title: "Site Momentum",
        description: "Plateforme web connectée à une API pour le jeu de parkour sur borne d'arcade MOMENTUM.",
        longDescription: "MOMENTUM est un projet de jeu de parkour sur borne d'arcade. J'ai créé la plateforme web associée, permettant aux joueurs de consulter leurs scores et de découvrir le jeu via une API connectée. Le site reflète l'univers dynamique du jeu.",
        image: SiteMomentum,
        link: "https://momentum.mmi23f03.fr/",
        tags: ["Web", "API"],
        year: "2024",
        technologies: ["HTML", "CSS", "JavaScript", "API REST"],
        role: "Développeur Front-end",
        duration: "2 mois",
        legend: "Page d'accueil du site MOMENTUM v2 avec le hero cinématique montrant un personnage en parkour dans un univers cyberpunk, la navigation (Home, Description, Création, Leaderboard), le slogan 'Run. Collect lights. Sabotage your rival. And survive the night.' Le design reprend l'esthétique néon vert/rouge du moodboard avec des effets glitch.",
        commentary: "J'ai contribué à la direction artistique (moodboard), à la modélisation des assets 3D sur Blender et au développement complet du site vitrine connecté à l'API du jeu pour afficher les scores en temps réel. Ce projet collectif m'a appris à coordonner mon travail avec 4 autres groupes tout en livrant une interface cohérente avec l'univers graphique défini en amont.",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "api-spotify",
        title: "Api Spotify",
        description: "Application web d'intégration de l'API Spotify pour rechercher des artistes, albums, playlists et écouter des extraits.",
        longDescription: "Ce projet m'a permis d'explorer l'intégration d'APIs tierces avec authentification OAuth 2.0. L'application permet aux utilisateurs de se connecter avec leur compte Spotify, rechercher des artistes et écouter des extraits de 30 secondes.",
        image: Spotify,
        link: "https://api-spotify-zeta.vercel.app/dashboard",
        tags: ["Web", "API"],
        year: "2024",
        technologies: ["JavaScript", "API Spotify", "OAuth 2.0", "HTML/CSS"],
        role: "Développeur Full-stack",
        duration: "3 semaines",
        legend: "Page de connexion de l'application Spotify Stats avec le bouton 'Se connecter avec Spotify' sur fond sombre avec un cercle lumineux vert. J'ai conçu une interface épurée avec le logo Spotify, le titre 'Spotify Stats' et le sous-titre 'Découvrez vos statistiques d'écoute'.",
        commentary: "J'ai développé cette application qui permet de voir ses statistiques Spotify à tout moment, sans attendre le Wrapped annuel. J'ai intégré l'authentification OAuth 2.0 (gestion des tokens, rafraîchissement, expiration), consommé plusieurs endpoints de l'API Spotify et résolu un problème de CORS en convertissant les images d'artistes en Base64 pour l'export.",
        competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "app-films-series",
        title: "Application Films Séries",
        description: "Application web pour découvrir films et séries, développée avec Nuxt.js et Vue.js, intégrant une API.",
        longDescription: "Application de découverte de films et séries développée avec Nuxt.js et Vue.js. Elle intègre une API externe pour récupérer les données des films, afficher les fiches détaillées et permettre la recherche.",
        image: AppFilm,
        link: "https://github.com/Hokoala/Projet_film",
        tags: ["Web", "API"],
        year: "2024",
        technologies: ["Nuxt.js", "Vue.js", "API REST", "CSS"],
        role: "Développeur Front-end",
        duration: "3 semaines",
        legend: "Interface de l'application films et séries affichant la fiche du film GoodFellas (1985) en dark mode. La navigation propose Films, Réalisateurs, Acteurs et Administration. L'interface présente l'affiche du film, le titre, l'année et une description. Le profil 'Jean Michel' avec le rôle admin est visible en haut à droite.",
        commentary: "J'ai développé cette application de découverte de films en Nuxt.js et Vue.js, en consommant une API externe pour récupérer les données. J'ai conçu les fiches films détaillées, la recherche et la navigation entre sections. Ce projet m'a permis de découvrir l'écosystème Vue.js/Nuxt et la gestion d'APIs REST côté front-end.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "anima",
        title: "ANIMA",
        description: "Application web CRUD de gestion de base de données sur le thème de l'animation Disney et DreamWorks.",
        longDescription: "ANIMA est une application web CRUD permettant de gérer une base de données de personnages et films d'animation. J'ai conçu la structure de la base de données et développé toutes les opérations de création, lecture, mise à jour et suppression.",
        image: Sae202,
        link: "https://mmi23e10.sae203.ovh/",
        tags: ["Web", "BDD"],
        year: "2024",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        role: "Développeur Full-stack",
        duration: "1 mois",
        legend: "Mockup mobile de l'application ANIMA affichant la fiche du film Mulan (Disney, 1998) : réalisateur Barry Cook, production Walt Disney Pictures, durée 88 minutes, compositeur Alan Silvestri. L'interface mobile présente l'affiche du film en rouge et les métadonnées sous forme de liste.",
        commentary: "J'ai conçu et développé ANIMA, une application CRUD sur le thème des films d'animation Disney et DreamWorks. J'ai modélisé la base de données MySQL, développé les opérations CRUD en PHP et conçu l'interface responsive. Ce projet m'a permis de maîtriser le développement back-end avec PHP et la gestion de bases de données relationnelles.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "michel-et-l-anneau",
        title: "Michel et l'Anneau",
        description: "Histoire interactive alliant narration et interactivité pour captiver l'utilisateur, conçue en équipe.",
        longDescription: "Michel et l'Anneau est un projet de narration interactive développé en équipe. L'objectif était de concevoir une expérience immersive combinant storytelling et interactivité web, avec des éléments visuels et sonores intégrés.",
        image: Michel,
        link: "https://sae402.beauget.fr/",
        tags: ["Web", "Design"],
        year: "2024",
        technologies: ["HTML", "CSS", "JavaScript", "À remplir"],
        role: "Développeur Front-end",
        duration: "1 mois",
        legend: "Mockup laptop posé sur un canapé, affichant l'interface de 'Michel et l'Anneau' : fond bleu nuit avec le titre en écriture manuscrite et un personnage cartoon au trait blanc. L'interface propose une navigation interactive invitant l'utilisateur à progresser dans l'histoire.",
        commentary: "J'ai participé au développement de cette narration interactive en équipe. L'expérience combine storytelling et interactivité web avec des éléments visuels et sonores. J'ai contribué au développement front-end et à l'intégration des animations pour créer une expérience immersive.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "refonte-utopia",
        title: "Refonte Utopia",
        description: "Refonte complète du site Utopia, de A à Z, avec un focus sur l'ergonomie, l'accessibilité et l'expérience utilisateur.",
        longDescription: "Refonte intégrale du site Utopia avec une approche centrée sur l'utilisateur. Le projet couvrait l'analyse de l'existant, la conception des maquettes, le développement et l'optimisation de l'accessibilité.",
        image: Utopia,
        link: "http://mmi23f01.sae301dev.ovh/",
        tags: ["Web", "Design", "UX"],
        year: "2024",
        technologies: ["HTML", "CSS", "JavaScript", "À remplir"],
        role: "Développeur Front-end & UX",
        duration: "1 mois",
        legend: "Mockup laptop posé sur une souche en bois, affichant le site Utopia après refonte : interface cinéma en dark mode avec le film Mufasa (Disney) en hero, un bouton 'Réserver maintenant' orange, et la navigation (Films, Vendues, Contenu, À propos). La section 'Films du jour' est visible en bas.",
        commentary: "J'ai réalisé la refonte complète du site Utopia avec une approche centrée sur l'utilisateur. J'ai analysé l'existant, conçu les maquettes et développé la nouvelle interface en m'inspirant des plateformes de streaming modernes. Ce projet m'a permis de travailler sur l'UX, l'accessibilité et la cohérence visuelle d'un site vitrine.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "jeu-unity-3d",
        title: "Jeu Unity 3D",
        description: "Création d'un jeu 3D avec Unity dans le cadre de la formation MMI.",
        longDescription: "Développement d'un jeu 3D avec Unity. Ce projet m'a initié aux bases du game development : modélisation de scènes, gestion des collisions, scripting C# et export vers le web.",
        image: Unity,
        link: "http://mmi23e10.mmi-troyes.fr/wr409",
        tags: ["Jeu", "3D"],
        year: "2024",
        technologies: ["Unity", "C#", "3D"],
        role: "Game Developer",
        duration: "1 mois",
        legend: "Mockup laptop affichant le jeu Unity 3D : une boule violette dans un environnement coloré avec collines, sapins et escalier. L'interface HUD affiche un compteur de pièces (0/10), un timer (1:49), des cœurs de vie et une barre d'inventaire de pouvoirs.",
        commentary: "J'ai développé ce jeu 3D en groupe avec Unity. J'ai appris à manipuler le moteur 3D, à scripter les mécaniques de jeu en C# (collecte d'objets, timer, système de vies, pouvoirs) et à exporter le projet en WebGL pour le web. C'est une compétence complémentaire au développement web qui enrichit ma compréhension des interactions utilisateur.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "site-three-js",
        title: "Site Three.js",
        description: "Création d'un site avec Three.js pour manipuler des objets 3D et créer des animations interactives.",
        longDescription: "Exploration de Three.js pour créer des expériences 3D interactives dans le navigateur. Ce projet m'a permis d'apprendre la manipulation d'objets 3D, les caméras, les lumières et les animations dans un contexte web.",
        image: Tree,
        link: "http://mmi23e10.mmi-troyes.fr/wr405d/",
        tags: ["Web", "3D"],
        year: "2024",
        technologies: ["Three.js", "JavaScript", "HTML/CSS"],
        role: "Développeur Front-end",
        duration: "2 semaines",
        legend: "Mockup bureau avec un grand écran affichant le logo Three.js (triangle en wireframe + texte 'three.js') sur fond blanc. Un Mac Pro, un clavier Apple et un laptop MacBook sont visibles sur le bureau.",
        commentary: "J'ai exploré Three.js pour créer des expériences 3D interactives dans le navigateur. J'ai appris à manipuler les objets 3D, les caméras, les lumières et les animations. Ce projet m'a ouvert à la 3D dans un contexte web, une compétence que j'ai ensuite approfondie avec le Portfolio 3D en Unity.",
        competencies: ["Développer — Développer pour le web et les médias numériques"],
    },
    {
        slug: "book-graphique",
        title: "Book Graphique",
        description: "Collection de travaux en design graphique illustrant ma passion pour l'esthétique et la créativité.",
        longDescription: "Mon book graphique regroupe mes réalisations en design : affiches, identités visuelles, compositions typographiques et illustrations. Il témoigne de mon évolution en tant que designer et de ma sensibilité esthétique.",
        image: BookGraphique,
        link: "https://www.linkedin.com/in/jean-michel-le/overlay/1739270714168/single-media-viewer/?profileId=ACoAAEEs1jkB8oZaJ4BYEcU53ccQb6FeJdpMZfE",
        tags: ["Design", "Graphisme"],
        year: "2024",
        technologies: ["Illustrator", "Photoshop", "InDesign"],
        role: "Designer Graphique",
        duration: "2022–2024",
        legend: "Couverture du book graphique 2022 : design minimaliste en noir et blanc avec le mot 'Book' centré et les années '2022' inscrites en haut à droite et en bas à gauche, dans un style éditorial épuré.",
        commentary: "Ce book regroupe mes réalisations en design graphique : affiches, identités visuelles, compositions typographiques et illustrations. Il témoigne de ma sensibilité esthétique et de mon évolution en design avant de me spécialiser dans le développement web.",
        competencies: ["Entreprendre — Entreprendre dans le secteur du numérique"],
    },
    {
        slug: "kenzo",
        title: "Publication fictive Amara by Kenzo",
        description: "Projet de publication fictive pour Amara by Kenzo, mettant en avant des designs innovants et une approche créative.",
        longDescription: "Création d'une publication fictive pour le parfum Amara by Kenzo. Le projet incluait la conception du concept créatif, le shooting fictif, la mise en page et la production d'une vidéo de présentation.",
        image: Kenzo,
        link: "https://www.youtube.com/watch?v=pBSbaEKWqGo",
        tags: ["Design", "Graphisme"],
        year: "2024",
        technologies: ["Photoshop", "Premiere Pro", "Illustrator"],
        role: "Directeur Artistique",
        duration: "3 semaines",
        legend: "Photographie nocturne extraite de la vidéo de présentation du parfum Amara by Kenzo : un homme en costume sombre se tient de profil, avec des effets de lens flare colorés (vert, rose, orange) évoquant le mystère et l'élégance de la fragrance.",
        commentary: "J'ai conçu cette publication fictive pour Amara by Kenzo de A à Z : concept créatif, direction artistique, shooting photo, mise en page et production d'une vidéo de présentation. Ce projet m'a permis de maîtriser la chaîne complète de création d'un contenu de marque.",
        competencies: ["Entreprendre — Entreprendre dans le secteur du numérique"],
    },

    // =====================================================================
    // TEMPLATE — Dupliquer ce bloc pour chaque nouveau projet
    // =====================================================================
    // {
    //     slug: "nom-du-projet",
    //     title: "Titre du projet",
    //     description: "Description courte (1-2 phrases).",
    //     longDescription: "Description détaillée.",
    //     image: NomImage,                  // import en haut du fichier
    //     link: "https://lien-du-projet",
    //     tags: ["Web"],
    //     year: "2025",
    //     technologies: ["HTML", "CSS"],
    //     role: "Développeur Front-end",
    //     duration: "X semaines",
    //     legend: "Ce qu'on voit sur la capture + lien avec le commentaire.",
    //     commentary: "Pourquoi cette trace est pertinente.",
    //     competencies: ["Compétence 1", "Compétence 2"],
    // },
];

export const tagColors: Record<string, string> = {
    "Web": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "API": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Jeu": "bg-green-500/20 text-green-300 border-green-500/30",
    "3D": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "Design": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Graphisme": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "SaaS": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "IA": "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "BDD": "bg-red-500/20 text-red-300 border-red-500/30",
    "UX": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Stage": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "Santé": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

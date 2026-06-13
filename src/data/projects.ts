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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        role: "À remplir",
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        role: "À remplir",
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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
        duration: "À remplir",
        legend: "À remplir — décris ce qu'on voit sur la capture et son lien avec le commentaire.",
        commentary: "À remplir — explique pourquoi cette trace est pertinente et ce qu'elle démontre de tes compétences.",
        competencies: ["À remplir — Compétence 1", "À remplir — Compétence 2"],
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

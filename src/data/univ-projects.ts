import ApiSpotify from "../assets/api-spotify.png";
import SpotifyStats from "../assets/spotify.png";
import SiteMomentum from "../assets/SiteMomentum.png";
import MoodboardMomentum from "../assets/moodabord.png";
import MaquetteMomentum from "../assets/maquette_du_site.png";
import MediSimpleImg from "../assets/medisimpel.23.25.png";
import DevFlowPlaceholder from "../assets/DraftAI.png"; // TODO: remplacer par une vraie capture DevFlow
import RansauSysteme from "../assets/ransau-systeme.png";
import UnityGame from "../assets/Mockup_unity.jpg";
import SiteMomentumV2 from "../assets/site-momentum.png";
import Portfolio3D from "../assets/portfolio-3D.png";
import BlenderObstacle from "../assets/momentum-blender-obstacle.png";
import BlenderPanneau from "../assets/momentum-blender-panneau.png";
import BlenderVariantes from "../assets/momentum-blender-variantes.png";

export type ProjectType = "SAE en groupe" | "Projet personnel" | "Projet universitaire" | "Stage";

export interface Trace {
    id: string;
    title: string;              // Titre explicite de la trace
    legend: string;             // Ce qu'on voit + lien avec le commentaire
    commentary: string;         // Pourquoi cette trace est pertinente
    competencies: string[];     // Competences associees (obligatoire)
    media: {
        type: 'image' | 'link' | 'video';
        sources: (string | ImageMetadata)[];
    };
}

export interface UnivProject {
    slug: string;
    title: string;
    type: ProjectType;
    description: string;
    longDescription: string;
    image: ImageMetadata;
    link: string;
    tags: string[];
    year: string;
    technologies: string[];
    role: string;
    duration: string;
    traces: Trace[];
}

export const projectTypeColors: Record<ProjectType, string> = {
    "SAE en groupe": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Projet personnel": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "Projet universitaire": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "Stage": "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

export const univProjects: UnivProject[] = [
    {
        slug: "medisimple",
        title: "MediSimple",
        type: "Projet personnel",
        description: "Projet personnel — assistant IA qui analyse les ordonnances médicales et aide les patients à comprendre leurs médicaments, avec rappels intelligents, suivi médecin/famille et accessibilité totale.",
        longDescription: "MediSimple est né d'un constat alarmant : 180 000 hospitalisations évitables chaque année en France et 40% des patients qui ne comprennent pas leur ordonnance. J'ai conçu et développé seul cette application qui permet de scanner une ordonnance (photo, PDF ou vocal), d'obtenir des explications claires en 50+ langues grâce à l'IA, de recevoir des rappels intelligents adaptés au profil (standard, senior, Alzheimer), et de partager le suivi avec le médecin et la famille en temps réel. Le projet intègre une réflexion approfondie sur la conformité légale (RGPD, CNIL, hébergement HDS, secret médical L1110-4) et un modèle économique freemium viable.",
        image: MediSimpleImg,
        link: "https://github.com/Hokoala/v0-me-me",
        tags: ["Web", "IA", "SaaS", "Sante"],
        year: "2025",
        technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Claude API", "Tesseract OCR", "Whisper", "Firebase", "Twilio", "PostgreSQL", "Redis"],
        role: "Fondateur & Développeur Full-stack",
        duration: "En cours (depuis mai 2025)",
        traces: [
            {
                id: "medisimple-maquette",
                title: "Maquette UI/UX de MediSimple",
                legend: "Maquette de la page d'accueil de MediSimple montrant le hero section avec le slogan 'Comprenez vos médicaments sans confusion', le bouton 'Commencer gratuitement', la navigation (Fonctionnalités, Pour les médecins, Abonnement, Contact), les badges de confiance (Conforme RGPD, Testée médicalement, 30+ langues) et les statistiques clés (27K patients traités, 30 min temps moyen d'utilisation). Le design utilise un dégradé violet/bleu moderne.",
                commentary: "La maquette traduit une réflexion UX poussée autour de 6 profils d'utilisateurs différents (senior 65+, patient Alzheimer, maladie chronique, patient immigrant, sourd/malentendant, parent de bébé). Chaque profil a des besoins spécifiques qui ont guidé les choix de design : grands caractères pour les seniors, interface ultra-simplifiée pour Alzheimer, mode visuel sans son pour les sourds, écriture RTL pour l'arabe, 4 modes daltoniens. Cette maquette démontre ma capacité à concevoir une interface inclusive et accessible qui répond à des besoins réels.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [MediSimpleImg] },
            },
            {
                id: "medisimple-dev",
                title: "Développement de l'application MediSimple",
                legend: "Application MediSimple développée en Next.js, React et Tailwind CSS avec intégration de Claude API pour l'analyse IA des ordonnances, Tesseract pour l'OCR et Whisper pour la saisie vocale. L'application propose le scan d'ordonnance, les explications en langage simple, les rappels intelligents à 3 niveaux (zen, standard, protection) et les dashboards médecin/famille.",
                commentary: "Ce projet personnel représente ma réalisation la plus ambitieuse. Il mobilise des compétences variées : développement front-end (Next.js, React, Tailwind, shadcn/ui), intégration d'APIs d'IA (Claude API pour l'analyse, Tesseract pour l'OCR, Whisper pour le vocal), gestion de notifications (Firebase, Twilio SMS), base de données (PostgreSQL chiffré AES-256, Redis). Le plus gros défi technique a été de faire communiquer ces briques entre elles dans une architecture cohérente. Au-delà du code, j'ai mené une vraie réflexion entrepreneuriale : étude de marché (océan bleu, aucun concurrent combine toutes les fonctionnalités), modèle freemium (gratuit / 4,99€ famille / 29€ médecin / EHPAD sur devis), conformité légale (RGPD article 9, secret médical L1110-4, hébergement HDS L1111-8, droit à l'information L1111-2).",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["https://github.com/Hokoala/v0-me-me"] },
            },
        ],
    },
    {
        slug: "devflow",
        title: "DevFlow CLI",
        type: "Projet personnel",
        description: "Outil CLI en Python pour automatiser le workflow du développeur — scaffolding de projets, gestionnaire de tâches, snippets de code et historique git visuel. Ma première expérience en Python.",
        longDescription: "DevFlow est un outil en ligne de commande développé entièrement en Python avec uniquement la bibliothèque standard (zéro dépendance externe). Il regroupe quatre commandes principales : scaffolding de projets (génération automatique d'arborescences), gestionnaire de tâches en ligne de commande, sauvegarde et réutilisation de snippets de code, et visualisation de l'historique git. Ce projet représente ma première véritable expérience en Python — j'ai dû apprendre le langage, ses conventions et sa bibliothèque standard en partant de zéro pour concevoir un outil fonctionnel et utile au quotidien.",
        image: DevFlowPlaceholder,
        link: "https://github.com/Hokoala/devflow",
        tags: ["CLI", "Python", "Outil"],
        year: "2025",
        technologies: ["Python", "stdlib", "JSON", "CLI"],
        role: "Développeur — Projet personnel",
        duration: "2 semaines",
        traces: [
            {
                id: "devflow-decouverte",
                title: "Découverte de Python et conception du CLI",
                legend: "A remplir — ajoute une capture du terminal montrant DevFlow en action ou du code source Python. On y verrait la structure du projet, les commandes disponibles et l'architecture modulaire du CLI.",
                commentary: "Ce projet marque ma première expérience avec Python. J'ai appris le langage en autodidacte pour concevoir un outil concret : comprendre la syntaxe, les modules de la bibliothèque standard (argparse, json, os, subprocess), et les bonnes pratiques Python. Cette démarche d'apprentissage autonome d'un nouveau langage pour répondre à un besoin réel démontre ma capacité d'adaptation et ma curiosité technique.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [DevFlowPlaceholder] },
            },
            {
                id: "devflow-code",
                title: "Code source et fonctionnalités du CLI",
                legend: "Dépôt GitHub de DevFlow montrant le code source Python organisé en modules : scaffolding de projets, gestionnaire de tâches, snippets de code et historique git visuel. Le projet utilise zéro dépendance externe, uniquement la bibliothèque standard Python.",
                commentary: "Le résultat final est un outil CLI fonctionnel avec quatre commandes distinctes, le tout sans aucune dépendance externe. Cela démontre ma compréhension de la bibliothèque standard Python et ma capacité à structurer un projet logiciel modulaire. Le choix du zéro dépendance était volontaire pour approfondir ma maîtrise du langage plutôt que de m'appuyer sur des packages tiers.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["https://github.com/Hokoala/devflow"] },
            },
        ],
    },
    {
        slug: "ransau-systeme",
        title: "Refonte Ransau Systeme",
        type: "Stage",
        description: "Refonte complete du site de Ransau Systeme pendant mon stage — analyse du site existant, identification des points d'amélioration, puis développement de la nouvelle version en React et Tailwind CSS avec animations 3D.",
        longDescription: "Dans le cadre de mon stage chez Ransau Systeme, entreprise spécialisée en consulting, IA et logiciel pour le secteur industriel, j'ai réalisé une refonte complète de leur site web. Le travail a commencé par une analyse approfondie du site existant pour identifier les points faibles (manque de cohérence visuelle, boutons non stylisés, footer inexistant, aucune animation, responsive insuffisant). J'ai ensuite reconstruit l'ensemble de l'interface en React et Tailwind CSS, en intégrant des animations 3D, un design moderne et une navigation fluide fidèle à l'identité de l'entreprise.",
        image: RansauSysteme,
        link: "https://www.ransau-systeme.com/",
        tags: ["Web", "Design", "Stage"],
        year: "2025",
        technologies: ["React", "Tailwind CSS", "Animations 3D"],
        role: "Developpeur Front-end — Stagiaire",
        duration: "8 semaines",
        traces: [
            {
                id: "ransau-analyse",
                title: "Analyse du site actuel et points de correction",
                legend: "Capture du site actuel de Ransau Systeme montrant la page d'accueil avec la navigation, le hero section présentant l'activité de consulting/IA/logiciel, les boutons d'action et l'illustration 3D. On observe une base fonctionnelle mais avec des axes d'amélioration identifiés : manque de cohérence typographique, espacement irrégulier, absence de footer structuré, animations limitées et responsive à optimiser.",
                commentary: "Cette phase d'analyse a été essentielle avant de commencer le développement. Elle m'a permis de dresser un audit UX/UI du site existant en identifiant les points à corriger : hiérarchie visuelle à renforcer, composants à harmoniser, interactions à enrichir. Ce travail d'analyse démontre ma capacité à évaluer un produit existant avec un regard critique et à formuler des préconisations d'amélioration concrètes avant de passer au développement.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [RansauSysteme] },
            },
            {
                id: "ransau-dev",
                title: "Développement de la nouvelle version du site",
                legend: "Site web Ransau Systeme après la refonte complète : nouvelle interface développée en React et Tailwind CSS avec des composants modernes, des animations 3D, un footer complet, une navigation repensée et un design responsive.",
                commentary: "Le développement de la nouvelle version du site représente le coeur de mon stage. J'ai reconstruit l'ensemble des composants en React (navbar, hero, sections, footer, boutons), intégré des animations 3D pour dynamiser l'expérience, et assuré un rendu responsive sur tous les supports. Ce travail valide ma capacité à mener un projet de refonte de A à Z dans un contexte professionnel, de l'analyse initiale à la mise en production.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["https://www.ransau-systeme.com/"] },
            },
        ],
    },
    {
        slug: "site-momentum",
        title: "MOMENTUM",
        type: "SAE en groupe",
        description: "Projet collectif de creation d'une borne de jeu d'arcade en parkour, realisé en equipe de 5 groupes dans le cadre de la formation MMI. J'ai concu le moodboard, les assets 3D sur Blender et developpe le site web.",
        longDescription: "MOMENTUM est un projet collectif ambitieux réalisé dans le cadre de la formation MMI à Troyes. L'objectif était de concevoir et créer une véritable borne de jeu d'arcade autour d'un jeu de parkour. Le projet impliquait 5 groupes d'étudiants, chacun responsable d'un aspect différent : game design, développement du jeu, modélisation 3D, communication et développement web. Pour ma part, j'ai contribué à la direction artistique en créant le moodboard, à la production des assets 3D sur Blender, et au développement complet du site web vitrine connecté à l'API du jeu pour afficher les scores en temps réel.",
        image: SiteMomentum,
        link: "https://momentum.mmi23f03.fr/",
        tags: ["Web", "API", "Jeu"],
        year: "2024",
        technologies: ["HTML", "CSS", "JavaScript", "API REST", "Blender", "Figma"],
        role: "Developpeur Front-end & DA",
        duration: "2 mois",
        traces: [
            {
                id: "momentum-moodboard",
                title: "Moodboard et direction artistique",
                legend: "Planche d'inspiration (moodboard) réalisée pour définir l'univers visuel de MOMENTUM. On y retrouve des références à l'esthétique urbaine et nocturne, la typographie du projet (style Marathon), des captures de jeux de parkour en pixel art, des ambiances néon/cyberpunk et des textures architecturales industrielles.",
                commentary: "Ce moodboard a servi de base à toute la direction artistique du projet. Il a permis à l'ensemble des 5 groupes de partager une vision commune de l'univers visuel : tons sombres, accents néon vert/violet, ambiance urbaine. Cette étape de recherche graphique est essentielle pour garantir la cohérence visuelle entre le jeu, le site web, la borne physique et la communication. Elle démontre ma capacité à mener une réflexion créative structurée en amont du développement.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [MoodboardMomentum] },
            },
            {
                id: "momentum-blender",
                title: "Assets et graphismes 3D sur Blender",
                legend: "Captures d'écran de Blender montrant les assets 3D modélisés pour le jeu MOMENTUM : une barrière/obstacle avec 4 pieds et un plateau noir, un panneau industriel avec des bandes jaune/noir d'avertissement et des détails mécaniques, ainsi que les variantes de chaque élément (3 barrières et 3 panneaux avec différents niveaux de détail). Ces obstacles sont utilisés dans les niveaux du jeu de parkour.",
                commentary: "La modélisation 3D sur Blender m'a permis de produire les assets visuels nécessaires au jeu : obstacles, décors et éléments d'environnement. J'ai créé plusieurs variantes de chaque objet pour enrichir les niveaux sans répétition visuelle. Ce travail démontre ma capacité à utiliser un outil de création 3D professionnel et à produire des éléments graphiques cohérents avec la direction artistique définie dans le moodboard (esthétique industrielle, bandes d'avertissement jaune/noir).",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [BlenderObstacle, BlenderPanneau, BlenderVariantes] },
            },
            {
                id: "momentum-maquette",
                title: "Maquette du site web Momentum",
                legend: "Maquette complète du site web MOMENTUM présentant les différentes sections : page d'accueil avec le titre du jeu, description du gameplay, section animation avec les personnages 3D, et présentation des créateurs. Le design reprend les codes visuels du moodboard avec un fond sombre et des accents colorés.",
                commentary: "Cette maquette traduit la direction artistique en une interface web concrète. Elle montre ma capacité à passer d'une vision créative (le moodboard) à une proposition d'interface structurée et navigable, tout en respectant l'identité visuelle du projet. La maquette a servi de référence pour le développement front-end.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [MaquetteMomentum] },
            },
            {
                id: "momentum-site-v2",
                title: "Site web MOMENTUM — version finale",
                legend: "Page d'accueil du site MOMENTUM v2 avec le hero cinématique montrant un personnage en parkour dans un univers cyberpunk, la navigation (Home, Description, Création, Leaderboard), le slogan 'Run. Collect lights. Sabotage your rival. And survive the night.' et le bouton 'Initialize the protocol'. Le design reprend l'esthétique néon vert/rouge du moodboard avec des effets glitch.",
                commentary: "Cette version finale du site représente l'aboutissement de tout le travail créatif et technique sur MOMENTUM. Le site est connecté à l'API du jeu pour afficher les scores en temps réel (leaderboard). Le design intègre fidèlement la direction artistique définie dans le moodboard : ambiance sombre, accents néon, effets glitch, typographie pixelisée. Ce résultat démontre ma capacité à mener un projet web de bout en bout — du moodboard au site en production.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [SiteMomentumV2] },
            },
            {
                id: "momentum-site-lien",
                title: "Site MOMENTUM en ligne",
                legend: "Lien vers le site web MOMENTUM déployé et fonctionnel, avec le leaderboard connecté à l'API du jeu d'arcade.",
                commentary: "Le site déployé permet aux joueurs de consulter leurs scores en temps réel et de découvrir l'univers du jeu. Il consomme une API REST pour restituer les données dynamiques dans une interface cohérente avec l'univers graphique du projet.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["https://momentum.mmi23f03.fr/"] },
            },
        ],
    },
    {
        slug: "jeu-unity-3d",
        title: "Jeu Unity 3D",
        type: "SAE en groupe",
        description: "Création d'un jeu 3D avec Unity en groupe dans le cadre de la formation MMI — modélisation de scènes, gestion des collisions, scripting C# et export web.",
        longDescription: "Projet de groupe réalisé dans le cadre de la formation MMI. L'objectif était de concevoir et développer un jeu 3D complet avec Unity. Le jeu met en scène une boule dans un environnement coloré avec un système de collecte de pièces, un timer, des vies et un inventaire de pouvoirs. Le projet m'a initié aux bases du game development : modélisation de scènes 3D, gestion des collisions et de la physique, scripting en C#, interface utilisateur (HUD) et export vers le web.",
        image: UnityGame,
        link: "http://mmi23e10.mmi-troyes.fr/wr507d/",
        tags: ["Jeu", "3D"],
        year: "2024",
        technologies: ["Unity", "C#", "3D", "WebGL"],
        role: "Game Developer",
        duration: "A remplir",
        traces: [
            {
                id: "unity-jeu",
                title: "Jeu 3D développé avec Unity",
                legend: "Mockup du jeu Unity 3D sur un laptop montrant le gameplay : une boule violette dans un environnement 3D avec des collines, des sapins et un escalier. L'interface affiche un compteur de pièces (0/10), un timer (1:49), des coeurs de vie et une barre d'inventaire de pouvoirs. L'univers coloré et cartoon rappelle les jeux de plateforme.",
                commentary: "Ce projet de groupe m'a permis de découvrir le développement de jeux vidéo avec Unity. J'ai appris à manipuler un moteur 3D, à scripter des mécaniques de jeu en C# (collecte d'objets, timer, système de vies, pouvoirs), à modéliser des scènes et à exporter le jeu sur le web via WebGL. C'est une compétence complémentaire au développement web qui enrichit ma compréhension des interactions utilisateur et de la 3D.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [UnityGame] },
            },
            {
                id: "unity-web",
                title: "Jeu exporté et jouable sur le web",
                legend: "Version web du jeu Unity 3D, jouable directement dans le navigateur grâce à l'export WebGL. Le joueur peut contrôler la boule, collecter des pièces et utiliser des pouvoirs dans un temps imparti.",
                commentary: "L'export WebGL du jeu démontre la capacité à rendre un projet Unity accessible sur le web sans installation. Cette étape technique implique l'optimisation des assets, la gestion de la mémoire et la compatibilité navigateur — des compétences qui font le pont entre le game development et le développement web.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["http://mmi23e10.mmi-troyes.fr/wr507d/"] },
            },
        ],
    },
    {
        slug: "portfolio-3d",
        title: "Portfolio 3D",
        type: "Projet personnel",
        description: "Portfolio interactif en 3D réalisé avec Unity — un astronaute explore une planète pour découvrir mes projets, une manière originale de présenter mon travail.",
        longDescription: "Au lieu d'un portfolio web classique, j'ai voulu créer une expérience immersive et originale. Le joueur incarne un astronaute qui explore la 'Planète Portfolio' dans un environnement spatial. En se déplaçant sur la planète, il découvre mes 7 projets en interagissant avec des éléments 3D (cristaux, drapeaux, objets flottants). Ce projet personnel démontre ma capacité à aller au-delà du développement web traditionnel pour créer des expériences utilisateur uniques.",
        image: Portfolio3D,
        link: "/explore",
        tags: ["Jeu", "3D"],
        year: "2024",
        technologies: ["Unity", "C#", "3D", "WebGL"],
        role: "Développeur — Projet personnel",
        duration: "A remplir",
        traces: [
            {
                id: "portfolio3d-jeu",
                title: "Portfolio 3D interactif",
                legend: "Capture du portfolio 3D réalisé avec Unity : un personnage astronaute sur une planète ('Planète Portfolio') dans un environnement spatial. On voit le nom 'Jean Michel Le', un compteur '0/7 découvertes', un drapeau et des objets 3D flottants (cristaux, hexagones). Le joueur explore la planète pour découvrir les 7 projets du portfolio.",
                commentary: "Ce portfolio 3D est une manière originale de présenter mes projets : au lieu d'un site classique, l'utilisateur contrôle un personnage qui explore une planète et découvre chaque projet en interagissant avec des éléments 3D. Ce travail démontre ma capacité à utiliser Unity pour créer une expérience interactive et immersive, allant au-delà du simple développement web. La conception du gameplay (exploration, collecte de découvertes) montre aussi ma compréhension du game design.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [Portfolio3D] },
            },
        ],
    },
    {
        slug: "api-spotify",
        title: "Spotify Stats",
        type: "Projet personnel",
        description: "Application web de statistiques musicales — un Spotify Wrapped disponible toute l'année. Connexion OAuth 2.0, top artistes/titres, filtres par période et export en image.",
        longDescription: "Spotify propose Spotify Wrapped pour voir ses stats d'écoute, mais seulement une fois par an en décembre. Je me suis dit : pourquoi attendre un an ? J'ai donc créé une application qui permet de voir ses statistiques à tout moment. L'utilisateur se connecte avec son compte Spotify via OAuth 2.0 — c'est sécurisé, je ne vois jamais son mot de passe. On peut voir son Top 5 artistes et Top 5 titres, son genre préféré et son temps d'écoute, filtrer par période (4 semaines, 6 mois, ou depuis toujours) et exporter ses stats en image pour les partager sur les réseaux. Côté technique, le plus gros défi était l'authentification OAuth — gérer les tokens et leur expiration. J'ai aussi dû convertir les images en Base64 pour l'export, à cause des problèmes de CORS.",
        image: SpotifyStats,
        link: "https://api-spotify-zeta.vercel.app/dashboard",
        tags: ["API", "Web", "Music"],
        year: "2024",
        technologies: ["React", "TypeScript", "Tailwind CSS", "API Spotify", "OAuth 2.0"],
        role: "Développeur Full-stack",
        duration: "3 semaines",
        traces: [
            {
                id: "spotify-connexion",
                title: "Page de connexion OAuth 2.0 Spotify",
                legend: "Page d'accueil de l'application Spotify Stats avec le bouton de connexion via Spotify. On voit l'interface épurée avec le logo Spotify, le titre 'Spotify Stats', le sous-titre 'Découvrez vos statistiques d'écoute' et le bouton vert 'Se connecter avec Spotify' sur un fond sombre avec un cercle lumineux vert.",
                commentary: "Cette page illustre l'intégration de l'authentification OAuth 2.0 de Spotify. L'utilisateur se connecte avec son propre compte Spotify de manière sécurisée — l'application ne voit jamais son mot de passe, elle reçoit uniquement un token d'accès temporaire. La gestion des tokens (obtention, rafraîchissement, expiration) a été le principal défi technique du projet. Cette compétence en authentification sécurisée est très demandée en entreprise.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "image", sources: [SpotifyStats] },
            },
            {
                id: "spotify-dashboard",
                title: "Dashboard des statistiques d'écoute",
                legend: "A remplir — ajoute une capture du dashboard montrant le Top 5 artistes, Top 5 titres, genre préféré, temps d'écoute et les filtres par période (4 semaines / 6 mois / depuis toujours).",
                commentary: "Le dashboard est le coeur de l'application. Il consomme plusieurs endpoints de l'API Spotify pour agréger les données d'écoute et les présenter de manière claire. L'utilisateur peut filtrer par période et exporter ses stats en image. Pour l'export, j'ai dû résoudre un problème de CORS en convertissant les images d'artistes en Base64. Si c'était à refaire, j'ajouterais des graphiques pour visualiser l'évolution des écoutes dans le temps.",
                competencies: ["Développer — Développer pour le web et les médias numériques", "Entreprendre — Entreprendre dans le secteur du numérique"],
                media: { type: "link", sources: ["https://api-spotify-zeta.vercel.app/dashboard"] },
            },
        ],
    },
];

export const tagColors: Record<string, string> = {
    "Web": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "API": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Jeu": "bg-green-500/20 text-green-300 border-green-500/30",
    "Music": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "Design": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "IA": "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "SaaS": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "Santé": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "Stage": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "CLI": "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    "Python": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "Outil": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    "3D": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

export function getProjectBySlug(slug: string): UnivProject | undefined {
    return univProjects.find(p => p.slug === slug);
}

export function getAllCompetencies(): string[] {
    const set = new Set<string>();
    for (const p of univProjects) {
        for (const t of p.traces) {
            for (const c of t.competencies) {
                set.add(c);
            }
        }
    }
    return [...set].sort();
}

export function getAllTypes(): ProjectType[] {
    return [...new Set(univProjects.map(p => p.type))];
}

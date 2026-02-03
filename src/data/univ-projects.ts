import ApiSpotify from "../assets/api-spotify.png";
import SiteMomentum from "../assets/SiteMomentum.png";

export interface UnivProject {
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
}

export const univProjects: UnivProject[] = [
    {
        slug: "site-momentum",
        title: "Site Momentum",
        description: "Développement d'une plateforme web connectée à une API pour le jeu de parkour sur borne d'arcade MOMENTUM.",
        longDescription: "MOMENTUM est un projet de jeu de parkour sur borne d'arcade développé dans le cadre de ma formation MMI. J'ai été chargé de créer la plateforme web associée, permettant aux joueurs de consulter leurs scores, de découvrir le jeu et d'accéder à diverses fonctionnalités connectées à l'API du jeu. Le site offre une expérience immersive qui reflète l'univers dynamique et énergique du jeu.",
        image: SiteMomentum,
        link: "https://momentum.mmi23f03.fr/",
        tags: ["Web", "API", "Jeu"],
        year: "2024",
        technologies: ["HTML", "CSS", "JavaScript", "API REST"],
        role: "Développeur Front-end",
        duration: "2 mois"
    },
    {
        slug: "api-spotify",
        title: "Api Spotify",
        description: "Projet d'intégration de l'API Spotify pour créer une application web permettant aux utilisateurs de rechercher des artistes, des albums et des playlists, et d'écouter des extraits musicaux.",
        longDescription: "Ce projet universitaire m'a permis d'explorer en profondeur l'intégration d'APIs tierces dans une application web. L'application permet aux utilisateurs de se connecter avec leur compte Spotify, de rechercher leurs artistes et albums favoris, de parcourir des playlists et d'écouter des extraits de 30 secondes. J'ai implémenté le flux d'authentification OAuth 2.0 et géré les différents endpoints de l'API Spotify pour offrir une expérience utilisateur fluide et complète.",
        image: ApiSpotify,
        link: "https://github.com/Hokoala/API-SPOTIFY",
        tags: ["API", "Web", "Music"],
        year: "2024",
        technologies: ["JavaScript", "API Spotify", "OAuth 2.0", "HTML/CSS"],
        role: "Développeur Full-stack",
        duration: "3 semaines"
    }
];

export const tagColors: Record<string, string> = {
    "Web": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "API": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Jeu": "bg-green-500/20 text-green-300 border-green-500/30",
    "Music": "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "Design": "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

export function getProjectBySlug(slug: string): UnivProject | undefined {
    return univProjects.find(p => p.slug === slug);
}

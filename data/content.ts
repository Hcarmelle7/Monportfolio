//fichier de données pour le portfolio, contenant mes informations personnelles, mes compétences et mes projets
export const personalInfo = {
    name: "Carmelle Helle",
    role: "Ingénieur Informatique & Développeur Full Stack",
    bio: "Passionné par l'architecture logicielle et le développement web moderne. Je transforme des idées complexes en expériences utilisateur fluides avec React, Symfony et Flutter.",
    image: "/images/profile.png",
    socials: {
        github: "https://github.com/Hcarmelle7",
        linkedin: "https://linkedin.com/in/carmelle-helle",
        email: "mailto:carmellerosy@icloud.com"
    }
};

//liste de mes compétences avec sujet, niveau de compétence (A) et niveau maximum (fullMark), pour une utilisation dans un graphique radar
export const skills = [
    { subject: 'Frontend (React/Next)', A: 90, fullMark: 100 },
    { subject: 'Backend (Node/PHP/Symfony)', A: 90, fullMark: 100 },
    { subject: 'Mobile (Flutter)', A: 90, fullMark: 100 },
    { subject: 'DevOps/Tools', A: 60, fullMark: 100 },
    { subject: 'Algorithms (C/C++)', A: 70, fullMark: 100 },
    { subject: 'UI/UX Design', A: 65, fullMark: 100 },
];

//liste de mes projets avec id, titre, description, technologies utilisées, lien et image
export const projects = [

    {
        id: 1,
        title: "Learnify - Application Mobile",
        description: "Développement Front-end complet d'une application mobile. Gestion d'état complexe et optimisation des performances.",
        tech: ["Flutter", "Dart", "Firebase"],
        link: "#",
        image: "/images/Learnify_logo_purple.png"
    },
    {
        id: 2,
        title: "Catalogue_musicale - SaaS Platform",
        description: "Développement Front-end et backend d'une plateforme de catalogue musical. Gestion de l'option Karaoké et intégration d'une base de données pour les utilisateurs et les chansons.",
        tech: ["C#", "GTK4", "SQLite", "Supabase"],
        link: "#",
        image: "/images/musicaly.jpg"
    },
    {
        id: 3,
        title: "Artify - Application web",
        description: "Developpement front-end et back-end d'une application web de gestion de galerie d'art. Intégration d'une API tierce pour la reconnaissance d'images.",
        tech: ["React", "Node.js", "Tailwind", "mySQL"],
        link: "#",
        image: "/images/Artify.png"
    },
    {
        id: 4,
        title: "Artify - Application web",
        description: "Developpement front-end et back-end d'une application web de gestion de galerie d'art. Intégration d'une API tierce pour la reconnaissance d'images.",
        tech: ["React", "Node.js", "Tailwind", "mySQL"],
        link: "#",
        image: "/images/Artify.png"
    },
];
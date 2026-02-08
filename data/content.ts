// data/content.ts
export const personalInfo = {
    name: "Carmelle Helle",
    role: "Ingénieur Informatique & Développeur Full Stack",
    bio: "Passionné par l'architecture logicielle et le développement web moderne. Je transforme des idées complexes en expériences utilisateur fluides avec React, Symfony et Flutter.",
    image: "/images/profile.png", // Remplace par ta vraie image
    socials: {
        github: "https://github.com/Hcarmelle7",
        linkedin: "https://linkedin.com/in/carmelle-helle",
        email: "mailto:carmellerosy@icloud.com"
    }
};

export const skills = [
    { subject: 'Frontend (React/Next)', A: 90, fullMark: 100 },
    { subject: 'Backend (PHP/Symfony)', A: 85, fullMark: 100 },
    { subject: 'Mobile (Flutter)', A: 85, fullMark: 100 },
    { subject: 'DevOps/Tools', A: 60, fullMark: 100 },
    { subject: 'Algorithms (C/C++)', A: 70, fullMark: 100 },
    { subject: 'UI/UX Design', A: 70, fullMark: 100 },
];

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
];
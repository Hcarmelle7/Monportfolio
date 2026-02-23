//fichier de données pour le portfolio, contenant mes informations personnelles, mes compétences et mes projets
export const AboutMe = {
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

export const about = {
  title: "À propos de moi",
  description: [
    "Hello ! Je m'appelle Gertrude Carmelle Rose Helle, étudiante ingénieure passionnée par la technologie de A à Z. Mon ambition ? Fonder un jour ma propre marque Tech d'envergure mondiale.",
    "Pour bâtir des bases solides, j'ai d'abord exploré le \"matériel\" via un DUT et une Licence en Génie Électrique (GEII) afin de maîtriser le cœur physique des machines.",
    "Puis, la curiosité l'a emporté ! Pour comprendre ce qui se passe de l'autre côté de l'écran, j'ai consacré une année intensive à me former en développement Web et Mobile. Mon but : maîtriser le code pour concrétiser mes propres idées.",
    "Aujourd'hui, j'ai fait le grand saut en intégrant le cycle ingénieur de l'ESIEA en France pour repousser mes limites. Désormais capable de lier un matériel de qualité à une architecture logicielle moderne, j'avance chaque jour avec des idées plein la tête !"
  ],
  quickFacts: [
    { label: "L'objectif", value: "Fonder ma marque Tech" },
    { label: "Background", value: "Électronique & GEII" },
    { label: "Le switch", value: "Dev Full Stack & Mobile" },
    { label: "Aujourd'hui", value: "Ingénierie ESIEA (France)" }
  ]
};

//liste de mes certifications et spécialisations dans le développement web, avec des titres, des durées, des compétences associées, des icônes et des couleurs pour chaque certification
export const webCertifications = {
    title: "Certifications & Spécialisations",
    subtitle: "Cursus intensifs d'un an axés sur la maîtrise complète du cycle de développement",
    items: [
        {
            title: "Développeur Web Fullstack JavaScript",
            duration: "4 mois",
            skills: ["React.js", "Node.js", "Next.js", "Express.js", "MongoDB"],
            icon: "Code2",
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Développeur Web Fullstack PHP",
            duration: "4 mois",
            skills: ["PHP 8", "Symfony", "Laravel", "MySQL", "Architecture MVC"],
            icon: "Database",
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Développeur Mobile Flutter",
            duration: "4 mois",
            skills: ["Dart", "Flutter", "UI/UX Mobile", "Performances natives"],
            icon: "Smartphone",
            color: "from-pink-400 to-pink-600"
        }
    ]
};

//liste de mes compétences avec sujet, niveau de compétence (A) et niveau maximum (fullMark), pour une utilisation dans un graphique radar
export const DeveloperSkills = {
    title: "Développement Web & Mobile",
    subtitle: "Compétences techniques affinées par des projets concrets et une formation rigoureuse",
    subjects: [

        { subject: 'Frontend (React/Next)', A: 90, fullMark: 100 },
        { subject: 'Backend (Node/PHP/Symfony)', A: 90, fullMark: 100 },
        { subject: 'Mobile (Flutter)', A: 90, fullMark: 100 },
        { subject: 'DevOps/Tools', A: 60, fullMark: 100 },
        { subject: 'Algorithms (C/C++)', A: 70, fullMark: 100 },
        { subject: 'UI/UX Design', A: 65, fullMark: 100 },
    ]
};

//liste de mes projets de développement web et mobile, avec des titres, des descriptions, des technologies utilisées, des liens et des images pour chaque projet
export const devProjects = {
    title: "Projets de Développement Web & Mobile",
    subtitle: "Une sélection de projets démontrant ma capacité à concevoir et implémenter des solutions complètes",
    projects: [

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
    ]
};

//secteur de compétences pour les systèmes embarqués et le bas niveau, avec des catégories, des compétences associées et des icônes pour chaque catégorie
export const embeddedSkills = {
    title: "Systèmes Embarqués & Bas Niveau",
    subtitle: "Expertise matérielle issue de ma formation GEII et de mon cycle ingénieur",
    categories: [
        {
            name: "Microcontrôleurs & Cartes",
            icon: "Cpu",
            skills: ["STM32", "Arduino", "Raspberry Pi", "Architecture ARM"]
        },
        {
            name: "Programmation Bas Niveau",
            icon: "TerminalSquare",
            skills: ["C", "C++", "Assembleur", "Optimisation mémoire"]
        },
        {
            name: "Protocoles & Temps Réel",
            icon: "Activity",
            skills: ["I2C, SPI, UART", "Notions OS Temps Réel (RTOS)", "Interruptions matérielles"]
        },
        {
            name: "Outils de Simulation",
            icon: "MonitorOff",
            skills: ["Proteus", "MATLAB", "LabVIEW", "Automgen"]
        }
    ]
};

export const hardwareProjects = {
    title: "Projets Robotique & Électronique",
    subtitle: "Conception de systèmes autonomes et interfaçage matériel",
    projects: [
        {
            title: "Drone de détection de nids-de-poule",
            context: "Projet de fin de DUT GEII",
            description: "Conception et programmation d'un drone capable de détecter et mesurer les nids-de-poule sur les routes pour faciliter la maintenance des infrastructures.",
            objectives: [
                "Traitement de signal et algorithmique de détection",
                "Asservissement et stabilité du vol",
                "Interfaçage des capteurs de distance et caméras"
            ],
            techStack: ["C++", "Microcontrôleurs", "Capteurs IR/Ultrasons", "Électronique embarquée"],
            icon: "Plane"
        },
        {
            title: "Système de Backup Électrique Portatif",
            context: "Projet de Licence Technologique",
            description: "Étude et conception complète d'un système autonome de secours électrique, pensé pour être portatif et fiable en environnement isolé.",
            objectives: [
                "Dimensionnement des composants de puissance",
                "Gestion de la charge/décharge (BMS)",
                "Sécurisation du circuit électrique"
            ],
            techStack: ["Électrotechnique", "Électronique de puissance", "Proteus", "CAO"],
            icon: "BatteryCharging"
        }
    ]
};

export const embeddedEducation = {
    title: "Diplômes & Formation Technique",
    subtitle: "Un socle académique solide en électronique couplé à une ingénierie logicielle",
    items: [
        {
            period: "Depuis 2025",
            degree: "Cycle Ingénieur (Bac+5)",
            school: "ESIEA (Campus Ivry)",
            description: "Spécialisation prévue en systèmes embarqués et autonomes. Tronc commun en architecture des systèmes et génie logiciel.",
            icon: "Cpu",
            color: "from-purple-500 to-pink-500" // Thème logiciel/hybride
        },
        {
            period: "2022 - 2023",
            degree: "Licence Technologique GEII",
            school: "IUT Douala",
            description: "Génie Électrique et Informatique Industrielle. Étude, conception et prototypage complet de systèmes.",
            icon: "Zap",
            color: "from-cyan-500 to-blue-500"
        },
        {
            period: "2020 - 2022",
            degree: "DUT GEII",
            school: "IUT Douala",
            description: "Acquisition des fondamentaux en électronique analogique/numérique, électrotechnique et automatismes.",
            icon: "Settings2",
            color: "from-emerald-500 to-teal-500"
        }
    ]
};
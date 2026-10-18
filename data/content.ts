import {
    SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
    SiPhp, SiLaravel, SiSymfony, SiFlutter,
    SiPython, SiCplusplus, SiGit, SiTailwindcss,
    SiBootstrap, SiC, SiArduino,
    SiRaspberrypi,
    SiLinux,
    SiArm,
    SiSqlite
} from "react-icons/si";
import {
    FaJava,
    FaMicrochip,
    FaRobot,
    FaWaveSquare,
    FaChartLine,
    FaProjectDiagram
} from "react-icons/fa";


//fichier de données pour le portfolio, contenant mes informations personnelles, mes compétences et mes projets
export const AboutMe = {
    name: "Carmelle HELLE",
    role: "Ingénieure Informatique · Systèmes Embarqués & Développement Full Stack",
    bio: "Passionnée par l'architecture logicielle et le développement web moderne. Je transforme des idées complexes en expériences utilisateur fluides avec React, Symfony et Flutter.",
    image: "/images/profile.webp",
    socials: {
        github: "https://github.com/Hcarmelle7",
        linkedin: "https://linkedin.com/in/carmelle-helle",
        email: "mailto:carmellerosy@icloud.com"
    }
};

export const about = {
    title: "Bon, je me présente ?",
    description: [
        "Moi, c'est Gertrude Carmelle Rose Helle, ",
        "Je suis étudiante ingénieure en informatique à l'ESIEA, en majeure Systèmes Embarqués et Autonomes. Passionnée par la tech de bout en bout, j'aime transformer une idée en quelque chose de concret : faire dialoguer les composants électroniques au ras du processeur avec des interfaces modernes à l'écran.",
        "J'ai commencé par explorer le côté matériel avec un DUT puis une Licence en Génie Électrique et Informatique Industrielle (GEII) à l'IUT de Douala. Une fois le cœur des machines apprivoisé, j'ai voulu voir ce qui se passe de l'autre côté de l'écran : j'ai donc enchaîné sur des formations intensives en développement Web et Mobile Full Stack pour créer mes propres outils.",
        "Aujourd'hui, j'apprends à vitesse grand V, je code, je teste et je construis mes projets, du C bas niveau jusqu'aux architectures logicielles. Et un jour, qui sait, je lancerai peut-être ma propre marque tech mondiale. Autant commencer quelque part !",
        "Et oui, j'aime le violet...😅"
    ],
    quickFacts: [
        { label: "L'objectif", value: "Fonder ma marque Tech" },
        { label: "Background", value: "Électronique & GEII" },
        { label: "Le switch", value: "Dev Full Stack & Mobile" },
        { label: "Aujourd'hui", value: "Ingénierie ESIEA (France)" }
    ]
};



// Ma liste de compétences
export const stackWeb = [
    { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
    { name: "Symfony", icon: SiSymfony, color: "text-white" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "C", icon: SiC, color: "text-[#00599C]" },
    { name: "Java", icon: FaJava, color: "text-[#f89820]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Bootstrap CSS", icon: SiBootstrap, color: "text-[#06B6D4]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "SQL", icon: SiSqlite, color: "text-[#00599C]" },
];
export const webStacks = stackWeb;

export const stackEmbarque = [
    { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Arduino", icon: SiArduino, color: "text-[#00979D]" },
    { name: "Microcontrôleurs", icon: FaMicrochip, color: "text-[#10B981]" },
    { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-[#C51A4A]" },
    { name: "Architecture ARM", icon: SiArm, color: "text-[#0091BD]" },
    { name: "Linux Embarqué", icon: SiLinux, color: "text-[#FCC624]" },
    { name: "MATLAB", icon: FaChartLine, color: "text-[#D97736]" },
    { name: "LabVIEW", icon: FaProjectDiagram, color: "text-[#FFD100]" },
    { name: "Mécatronique", icon: FaRobot, color: "text-[#6366F1]" },
    { name: "Signaux & Systèmes", icon: FaWaveSquare, color: "text-[#EC4899]" }
];
export const engineeringStacks = stackEmbarque;

//liste de mes certifications et spécialisations dans le développement web, avec des titres, des durées, des compétences associées, des icônes et des couleurs pour chaque certification
export const certificationsDeveloppeur = {
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
export const webCertifications = certificationsDeveloppeur;

//liste de mes compétences avec sujet, niveau de compétence (A) et niveau maximum, pour une utilisation dans un graphique radar
export const competencesDeveloppeur = {
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
export const DeveloperSkills = competencesDeveloppeur;

//liste de mes projets de développement web et mobile, avec des titres, des descriptions, des technologies utilisées, des liens et des images pour chaque projet
export const projetsDeveloppeur = {
    title: "Projets de Développement Web & Mobile",
    subtitle: "Une sélection de projets illustrant la réalisation de solutions complètes",
    projects: [

        {
            id: 1,
            title: "Learnify - Application Mobile",
            description: "Développement Front-end complet d'une application mobile. Gestion d'état complexe et optimisation des performances.",
            tech: ["Flutter", "Dart", "Firebase"],
            link: "https://github.com/Hcarmelle7/Learnify",
            image: "/images/learnify.webp"
        },
        {
            id: 2,
            title: "Music Player",
            description: "Développement Front-end et backend d'une plateforme de lecture et catalogue musical. Gestion de l'option Karaoké et intégration d'une base de données pour les utilisateurs et les chansons.",
            tech: ["C", "GTK4", "SQLite", "Supabase"],
            link: "https://github.com/Hcarmelle7/Music-Player",
            image: "/images/musicaly.webp"
        },
        {
            id: 3,
            title: "ArtConnect - Application web",
            description: "Developpement front-end et back-end d'une application web de gestion de galerie d'art. Intégration d'une API tierce pour la reconnaissance d'images.",
            tech: ["React", "Node.js", "Tailwind", "mySQL"],
            link: "https://github.com/Hcarmelle7/Artconnect_Frontend",
            image: "/images/artify.webp"
        },
        {
            id: 4,
            title: "Portfolio - Site Web Interactif",
            description: "Conception et développement de mon portfolio personnel moderne avec mode sombre, glassmorphism et animations interactives.",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
            link: "https://github.com/Hcarmelle7/Monportfolio",
            liveLink: "https://carmelledev.vercel.app",
            image: "/images/portfolio.webp"
        },

    ]
};
export const devProjects = projetsDeveloppeur;

//secteur de compétences pour les systèmes embarqués et le bas niveau, avec des catégories, des compétences associées et des icônes pour chaque catégorie
export const competencesEmbarque = {
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
export const embeddedSkills = competencesEmbarque;

export const projetsEmbarque = {
    title: "Projets Robotique & Électronique",
    subtitle: "Conception de systèmes autonomes et interfaçage matériel",
    projects: [
        {
            title: "Smart Energy Guardian",
            context: "Système Embarqué & Domotique",
            description: "Système domotique préventif de délestage électrique sur microcontrôleur, accompagné de sa simulation interactive.",
            objectives: [
                "Développement Bare-Metal exclusif en API Low-Layer (LL) sans surcouche HAL.",
                "Architecture non-bloquante (machine d'états asynchrone) et filtrage ADC.",
                "Implémentation d'un Interlock matériel sécurisant le réseau contre les surcharges."
            ],
            techStack: [
                "C Bare-Metal",
                "STM32L053R8",
                "LL API",
                "Timers & ISR",
                "I2C / PWM"
            ],
            icon: "Cpu",
            demoLink: "/demo",
            githubLink: "https://github.com/Hcarmelle7/Smart-Energy-Guardian"
        },
        {
            title: "Drone de détection de nids-de-poule",
            context: "Projet de fin de DUT GEII",
            description: "Conception et programmation d'un drone capable de détecter et mesurer les nids-de-poule sur les routes pour faciliter la maintenance des infrastructures.",
            objectives: [
                "Traitement de signal et algorithmique de détection",
                "Asservissement et stabilité du vol",
                "Interfaçage des capteurs de distance et caméras"
            ],
            techStack: ["C++", "Microcontrôleurs", "Capteurs Ultrasons", "Électronique embarquée"],
            icon: "Plane",
            githubLink: "https://github.com/Hcarmelle7"
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
export const hardwareProjects = projetsEmbarque;

export const formationsEmbarque = {
    title: "Diplômes & Formation Technique",
    subtitle: "Un socle académique solide en électronique couplé à une ingénierie logicielle",
    items: [
        {
            period: "Depuis 2025",
            degree: "Cycle Ingénieur (Bac+5)",
            school: "ESIEA (Campus d'Ivry-sur-Seine, France)",
            description: "Spécialisation prévue en systèmes embarqués et autonomes. Tronc commun en architecture des systèmes et génie logiciel.",
            icon: "Cpu",
            color: "from-purple-500 to-pink-500"
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
            icon: "Cpu",
            color: "from-emerald-500 to-teal-500"
        }
    ]
};
export const embeddedEducation = formationsEmbarque;

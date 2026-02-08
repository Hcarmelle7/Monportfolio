# 🚀 Portfolio Développeur - Next.js & Framer Motion

![Project Status](https://img.shields.io/badge/Status-Work_in_Progress-yellow)
![Framework](https://img.shields.io/badge/Next.js-14-black)
![Styling](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![Animation](https://img.shields.io/badge/Framer-Motion-backend)

Un portfolio moderne, immersif et performant conçu pour présenter un profil de Développeur Full Stack & Ingénieur. Ce projet met l'accent sur une UI/UX soignée ("Cyberpunk/Neon aesthetics") et des animations fluides.

> **Note :** Ce projet est actuellement en développement actif. Les projets présentés sont des placeholders en attendant l'intégration des déploiements réels sur Vercel.

## ✨ Fonctionnalités Clés

- **⚡ Next.js 14 (App Router) :** Architecture moderne, Server Components et optimisation SEO.
- **🎨 Tailwind CSS :** Styling utilitaire pour un design responsive et maintenable.
- **Délire Visuel 3D :**
<!--  - **Tunnel Infini :** Un arrière-plan 3D qui avance en fonction du scroll (Scroll-linked animation). -->
  - **Spotlight Effect :** Effet de lumière interactif sur les cartes projets qui suit la souris.
  - **Radar Chart :** Visualisation des compétences via `recharts`.
- **📱 Fully Responsive :** Adapté pour mobile, tablette et desktop.
- **Dark Mode Native :** Interface sombre immersive par défaut.

## 🛠️ Stack Technique

* **Framework :** [Next.js](https://nextjs.org/)
* **Langage :** [TypeScript](https://www.typescriptlang.org/)
* **Styles :** [Tailwind CSS](https://tailwindcss.com/)
* **Animations :** [Framer Motion](https://www.framer.com/motion/)
* **Graphiques :** [Recharts](https://recharts.org/)
* **Icônes :** [Lucide React](https://lucide.dev/)

## 🚀 Installation & Démarrage

Pour lancer ce projet localement :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-username/mon-portfolio.git](https://github.com/votre-username/mon-portfolio.git)
    cd mon-portfolio
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

4.  Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📂 Structure du Projet

L'architecture suit les bonnes pratiques Next.js App Router :

├── app/ # Pages et Layouts (App Router) 
      │ 
      
      ├── globals.css # Styles globaux & variables CSS 
      │ 
      ├── layout.tsx # Structure racine (Fonts, Metadata) 
      │ 
      └── page.tsx # Page d'accueil 

├── components/ 
      │ 
      
      ├── layout/ # Navbar, Footer 
      │
      ├── sections/ # Hero, Skills, Projects, Contact 
      │ 
      └── ui/ # Composants réutilisables (Tunnel, Spotlight, Buttons) 

├── data/ 
      │ 
      
      └── content.ts # 📝 TOUTES les données (Textes, Projets) sont ici 
      
├── lib/ 
      │ 
      
      └── utils.ts # Utilitaires (cn helper pour Tailwind) 
      
└── public/ # Images et assets statiques


## ⚙️ Personnalisation

Tout le contenu textuel est centralisé pour faciliter la modification sans toucher au code structurel.

1.  Ouvrez le fichier `data/content.ts`.
2.  Modifiez l'objet `personalInfo` pour vos informations.
3.  Mettez à jour le tableau `projects` pour ajouter vos vrais projets et des liens vers ceux déjà déployés.
4.  Ajustez les `skills` pour le graphique radar.

Exemple :
```typescript
export const personalInfo = {
  name: "Votre Nom",
  role: "Développeur Full Stack",
  // ...
};


🔜 Roadmap (À venir)
- Remplacer les projets placeholder par les déploiements Vercel réels.

- Ajouter une page de blog (via MDX).

- Intégration d'un formulaire de contact fonctionnel (ex: EmailJS ou Resend).

- Optimisation finale des assets pour un score Lighthouse de 100%.

📄 Licence
Ce projet est sous licence MIT. N'hésitez pas à l'utiliser pour votre propre portfolio !

Développé avec ❤️ et beaucoup de café.

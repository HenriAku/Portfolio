export interface Project {
	slug: string;
	titre: string;
	description: string;
	role: string;
	duree: string;
	techno: string[];
	Contexte: string;
	imagePrincipale: string;
	images: string[];
	contenuComplet: string;
	lien: string;
}

export const Projets: Project[] = [
	{
		slug: "projet-1",
		titre: "LandingPage DevKit",
		description: "Une landing page pour telecharger un DevKit, un outil qui permet de créer des applications web plus vite.",
		role: "Développeur Front-End",
		duree: "3 jours",
		techno: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
		imagePrincipale: "/images/projet1/home.png",
		images: ["/images/projet1/demo.png", "/images/projet1/faq.png"],
		contenuComplet: "Ce projet consistait à créer une landing page pour promouvoir et permettre le téléchargement d'un DevKit. Le DevKit est un ensemble d'outils et de ressources qui facilite le développement d'applications web. La landing page devait être attrayante, informative et inciter les utilisateurs à télécharger le DevKit.",
		lien: "https://dev-kit-web.netlify.app/",
		Contexte: "Le projet a été réalisé dans le cadre d'un défi de développement web visant à créer une landing page fonctionnelle en un temps limité. L'objectif était de démontrer la capacité à concevoir et développer rapidement une interface utilisateur attrayante et efficace."
	},
	{
		slug: "projet-2",
		titre: "La roch' Produits Artisanaux",
		description: "Un site web pour une entreprise de produits artisanaux, mettant en avant leurs produits et leur histoire.",
		role: "Développeur Front-End",
		duree: "10 jours",
		techno: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "Supabase"],
		imagePrincipale: "/images/projet2/Home.png",
		images: ["/images/projet2/Panier.png", "/images/projet2/Produit.png"],
		contenuComplet: "Ce projet consistait à créer un site web pour une entreprise spécialisée dans les produits artisanaux. Le site devait présenter les différents produits, raconter l'histoire de l'entreprise et permettre aux utilisateurs de passer des commandes en ligne. L'objectif était de créer une expérience utilisateur agréable et de mettre en valeur la qualité et l'authenticité des produits proposés.",
		lien: "https://dev-kit-web.netlify.app/",
		Contexte: "Le projet a été réalisé dans le cadre d'une collaboration avec l'entreprise La roch', qui souhaitait moderniser sa présence en ligne et offrir une plateforme de vente en ligne à ses clients. Le site devait refléter l'identité de l'entreprise et faciliter la navigation pour les utilisateurs."
	},
	{
		slug: "projet-3",
		titre: "Giant (Projet d'ecole)",
		description: "Un projet scolaire visant à recréer un site web pour une entreprise fictive, mettant en avant leurs services et produits et en améliorant leur visibilité en ligne.",
		role: "Développeur Front-End",
		duree: "7 jours",
		techno: ["PHP", "CodeIgniter", "Bootstrap", "PostgreSQL", "HTML", "CSS"],
		imagePrincipale: "/images/projet3/Boutique.png",
		images: ["/images/projet3/Produit.png", "/images/projet3/DashBoard.png"],
		contenuComplet: "Ce projet consistait à recréer un site web pour une entreprise fictive dans le cadre d'un projet scolaire. L'objectif était de mettre en pratique les compétences acquises en développement web, en utilisant des technologies telles que PHP, CodeIgniter et PostgreSQL. Le site devait présenter les services et produits de l'entreprise, tout en améliorant sa visibilité en ligne et en offrant une expérience utilisateur optimale.",
		lien: "https://github.com/HenriAku/Giant",
		Contexte: "Le projet a été réalisé dans le cadre d'un cours de développement web, où les étudiants devaient travailler en équipe pour créer un site web fonctionnel pour une entreprise fictive. L'objectif était de simuler un environnement professionnel et de développer des compétences en gestion de projet, en collaboration et en résolution de problèmes techniques."
	},
	{
		slug: "projet-4",
		titre: "InazumaDle Site web",
		description: "Un site web pour telecharger un jeux de devinette, mettant en avant les fonctionnalités du jeu et permettant aux utilisateurs de le télécharger.",
		role: "Développeur Front-End",
		duree: "7 jours",
		techno: ["JavaScript", "HTML", "CSS"],
		imagePrincipale: "/images/projet4/accueil.png",
		images: ["/images/projet4/timer.png", "/images/projet4/contact.png"],
		contenuComplet: "Ce projet consistait à créer un site web pour promouvoir et permettre le téléchargement d'un jeu de devinette appelé InazumaDle. Le site devait présenter les différentes fonctionnalités du jeu, fournir des instructions sur la façon de jouer et offrir un lien de téléchargement pour les utilisateurs intéressés. L'objectif était de créer une expérience utilisateur engageante et de susciter l'intérêt pour le jeu.",
		lien: "https://inazumadle-web.netlify.app/",
		Contexte: "Le projet a été réalisé dans le cadre d'un défi de développement web visant à créer un site web fonctionnel pour un jeu en ligne. L'objectif était de démontrer la capacité à concevoir et développer rapidement une interface utilisateur attrayante et informative, tout en mettant en avant les fonctionnalités du jeu et en facilitant le téléchargement pour les utilisateurs."
	},
	{
		slug: "projet-5",
		titre: "Salamander Esport (Stage)",
		description: "Un site web pour une association d'esport, présentant les événements et les équipes.",
		role: "Développeur Front-End",
		duree: "2 mois",
		techno: [ "Backend", "PHP", "HTML", "CSS", "TypeScript", "Bulma CSS", "MySQL"],
		imagePrincipale: "/images/projet5/accueil.png",
		images: ["/images/projet5/admin.png", "/images/projet5/classement.png"],
		contenuComplet: "Ce projet consistait à créer un site web pour une association d'esport appelée Salamander Esport. Le site devait présenter les différents événements organisés par l'association, les équipes participantes et les résultats des compétitions. L'objectif était de fournir une plateforme en ligne pour les membres de l'association et les fans d'esport, afin de suivre les activités et les performances des équipes.",
		lien: "",
		Contexte: "Le projet a été réalisé dans le cadre d'un stage en développement web, où l'objectif était de créer un site web fonctionnel pour une association d'esport. Le site devait être attrayant, facile à naviguer et fournir des informations pertinentes sur les événements et les équipes de l'association."
	},
	{
		slug: "projet-6",
		titre: "InazumaDle Jeux",
		description: "Un jeu de devinette en ligne, permettant aux utilisateurs de jouer et de tester leurs connaissances.",
		role: "Développeur logiciel",
		duree: "10 jours",
		techno: ["Java", "Maven"],
		imagePrincipale: "/images/projet6/interface.png",
		images: ["/images/projet6/user.png", "/images/projet6/jeux.png"],
		contenuComplet: "Ce projet consistait à créer un jeu de devinette en ligne appelé InazumaDle. Le jeu permet aux utilisateurs de tester leurs connaissances en devinant des mots ou des phrases à partir d'indices fournis. L'objectif était de créer une expérience de jeu interactive et engageante, avec des fonctionnalités telles que la gestion des utilisateurs, le suivi des scores et la possibilité de jouer en ligne.",
		lien: "https://inazumadle-web.netlify.app/",
		Contexte: "Le projet a été réalisé dans le cadre d'un défi de développement logiciel, où l'objectif était de créer un jeu en ligne fonctionnel en utilisant Java et Maven. Le jeu devait être convivial, offrir une expérience utilisateur agréable et permettre aux utilisateurs de jouer et de tester leurs connaissances de manière interactive."
	},
];
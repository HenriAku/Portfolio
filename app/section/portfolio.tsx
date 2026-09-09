import { Titre } from "../composants/titre";
import { Card } from "../composants/card";

export const Portfolio = () => {
	return (
		<div id="portfolio" className="flex flex-col items-center justify-center bg-white p-15">
			<Titre texte="Mon Portfolio" endroit="bleu" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 p-5">
				<Card
					titre="Landing Page"
					description="Landing page DevKit entrainement."
					image="/images/projet1/home.png"
					slug="projet-1"
				/>
				<Card
					titre="La Roch' Produits Artisanaux"
					description="Site e-commerce pour un artisan local."
					image="/images/projet2/Home.png"
					slug="projet-2"
				/>
				<Card
					titre="Giant (Projet d'ecole)"
					description="Projet scolaire visant à recréer un site web"
					image="/images/projet3/Boutique.png"
					slug="projet-3"
				/>
				<Card
					titre="InazumaDle site web"
					description="Page de téléchargement du jeu"
					image="/images/projet4/accueil.png"
					slug="projet-4"
				/>
				<Card
					titre="Salamander Esport (Stage)"
					description="Site web pour une association d'esport"
					image="/images/projet5/accueil.png"
					slug="projet-5"
				/>
				<Card
					titre="InazumaDle jeux"
					description="Jeux de devinette en ligne"
					image="/images/projet6/interface.png"
					slug="projet-6"
				/>
			</div>
		</div>
	);
}
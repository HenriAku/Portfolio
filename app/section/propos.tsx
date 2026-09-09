import { Titre } from "../composants/titre";

export const Propos = () => {
	return (
		<div id="propos" className="flex flex-col items-center justify-center bg-bleu-ciel p-15 bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:16px_16px]">
			<Titre texte="À propos de moi" endroit="blanc" />

			<div className="max-w-7xl text-center text-lg md:text-xl flex md:gap-50 flex-col md:flex-row items-center justify-center">
				<img src="/images/image2.png" alt="Ma photo de profile"  className="w-60 h-60 rounded-full object-cover" />
				<p className="text-white mt-4 text-2xl text-left">
					<strong>Salut !</strong> Je suis un développeur junior passionné par l'informatique et la 
					conception d'applications web et logicielles. J'adore créer des solutions innovantes et relever des défis techniques. 
					En dehors du code, je suis un grand amateur de jeux vidéo, avec une passion particulière pour l'e-sport. 
					Supporter absolu de la Karmine Corp, j'apprécie l'esprit de compétition et le travail d'équipe que l’on retrouve dans le monde de l'e-sport.
				</p>
			</div>
		</div>
	);
};
import { Titre } from "../composants/titre";
import { Affichage } from "../composants/affichage";

export const Parcours = () => {
	return (
		<div id="parcours" className="flex flex-col items-center justify-center bg-white p-15">
			<Titre texte="Mon Parcours" endroit="bleu" />
			<Affichage 
				texteD="Depuis tout petit, j'ai toujours été passionné par les jeux vidéo et la logique, comme Minecraft ou des jeux de tir."
				titre="Intérêts"
				ligne={true}
			/>		
			<Affichage 
				texteD="J'ai choisi de m'orienter vers un Bac STI2D car je souhaitais travailler dans l’informatique, 
						puis j’ai découvert le développement avec la spécialité SIN ; j'ai découvert comment faire 
						fonctionner des voitures télécommandées et mes premiers sites web en développant."
				titre="BAC STI2D SIN"
				ligne={true}
			/>
			<Affichage
				texteD="Après l’obtention du Bac, j’ai décidé de poursuivre mes études en BUT informatique pour 
						approfondir mes compétences en développement, apprendre à concevoir des logiciels plus complexes 
						et maîtriser des langages de programmation comme le Java, le PHP et le JavaScript."
				titre="BUT INFORMATIQUE"
				ligne={false}
			/>
		</div>
	);
}  
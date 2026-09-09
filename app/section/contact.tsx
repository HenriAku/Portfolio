import {Titre} from "../composants/titre";
import {Formulaire} from "../composants/formulaire";

export const Contact = () => {
	return (
		<div id="contact" className="flex flex-col items-center justify-center bg-white p-15">
			<Titre texte="Contactez-moi" endroit="bleu" />
			<Formulaire />
		</div>
	);
}
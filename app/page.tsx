import { MiseEnPage } from "./essentiel/miseEnPage";
import { Hero } from "./section/hero";
import { Portfolio } from "./section/portfolio";
import { Propos } from "./section/propos";
import { Parcours } from "./section/parcours";
import { Techno } from "./section/techno";
import { Contact } from "./section/contact";

export default function Home() {
	return (
		<MiseEnPage>
			<Hero />
			<Portfolio />
			<Propos />
			<Parcours />
			<Techno />
			<Contact />
		</MiseEnPage>
	);
}	

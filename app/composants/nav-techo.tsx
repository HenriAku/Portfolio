import { BtnTechno } from "../composants/btn-techno";

export const NavTechno = () => {

	return (
		<div className="bg-bleu-fonce pt-2 pb-2 mb-5 mt-5 w-10/11 sm:w-4/5 md:w-3/5 rounded-4xl h-70 md:h-10 
						items-center justify-center flex flex-col md:flex-row gap-2 md:gap-6 mx-auto">
			<ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center font text-xl">
				<BtnTechno texte="Tout" />
				<BtnTechno texte="FrontEnd" />
				<BtnTechno texte="BackEnd" />
				<BtnTechno texte="Base de données" />
				<BtnTechno texte="Outils" />
			</ul>
		</div>
	);
};
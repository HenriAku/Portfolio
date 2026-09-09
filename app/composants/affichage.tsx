import { Bulle } from "../composants/bulle";

export const Affichage = ({ texteD, titre, ligne }: { texteD: string; titre: string; ligne: boolean }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-10">
			<div></div>
			<div className="flex flex-col items-center justify-center">
				<Bulle texte={titre} />
				{ligne && 
					<div className="hidden md:block border-l-2 border-black h-20"></div>
				}
			</div>
			<p className="text-black text-left text-xl pt-6">{texteD}</p>
			<div></div>
		</div>
	);
}  
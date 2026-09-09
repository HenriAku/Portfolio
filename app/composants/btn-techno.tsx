"use client";
import { useContainer } from "../context/contenaire";

export const BtnTechno = ({ texte }: { texte: string }) => {
	const { techno, setTechno } = useContainer();

	return (
		<button
			className={`hover:text-fuchsia-200 ${techno === texte ? "underline" : ""}`}
			onClick={() => setTechno(texte)}
		>
			{texte}
		</button>
	);
};

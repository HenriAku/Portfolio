export const Titre = ({ texte, endroit }: { texte: string; endroit: string }) => {
	return (
		<div className="flex flex-col items-center justify-center pt-5 pb-15">
			<h2 className={`text-3xl md:text-4xl font-bold mb-4 ${endroit === "bleu" ? "text-titre" : "text-white"}`}>{texte}</h2>
		</div>
	);
}
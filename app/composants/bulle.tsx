export const Bulle = ({ texte }: { texte: string; }) => {
	return (
		<div className="flex items-center justify-center p-5 m-5 border-bleu rounded-full w-50 h-50">
			<p className="text-2xl text-center text-black font-bold">{texte}</p>
		</div>
	);
}
export const Info = ({ texte }: { texte: string }) => {
	return (
		<div className="w-60 bg-[#26386A] hover:bg-[#6f7c97] rounded-lg transition ease-in-out duration-300 
						hover:scale-105 flex items-center justify-center shadow-xl">
			<p className=" text-white font-bold">{texte}</p>
		</div>
	);
};

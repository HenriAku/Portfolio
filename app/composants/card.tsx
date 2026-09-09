import Link from "next/dist/client/link";

export const Card = ({ titre, description, image, slug }: { titre: string; description: string; image: string; slug: string }) => {
	return (
		<Link href={`/projets/${slug}`} className="block">
			<div className="flex flex-col bg-bleu-fonce rounded-b-2xl shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
				<div className="flex flex-col items-center justify-center p-3 m-3">
					<img src={image} alt={titre} className="w-80 h-48 object-cover rounded-t-2xl" />
					<h3 className="text-xl font-bold mt-4">{titre}</h3>
					<p className="text-zinc-200 mt-2 text-center">{description}</p>
				</div>
			
				<div className="flex mx-5 p-2 gap-2">
					<p className="text-white">En savoir plus </p>
					<img src="/images/fleche-droite.png" alt="Flèche" className="w-3 h-3 mt-2" />
				</div>
			</div>
		</Link>
	);
}
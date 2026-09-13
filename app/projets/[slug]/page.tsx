// app/projets/[slug]/page.tsx
import { Projets } from "../../data/projets";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MiseEnPage } from "../../essentiel/miseEnPage";
import { Titre } from "../../composants/titre";
import { Info } from "../../composants/info";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return Projets.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;
	const projets = Projets.find((p) => p.slug === slug);

	if (!projets) {
		notFound();
	}

	return (
		<MiseEnPage>
			{/* Changement : text-black par défaut pour éviter le texte blanc invisible sur fond blanc */}
			<main className="text-black bg-white p-6">
				<div className="mt-20">
					<Titre texte={projets.titre} endroit="bleu" />
				</div>

				<div className="flex flex-wrap gap-4 mb-6 items-center justify-center">
					<Info texte={projets.role} />
					<Info texte={projets.duree} />
					{projets.techno.map((techno) => (
						<Info key={techno} texte={techno} />
					))}
				</div>

				<div className="flex justify-center mt-20">
					<p className="text-lg md:text-xl leading-relaxed w-full md:w-1/2">
						{projets.description}
					</p>
				</div>

				<img
					src={projets.imagePrincipale}
					alt={projets.titre}
					className="w-full h-full md:h-120 object-cover rounded-2xl mb-6 shadow-xl mt-20"
				/>

				{/* Correction ici : w-full sur mobile, md:w-1/2 sur ordinateur */}
				<div className="flex justify-center mt-20">
					<p className="text-lg md:text-xl leading-relaxed w-full md:w-1/2">
						{projets.Contexte}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
					{projets.images.map((image) => (
						<img
							key={image}
							src={image}
							alt={projets.titre}
							className="w-full md:h-120 object-cover rounded-2xl mb-6 shadow-xl"
						/>
					))}
				</div>

				{/* Correction ici : w-full (ou w-11/12) au lieu de w-90 qui n'existe pas */}
				<div className="flex justify-center mt-20">
					<p className="text-lg md:text-xl leading-relaxed w-full md:w-1/2">
						{projets.contenuComplet}
					</p>
				</div>

				{/* Correction ici : Retrait de w-100 qui faisait déborder le bouton sur mobile */}
				<div className="flex justify-center mt-20 mb-6">
					<Link href={projets.lien} className="text-blue-400 hover:underline">
						<button className="bg-blue-500 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition duration-300 shadow-md">
							voir le projet
						</button>
					</Link>
				</div>
			</main>
		</MiseEnPage>
	);
}

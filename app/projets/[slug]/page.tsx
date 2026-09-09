// app/projets/[slug]/page.tsx
import { Projets } from "../../data/projets";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MiseEnPage } from "../../essentiel/miseEnPage";
import { Titre } from "../../composants/titre";
import { Info } from "../../composants/info";
import { Footer } from "../../essentiel/footer";

interface PageProps {
	params: Promise<{ slug: string }>;
}

// 1. Ajouter cette fonction pour générer toutes les routes statiques
export async function generateStaticParams() {
	return Projets.map((project) => ({
		slug: project.slug,
	}));
}

// 2. Votre composant de page dynamique
export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;

	const projets = Projets.find((p) => p.slug === slug);

	if (!projets) {
		notFound();
	}

	return (
		<MiseEnPage>
			<main className=" text-white bg-white p-6">
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

				<img
					src={projets.imagePrincipale}
					alt={projets.titre}
					className="w-full h-96 object-cover rounded-2xl mb-6 shadow-xl mt-20"
				/>

				<p className="text-xl leading-relaxed text-black w-100 md:w-1/2 mx-auto mt-20">{projets.Contexte}</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
					{projets.images.map((image) => (
						<img
							key={image}
							src={image}
							alt={projets.titre}
							className="w-full h-120 object-cover rounded-2xl mb-6 shadow-xl"
						/>
					))}
				</div>

				<p className="text-xl leading-relaxed text-black w-100 md:w-1/2 mx-auto mt-20">{projets.contenuComplet}</p>

				<Link
					href={projets.lien}
					className="text-blue-400 hover:underline mb-6 flex items-center justify-center w-100 md:w-4/5 mx-auto mt-20"
				>
					<button className="bg-blue-500 text-white rounded-4xl p-2 hover:bg-blue-600 transition duration-300 shadow-md">
						voir le projet
					</button>
				</Link>

			</main>
		</MiseEnPage>
	);
}

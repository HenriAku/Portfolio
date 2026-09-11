"use client";

import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-bleu-fonce p-4">
			<div className="flex justify-center text-center md:text-left mb-4 flex-col md:flex-row">
				<div className="pb-5 md:mt-5 text-lg">
					<p>
						Contacter moi <br />
						pour des projets web.
					</p>
				</div>
				<div className="pb-5 md:ml-10">		
					<ul>
						<li>Liens rapides :</li>
						<li className="hover:text-fuchsia-200"><Link href="/#portfolio">&times; Portfolio</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#propos">&times; Présentation</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#parcours">&times; Parcours</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#techno">&times; Compétences</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#contact">&times; Contact</Link></li>
					</ul>
				</div>
				<div className="pb-5 md:ml-10">		
					<ul>
						<li>Réseaux :</li>
						<li className="hover:text-fuchsia-200"><Link href="https://github.com/HenriAku" target="_blank" rel="noopener noreferrer">&times; GitHub</Link></li>
					</ul>
				</div>
			</div>

			<p className="text-center">&copy; 2026 Conçu par Henri— Tous droits réservés.</p>
		</footer>
	);
};
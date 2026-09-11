"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			// Déclenche le changement après 20px de scroll
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Nettoyage de l'écouteur d'événement
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex justify-center">
			<nav className={`fixed flex flex-col md:flex-row z-30 transition-all duration-300 ease-in-out ${
					isScrolled
						? `w-full pt-1 rounded-none top-0 bg-bleu-fonce backdrop-blur-md shadow-lg ${open ? "h-auto" : "h-11"}`
						: "w-1/2 top-2 sm:w-4/5 lg:w-2/3 rounded-4xl bg-bleu-fonce p-4 shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
					}`}>
			
				<div className="flex">
					<button
						className="lg:hidden text-3xl"
						onClick={() => setOpen(!open)}
					>
						☰
					</button>
				</div>

				<div className={`flex flex-col md:flex-row md:justify-center w-full
					${open ? "block" : "hidden"} lg:block`}>
					<ul className="flex flex-col md:flex-row md:space-x-8 justify-center text-2xl">
						<li className="hover:text-fuchsia-200"><Link href="/#portfolio">Portfolio</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#propos">Présentation</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#parcours">Parcours</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#techno">Compétences</Link></li>
						<li className="hover:text-fuchsia-200"><Link href="/#contact">Contact</Link></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

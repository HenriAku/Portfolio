"use client";

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex justify-center">
			<nav className="fixed flex top-2 w-1/2 sm:w-4/5 lg:w-2/3 bg-bleu-fonce p-4 rounded-4xl 
							flex-col md:flex-row z-30 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
			
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

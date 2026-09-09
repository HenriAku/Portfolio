"use client";

import { Titre } from "../composants/titre";
import { NavTechno } from "../composants/nav-techo";
import { CardTechno } from "../composants/card-techno";

export const Techno = () => {
	return (
		<div id="techno" className="flex flex-col items-center justify-center bg-[#3C95C0]/80 p-15 bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:16px_16px]">
			<Titre texte="Mes compétences" endroit="blanc" />
			<NavTechno />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 mt-10">
				<CardTechno texte="React"        icon="/images/logos/React.webp"      link="FrontEnd" />
				<CardTechno texte="TypeScript"   icon="/images/logos/TypeScript.webp" link="FrontEnd" />
				<CardTechno texte="Node.js"      icon="/images/logos/Node.webp"       link="BackEnd" />
				<CardTechno texte="Next.js"      icon="/images/logos/Next.webp"       link="FrontEnd" />
				<CardTechno texte="Tailwind CSS" icon="/images/logos/Tailwind.png"    link="FrontEnd" />
				<CardTechno texte="PostgreSQL"   icon="/images/logos/PostgreSQL.webp" link="Base de données" />
				<CardTechno texte="HTML"         icon="/images/logos/HTML.webp"       link="FrontEnd" />
				<CardTechno texte="Express.js"   icon="/images/logos/Expressjs.png"   link="BackEnd" />
				<CardTechno texte="Git"          icon="/images/logos/Git.webp"        link="Outils" />
				<CardTechno texte="CSS"          icon="/images/logos/CSS.webp"        link="FrontEnd" />
				<CardTechno texte="JavaScript"   icon="/images/logos/JS.webp"         link="FrontEnd" />
				<CardTechno texte="PHP"          icon="/images/logos/PHP.webp"        link="BackEnd" />
				<CardTechno texte="PHPmyAdmin"   icon="/images/logos/PhpMyAdmin.png"  link="Outils" />
				<CardTechno texte="Supabase"     icon="/images/logos/Supabase.webp"   link="Base de données" />
				<CardTechno texte="TWIG"         icon="/images/logos/Twig.png"        link="FrontEnd" />
				<CardTechno texte="Bootstrap"    icon="/images/logos/Bootstrap.webp"  link="FrontEnd" />
				<CardTechno texte="Figma"        icon="/images/logos/Figma.webp"      link="Outils" />
				<CardTechno texte="Java"         icon="/images/logos/JAVA.png"        link="BackEnd" />
				<CardTechno texte="MySQL"        icon="/images/logos/MySQL.svg"       link="Base de données" />
			</div>
		</div>
	);
}
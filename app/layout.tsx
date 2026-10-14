import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContenaireProvider } from "./context/contenaire";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-henri-dev.netlify.app"),

	title: {
		default: "Portfolio Henri",
		template: "%s | Portfolio Henri",
	},

	description:
		"Portfolio Henri, développeur web freelance spécialisé en React, Next.js et Tailwind CSS. Découvrez mes projets et mes compétences.",

	keywords: [
		"Portfolio Henri",
		"Développeur web freelance",
		"React",
		"Next.js",
		"Tailwind CSS",
		"JavaScript",
		"HTML",
		"CSS",
	],

	authors: [{ name: "Henri" }],
	creator: "Henri",
	publisher: "Henri",

	robots: {
		index: true,
		follow: true,
	},

	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "/",
		siteName: "Portfolio Henri",
		title: "Portfolio Henri | Développeur Web",
		description:
		"Développeur web freelance spécialisé en React, Next.js et Tailwind CSS. Découvrez mes réalisations et discutons de votre projet.",
		images: [
		{
			url: "/og-image.png",
			width: 1200,
			height: 630,
			alt: "Portfolio Henri — Développeur Web freelance",
		},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Portfolio Henri | Développeur Web",
		description:
		"Découvrez les projets et les compétences de Henri, développeur web freelance spécialisé en React et Next.js.",
		images: ["/og-image.png"],
	},

	alternates: {
		canonical: "/",
	},
};


export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="fr"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ContenaireProvider>{children}</ContenaireProvider>
			</body>
		</html>
	);
}

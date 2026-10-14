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
	title: {
		default: "Portfolio Henri",
		template: "%s | Portfolio Henri",
	},
	description:
		"Portfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
	keywords: [
		"Portfolio Henri",
		"Portfolio web",
		"Portfolio développeur web",
		"Portfolio personnel",
		"Portfolio en ligne",
		"REACT",
		"NEXTJS",
		"TAILWINDCSS",
		"JAVASCRIPT",
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
		url: "https://portfolio-henri-dev.netlify.app",
		siteName: "Portfolio Henri",
		title: 'Portfolio Henri | Développeur Web',
		description:
			"Portfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
		images: [
			{
				url: "https://netlify.app", // <--- METTEZ VOTRE IMAGE ICI
				width: 1200,
				height: 630,
				alt: "Aperçu du Portfolio de Henri",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Portfolio Henri | Portfolio développeur web",
		description:
			"Portfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
		images: ["https://netlify.app"], // <--- ET ICI
	},

	alternates: {
		canonical: "https://portfolio-henri-dev.netlify.app",
	},
};


export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en fr"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ContenaireProvider>
					{children}
				</ContenaireProvider>
			</body>
		</html>
	);
}

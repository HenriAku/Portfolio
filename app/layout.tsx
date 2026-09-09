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
		default: "Protfolio Henri",
		template: "%s | Protfolio Henri",
	},
	description:
		"Protfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
	keywords: [
		"Protfolio Henri",
		"Protfolio web",
		"Protfolio développeur web",
		"Protfolio personnel",
		"Protfolio en ligne",
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
		url: "https://Portfolio-Henri.netlify.app",
		siteName: "Protfolio Henri",
		title: "Protfolio Henri | Protfolio développeur web",
		description:
			"Protfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
		images: [
			{
				url: "https://Portfolio-Henri.netlify.app",
				width: 1200,
				height: 630,
				alt: "Protfolio Henri",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Protfolio Henri | Protfolio développeur web",
		description:
			"Protfolio Henri est un site web personnel qui présente les projets et les compétences de développement web de Henri.",
		images: ["https://Portfolio-Henri.netlify.app"],
	},

	alternates: {
		canonical: "https://Portfolio-Henri.netlify.app",
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

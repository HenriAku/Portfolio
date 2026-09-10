"use client";

import { useRef, FormEvent, useState } from "react";

export const Formulaire = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSending(true);
		setStatusMessage("");

		if (!formRef.current) return;

		// Récupération automatique des données saisies dans le formulaire
		const formData = new FormData(formRef.current);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			title: formData.get("title"),
			message: formData.get("message"),
		};

		try {
		const response = await fetch("/.netlify/functions/send-email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setStatusMessage("Message envoyé avec succès !");
			formRef.current.reset();
		} else {
			setStatusMessage("Erreur lors de l'envoi du message.");
		}
		} catch (error) {
			console.error("Erreur réseau :", error);
			setStatusMessage("Erreur de connexion avec le serveur.");
		} finally {
			setIsSending(false);
		}
	};

	return (
		<form className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-white p-15 text-black"
			ref={formRef}
			onSubmit={handleSubmit}
			>
			<div className="flex flex-col items-center justify-center gap-4 md:mb-4 mr-7">
				<label htmlFor="nom" className="text-lg font-medium">
					Nom :
					<input
						type="text"
						placeholder="Entrez votre nom"
						required
						name="name"
						className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md"
					/>
				</label>

				<label htmlFor="email" className="text-lg font-medium">
					Email :
					<input
						type="email"
						placeholder="Entrez votre email"
						required
						name="email"
						className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md"
					/>
				</label>

				<label htmlFor="sujet" className="text-lg font-medium">
					Sujet :
					<input
						type="text"
						placeholder="Entrez votre sujet"
						required
						name="title"
						className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md"
					/>
				</label>
			</div>

			<div className="flex flex-col items-center justify-center gap-4 mb-4">
				<label htmlFor="message" className="text-lg font-medium">
					Message :
					<textarea
						placeholder="Entrez votre message"
						name="message"
						required
						className="border border-blue-500 rounded-md p-2 mb-4 w-full max-w-md h-65 resize-none shadow-md"
					/>
				</label>
			</div>

			<button
				disabled={isSending}
				className="bg-blue-500 text-white rounded-4xl p-2 w-1/2 hover:bg-blue-600 transition duration-300 shadow-md disabled:opacity-50"
			>
				{isSending ? "Envoi en cours..." : "Envoyer"}
			</button>

			{statusMessage && (
				<p className="col-span-1 md:col-span-2 text-center mt-4 font-semibold">
					{statusMessage}
				</p>
			)}
		</form>
	);
};
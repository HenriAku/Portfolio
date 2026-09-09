"use client";

import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export const Formulaire = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const sendEmail = (e: FormEvent) => {
		e.preventDefault();
		setIsSending(true);

		if (!formRef.current) return;

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setStatusMessage("Configuration EmailJS manquante.");
			setIsSending(false);
			return;
		}

		emailjs
		.sendForm(
			serviceId,
			templateId,
			formRef.current,
			publicKey
		)
		.then(
			() => {
				setStatusMessage("Message envoyé avec succès !");
				setIsSending(false);
				formRef.current?.reset();
			},
			(error) => {
				console.error("Erreur EmailJS:", error);
				setStatusMessage("Erreur lors de l'envoi du message.");
				setIsSending(false);
			}
		);
	};

	return (
		<form className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-white p-15 text-black" ref={formRef} onSubmit={sendEmail}>
			<div className="flex flex-col items-center justify-center gap-4 md:mb-4 mr-7">
				<label htmlFor="nom" className="text-lg font-medium">Nom :
					<input type="text" placeholder="Entrez votre nom" required name="name" className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md" />
				</label>

				<label htmlFor="email" className="text-lg font-medium">Email :
					<input type="email" placeholder="Entrez votre email" required name="email" className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md" />
				</label>

				<label htmlFor="sujet" className="text-lg font-medium">Sujet :
					<input type="text" placeholder="Entrez votre sujet" required name="title" className="border border-blue-500 rounded-md p-2 mb-4 w-full shadow-md" />
				</label>
			</div>

			<div className="flex flex-col items-center justify-center gap-4 mb-4">
				<label htmlFor="message" className="text-lg font-medium">Message :
					<textarea placeholder="Entrez votre message" name="message" required className="border border-blue-500 rounded-md p-2 mb-4 w-full max-w-md h-65 resize-none shadow-md" />
				</label>
			</div>

			<button className="bg-blue-500 text-white rounded-4xl p-2 w-1/2 hover:bg-blue-600 transition duration-300 shadow-md">Envoyer</button>
		</form>
	);
}
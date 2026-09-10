// netlify/functions/send-email.ts

export async function handler(event: any) {
	// Accepter uniquement les requêtes POST
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const data = JSON.parse(event.body);

		// Envoi de la requête directement aux serveurs d'EmailJS depuis Netlify
		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				service_id: process.env.EMAILJS_SERVICE_ID,
				template_id: process.env.EMAILJS_TEMPLATE_ID,
				user_id: process.env.EMAILJS_PUBLIC_KEY,
				accessToken: process.env.EMAILJS_PRIVATE_KEY,
				template_params: data,
			}),
		});

		if (!response.ok) {
			throw new Error('Erreur lors de l’envoi par EmailJS');
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'E-mail envoyé avec succès !' }),
		};
	} catch (error: any) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
}
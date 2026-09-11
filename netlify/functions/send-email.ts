export async function handler(event: any) {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const data = JSON.parse(event.body);

		const payload = {
			service_id: process.env.EMAILJS_SERVICE_ID,
			template_id: process.env.EMAILJS_TEMPLATE_ID,
			user_id: process.env.EMAILJS_PUBLIC_KEY,
			accessToken: process.env.EMAILJS_PRIVATE_KEY,
			template_params: {
				name: data.name,
				email: data.email,
				title: data.title,
				message: data.message,
			},
		};

		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const responseText = await response.text();

		if (!response.ok) {
			console.error('Erreur EmailJS API:', responseText);
			return {
				statusCode: response.status,
				body: JSON.stringify({ error: responseText }),
			};
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'E-mail envoyé avec succès !' }),
		};
	} catch (error: any) {
			console.error('Erreur Fonction:', error);
			return {
				statusCode: 500,
				body: JSON.stringify({ error: error.message }),
			};
	}
}
import { stripe } from '$lib/stripe';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ url }) => {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: 'price_1OJjPbJAEz2mV7i20kLTW4Qu',
					quantity: 1
				}
			],
			payment_method_types: ['card'],
			mode: 'subscription',
			success_url: `${url.href}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${url.href}/cancel`
		});

		redirect(303, session.url);
	}
} satisfies Actions;

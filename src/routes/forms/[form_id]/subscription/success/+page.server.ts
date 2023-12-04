import { DOMAIN } from '$env/static/private';
import { stripe } from '$lib/stripe';
import { type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ url, request, cookies }) => {
		const { session_id } = Object.fromEntries(await request.formData());
		const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

		const portalSession = await stripe.billingPortal.sessions.create({
			customer: checkoutSession.customer,
			return_url: 'https://juice.ai'
		});

		throw redirect(303, portalSession.url);
	}
};

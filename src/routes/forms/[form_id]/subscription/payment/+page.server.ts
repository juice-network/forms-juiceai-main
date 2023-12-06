import { DOMAIN } from '$env/static/private';
import { stripe } from '$lib/stripe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const customerId = url.searchParams.get('customer_id');
	const subscription = await stripe.subscriptions.create({
		customer: customerId,
		items: [
			{
				price: 'price_1OJjPbJAEz2mV7i20kLTW4Qu',
				quantity: 1
			}
		],
		payment_behavior: 'default_incomplete',
		payment_settings: {
			save_default_payment_method: 'on_subscription',
			payment_method_types: ['card']
		},
		expand: ['latest_invoice.payment_intent']
	});

	return {
		clientSecret: subscription.latest_invoice.payment_intent.client_secret,
		returnUrl: `${DOMAIN}/complete`
	};
};

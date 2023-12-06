import { DOMAIN } from '$env/static/private';
import { stripe } from '$lib/stripe';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, params }) => {
		const { form_id } = params;
		const { email, firstname, lastname } = Object.fromEntries(await request.formData());

		const customer = await stripe.customers.create({
			email: String(email),
			name: firstname + ' ' + lastname
		});

		throw redirect(303, `/forms/${form_id}/subscription/payment?customer_id=${customer.id}`);
	}
} satisfies Actions;

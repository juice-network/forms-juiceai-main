import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { stripe } from '$lib/stripe';
import { DOMAIN } from '$env/static/private';
import supabaseClient from '$lib/supabase';

interface FormData {
	first_name?: string;
	last_name?: string;
	email?: string;
	[key: string]: string | undefined;
}

export const load: PageServerLoad = async ({ params }) => {
	const { form_id } = params;
	const priceId = 'price_1OO19TJAEz2mV7i2Av1RVHJk';
	const price = await stripe.prices.retrieve(priceId);
	const { client_secret } = await stripe.paymentIntents.create({
		amount: price.unit_amount,
		currency: price.currency,
		payment_method_types: ['card']
	});
	return {
		formId: form_id,
		clientSecret: client_secret,
		returnUrl: new URL(`/complete`, DOMAIN).toString()
	};
};

export const actions = {
	default: async ({ request }) => {
		const formData: FormData = Object.fromEntries(await request.formData()) as unknown as FormData;

		let first_name: string | undefined, last_name: string | undefined, email: string | undefined;
		const custom_data: { [key: string]: string } = {};

		for (const [key, value] of Object.entries(formData)) {
			switch (key) {
				case 'first_name':
					first_name = value;
					break;
				case 'last_name':
					last_name = value;
					break;
				case 'email':
					email = value;
					break;
				default:
					if (value !== undefined) {
						custom_data[key] = value;
					}
					break;
			}
		}

		const { error } = await supabaseClient.from('forms').insert({
			first_name,
			last_name,
			email,
			custom_data: custom_data
		});
		if (error) {
			return fail(400, { message: error.message });
		}
		return { success: true, message: 'Added successfully!' };
	}
} satisfies Actions;

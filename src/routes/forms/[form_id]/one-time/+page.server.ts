import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
// import { createClient } from '@supabase/supabase-js';
import { stripe } from '$lib/stripe';
import { DOMAIN } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const { form_id } = params;
	const { client_secret } = await stripe.paymentIntents.create({
		amount: 299,
		currency: 'usd',
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
		const formData = Object.fromEntries(await request.formData());
		// const url = PUBLIC_SUPABASE_URL;
		// const key = PUBLIC_SUPABASE_ANON_KEY;
		// const supabase = createClient(url, key);
		// const { data, error } = await supabase.from('forms').insert({
		// 	payment_type: 'stripe cc',
		// 	custom_fields: formData
		// });

		console.log({
			formData
		});
	}
} satisfies Actions;

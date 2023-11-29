import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

export const load: PageServerLoad = ({ params }) => {
	const { formId } = params;
	return { formId };
};

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const url = PUBLIC_SUPABASE_URL;
		const key = PUBLIC_SUPABASE_ANON_KEY;
		const supabase = createClient(url, key);
		const { data, error } = await supabase.from('forms').insert({
			payment_type: 'stripe cc',
			custom_fields: formData
		});
		console.log({
			formData,
			data,
			error
		});
	}
} satisfies Actions;

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const url = PUBLIC_SUPABASE_URL;
const key = PUBLIC_SUPABASE_ANON_KEY;
const supabaseClient = createClient(url, key, {
	db: { schema: 'forms_schema' },
	auth: {
		persistSession: false
	}
});

export default supabaseClient;

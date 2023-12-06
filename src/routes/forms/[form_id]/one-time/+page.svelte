<script lang="ts">
	import type { PageData } from './$types';
	import OtpForm from '$lib/components/OTPForm.svelte';
	export let data: PageData;
	$: ({ paymentIntent, formId, returnUrl, domain } = data);
</script>

<!-- {#if formId === 'default' && clientSecret && returnUrl}
	<OtpForm {clientSecret} {returnUrl} />
{/if} -->
<pre>{paymentIntent}</pre>

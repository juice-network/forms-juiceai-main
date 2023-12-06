<script lang="ts">
	import type { PageData } from './$types';
	import OtpForm from '$lib/components/OTPForm.svelte';
	export let data: PageData;
	$: ({ formId, domain } = data);
</script>

<!-- {#if formId === 'default' && clientSecret && returnUrl}
	<OtpForm {clientSecret} {returnUrl} />
{/if} -->
<pre>{formId}</pre>
<!-- <pre>{returnUrl}</pre> -->
<pre>{domain}</pre>

<script lang="ts">
	import type { PageData } from './$types';
	import OtpForm from '$lib/components/OTPForm.svelte';
	export let data: PageData;
	$: ({ clientSecret, formId, returnUrl } = data);
</script>

{#if formId === 'default' && clientSecret}
	<OtpForm {clientSecret} {returnUrl} />
{/if}

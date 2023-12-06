<script lang="ts">
	import SubscriptionForm from '$lib/components/SubscriptionForm.svelte';

	export let data;
	$: ({ clientSecret, returnUrl } = data);
</script>

{#if clientSecret && returnUrl}
	<SubscriptionForm {clientSecret} {returnUrl} />
{/if}

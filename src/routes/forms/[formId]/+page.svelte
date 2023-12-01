<script lang="ts">
	import type { PageData } from './$types';
	import DefaultForm from '$lib/components/DefaultForm.svelte';
	export let data: PageData;
	$: ({ clientSecret, formId, returnUrl } = data);
</script>

{#if formId === 'default' && clientSecret}
	<DefaultForm {clientSecret} {returnUrl} />
{/if}

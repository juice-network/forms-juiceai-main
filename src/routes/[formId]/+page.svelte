<script lang="ts">
	import type { PageData } from './$types';
	import DefaultForm from '$lib/components/DefaultForm.svelte';
	export let data: PageData;
	$: ({ formId } = data);
</script>

{#if formId === 'default'}
	<DefaultForm />
{/if}

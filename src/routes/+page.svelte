<script>
	import { page } from '$app/stores';
	import EmbedCode from '$lib/components/EmbedCode.svelte';
</script>

<div class="flex flex-wrap p-4 gap-4">
	<div
		class="prose block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="mb-4 flex justify-between">
			<h2>Default One-Time Payment Form</h2>
			<a href={`${$page.url.origin}/forms/default/one-time`}> <span>View</span></a>
		</div>
		<h4 class="m-0">Get embed code</h4>
		<p class="m-0">
			Copy and paste this HTML code snippet on the page where you want the embed to appear.
		</p>
		<EmbedCode formId="default" paymentType="one-time" />
	</div>
	<div
		class="prose block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="mb-4 flex justify-between">
			<h2>Default Subscription Form</h2>
			<a href={`${$page.url.origin}/forms/default/subscription`}> <span>View</span></a>
		</div>
		<h4 class="m-0">Get embed code</h4>
		<p class="m-0">
			Copy and paste this HTML code snippet on the page where you want the embed to appear.
		</p>
		<EmbedCode formId="default" paymentType="subscription" />
	</div>
</div>

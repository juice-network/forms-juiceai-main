<script>
	export let data;
	$: ({ message } = data);
</script>

<div class="flex items-center justify-center w-full p-10">
	<article class="prose flex-col items-center justify-center">
		<h1 class="text-center">Checkout complete</h1>
		<p class="text-center">{message}</p>
	</article>
</div>

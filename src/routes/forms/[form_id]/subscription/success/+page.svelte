<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="prose flex flex-col items-center justify-center h-screen mx-auto">
	<div class="">
		<div>
			<h2>Subscription to Starter plan successful!</h2>
		</div>
	</div>
	<form method="POST">
		<input
			type="hidden"
			id="session-id"
			name="session_id"
			value={$page.url.searchParams.get('session_id')}
		/>
		<button
			id="checkout-and-portal-button"
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
			>Manage your billing information</button
		>
	</form>
</section>

<script lang="ts">
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js';

	export let clientSecret: string;
	export let returnUrl: string;
	let stripe: Stripe | null = null;
	let elements: StripeElements | undefined;
	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	// handle form submission
	async function submit() {
		if (stripe && elements) {
			const { error } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					return_url: returnUrl
				}
			});

			if (error) {
				console.error(error);
			}
		}
	}
</script>

<article class="prose max-w-2xl">
	<h1>Payment</h1>

	{#if stripe}
		<form on:submit|preventDefault={submit}>
			<Elements {stripe} {clientSecret} bind:elements>
				<PaymentElement />
			</Elements>

			<button
				class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
				>Subscibe</button
			>
		</form>
	{:else}
		Loading Stripe...
	{/if}
</article>

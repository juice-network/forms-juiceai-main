<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js';
	import { onMount } from 'svelte';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import DefaultFields from './DefaultFields.svelte';
	export let clientSecret: string;
	export let returnUrl: string;
	let stripe: Stripe | null = null;
	let elements: StripeElements | undefined;
	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});
</script>

<article class="prose max-w-2xl p-4">
	<h1>
		<span style="tag: span; color: rgb(209, 213, 219); font-weight: 400;">🔥</span><span
			style="tag: span; font-weight: 400;"
			><span style="tag: span; color: rgb(0, 0, 0);">Get key details of ANY online store!</span
			></span
		><span style="tag: span; color: rgb(209, 213, 219); font-weight: 400;">🔥</span>
	</h1>
	<p>
		<span style="tag: span; color: rgb(0, 0, 0);"
			>🔍 Curious about the engine driving your favorite online stores?</span
		>
	</p>
	<p class="text-gray-900">
		Input the website's URL below, and we'll provide a personalized breakdown of the eCommerce
		platform they're using.
	</p>
	<p class="text-gray-900">Our report will tell you EVERYTHING about ANY website, including:</p>
	<ul class="text-gray-900">
		<li><strong>E-commerce platform</strong></li>
		<li><strong>Estimated monthly visitors</strong></li>
		<li><strong>Estimated monthly revenue</strong></li>
		<li><strong>And more!</strong></li>
	</ul>
	<p class="text-gray-900">
		Fill out the form below to get a personalized report delivered STRAIGHT to your inbox!
	</p>
	<form
		id="myForm"
		class="mx-full px-1"
		method="POST"
		action={$page.url.href}
		use:enhance={async () => {
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
		}}
	>
		<DefaultFields />
		<div class="mb-5">
			<label for="purpose" class="block font-medium text-gray-900"
				>Get your report delivered straight to your inbox!</label
			>
			<p>
				(We charge a very small amount per report, just to make sure that you're a real person and
				not a bot!)
			</p>
			<div class="rounded-lg border-2 focus-within:ring-blue-500 focus-within:border-blue-500 p-4">
				<h4 class="text-4xl font-extrabold"><span>$</span>2.99</h4>
				{#if stripe && clientSecret}
					<Elements {stripe} {clientSecret} bind:elements>
						<PaymentElement />
					</Elements>
				{/if}
			</div>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
			>Submit</button
		>
	</form>
</article>

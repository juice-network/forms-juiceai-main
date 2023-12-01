<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe, type Stripe, type StripeElements } from '@stripe/stripe-js';
	import { onMount } from 'svelte';
	import { Elements, PaymentElement } from 'svelte-stripe';
	export let clientSecret: string;
	export let returnUrl: string;
	let purpose: string;
	let stripe: Stripe | null = null;
	let elements: StripeElements | undefined;
	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});
</script>

<article class="prose max-w-2xl">
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
					// handle error
					console.error(error);
				}
			}

			return async ({ result, update }) => {
				// `result` is an `ActionResult` object
				// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
			};
		}}
	>
		<div class="mb-5">
			<label for="firstname" class="block mb-2 font-medium text-gray-900">First Name</label>
			<input
				type="text"
				id="firstname"
				name="firstname"
				class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="First Name"
				required
			/>
		</div>
		<div class="mb-5">
			<label for="lastname" class="block mb-2 font-medium text-gray-900">Last Name</label>
			<input
				type="text"
				id="lastname"
				name="lastname"
				class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="Last Name"
				required
			/>
		</div>
		<div class="mb-5">
			<label for="email" class="block mb-2 font-medium text-gray-900">Your email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="name@email.com"
				required
			/>
		</div>
		<div class="mb-5">
			<label for="url" class="block mb-2 font-medium text-gray-900">Website URL</label>
			<input
				type="url"
				id="url"
				name="url"
				class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder="example.com"
				required
			/>
		</div>
		<div class="mb-5">
			<label for="purpose" class="block mb-2 font-medium text-gray-900">Purpose of Inquiry</label>
			<select
				id="purpose"
				name="purpose"
				bind:value={purpose}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option selected>Choose a purpose</option>
				<option value="Research">Research</option>
				<option value="Competitor Analysis">Competitor Analysis</option>
				<option value="Looking for alternatives">Looking for alternatives</option>
				<option value="other">Other (please specify)</option>
			</select>
			{#if purpose === 'other'}
				<input
					type="text"
					id="other"
					name="other"
					class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					required
				/>
			{/if}
		</div>
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

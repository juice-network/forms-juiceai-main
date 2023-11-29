<script lang="ts">
	import { page } from '$app/stores';
	let purpose: string;
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
	<form id="myForm" class="mx-full px-1" method="POST" action={$page.url.href}>
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
				<div class="relative w-full flex">
					<input
						class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300 w-1/2 outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
						type="text"
						name="card_number"
						placeholder="Card Number"
						required
					/>
					<input
						class="rounded-md peer p-2 border-2 border-gray-200 placeholder-gray-300 w-1/4 outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
						type="text"
						name="exp_date"
						placeholder="MM / YY"
						required
					/>
					<input
						class="rounded-md peer p-2 border-2 border-gray-200 placeholder-gray-300 w-1/4 outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
						type="text"
						name="cvc"
						placeholder="CVC"
						required
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
						/>
					</svg>
				</div>
				<div class="flex flex-col">
					<input
						class="rounded-md peer p-2 border-2 border-gray-200 placeholder-gray-300 outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
						type="text"
						name="card_name"
						placeholder="Name on card"
					/>
					<input
						class="rounded-md peer p-2 border-2 border-gray-200 placeholder-gray-300 outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none"
						type="email"
						name="card_email"
						placeholder="Email"
					/>
				</div>
			</div>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
			>Submit</button
		>
	</form>
</article>

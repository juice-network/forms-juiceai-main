<script lang="ts">
	let purpose: string;
</script>

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

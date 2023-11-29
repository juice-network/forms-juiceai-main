/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
	plugins: [
		require('flowbite/plugin'),
		require('flowbite-typography'),
		require('@tailwindcss/typography')
	],
	theme: {
		extend: {}
	}
};

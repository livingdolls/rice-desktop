/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"moon-999": "#10091d",
				"moon-950": "#28193d",
				"moon-900": "#694c9c",
				"moon-800": "#814ac3",
				"moon-700": "#46315c",
				"moon-600": "#68507b",
				"moon-500": "#a968cd",
				"moon-400": "#8d769a",
				"moon-300": "#b3a3ba",
				"moon-200": "#d9d8d9",
				"moon-100": "#fafafa",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};

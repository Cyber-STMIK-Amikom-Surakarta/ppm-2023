import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...fontFamily.sans],
			}
		},
	},
	plugins: [],
}

export default config

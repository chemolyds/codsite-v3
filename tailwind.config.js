const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				sans: [
					'var(--font-exo2)', 
					'var(--font-nunito)', 
					'var(--font-opensans-light)',
					'var(--font-raleway)',
					'var(--font-raleway-black)',
					'var(--font-raleway-bold)',
					...fontFamily.sans
				],
				serif: [...fontFamily.serif],
				mono: [...fontFamily.mono],
			},
		},
  },
  plugins: [],
}

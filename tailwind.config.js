/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},

		letterSpacing: {
			widest: '0.3em',
		},

		extend: {
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
				alata: ['Alata'],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			animation: {
				'spin-slow': 'spin 40s linear infinite',
				'spin-slow-reverse': 'spin-reverse 40s linear infinite',
			},
			keyframes: {
				'spin-reverse': {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' },
				}
			}
		},
	},
	plugins: [],
}

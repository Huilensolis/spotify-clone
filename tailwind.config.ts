import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*',
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				'cm-black': '#121212',
			},
		},
	},
}
export default config

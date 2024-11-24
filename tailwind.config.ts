import type { Config } from "tailwindcss";

const config: Config = {
    
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'max-sm': {
  				'max': '428px'
  			},
  			'max-md': {
  				'max': '786px'
  			},
  			'max-lg': {
  				'max': '1280px'
  			}
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			
  	},
  },
},
  plugins: [],
};
export default config;

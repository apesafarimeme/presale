import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

import defaultTheme from 'tailwindcss/defaultTheme'

// const twDefaultTheme = defaultTheme

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {
      fontFamily: {
        'tribeca': ['var(--font-tribeca)'],
        'noto_sans': ['var(--font-noto-sans'],
      },
    },
    darkMode: "class",
    plugins: [nextui()],
    screens: {
      'xs': '400px',
      ...defaultTheme.screens
    },
    maxWidth: {
      '10xl': '1512px',
    },
    borderRadius: {
      '5xl': '40px',
    },
  },
}
export default config

import { Noto_Sans, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const noto_sans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto-sans',
  });
  
  export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
  });
  
  export const tribeca = localFont({
    src: '../fonts/Tribeca.ttf',
    display: 'swap',
    variable: '--font-tribeca'
  });
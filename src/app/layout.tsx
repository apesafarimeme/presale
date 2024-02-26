import {Providers} from "./providers";
import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from "next";
import './globals.css';

import Footer from "@/components/Footer";

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto',
});

export const tribeca = localFont({
  src: '../fonts/Tribeca.ttf',
  display: 'swap',
  variable: '--font-tribeca'
});

export const metadata: Metadata = {
  title: "ApeSafari - The Meme Coin for Africa and Friends",
  description: "Meme Coin",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body className="bg-white text-black relative font-noto">
        {/* <Navbar /> */}
          <main>
            <Providers>
              {children}
            </Providers>
          </main>
        <Footer />
      </body>
    </html>
  );
}

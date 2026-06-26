import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import AnimatedNavbar from '@/components/AnimatedNavbar';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Out Loud — Writing from Denmark',
  description: 'Out Loud is a small collection of writing from Denmark — short pieces about light, colour, and quiet days well spent. By Samk.',
  authors: [{ name: 'Samk' }],
  openGraph: {
    title: 'Out Loud',
    description: 'Short pieces about light, colour, and quiet days in Denmark.',
    images: ['/images/nyhavn.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        <AnimatedNavbar />
        <SmoothScrollProvider>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

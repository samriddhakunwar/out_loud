import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About — Out Loud',
  description: 'About the poet behind Out Loud — a collection of poems meant to be read aloud.',
};

export default function AboutPage() {
  return <AboutContent />;
}

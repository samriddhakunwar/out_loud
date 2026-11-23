import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About — Out Loud',
  description: 'About Samk, the writer behind Out Loud — short pieces about places, walks, and quiet days.',
};

export default function AboutPage() {
  return <AboutContent />;
}

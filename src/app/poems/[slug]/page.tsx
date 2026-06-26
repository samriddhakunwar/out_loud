import { poems } from '@/lib/poems';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PoemContent from './PoemContent';

export function generateStaticParams() {
  return poems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) return {};
  return {
    title: `${poem.title} — Out Loud`,
    description: poem.excerpt,
    openGraph: { images: [poem.image] },
  };
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) notFound();

  return <PoemContent poem={poem} />;
}

import { poems } from '@/lib/poems';
import PoemCard from '@/components/PoemCard';
import AnimatedText from '@/components/AnimatedText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poems — Out Loud',
  description: 'The full collection of poems from Out Loud.',
};

export default function PoemsPage() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100svh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '5rem', maxWidth: '600px' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
            The collection
          </p>
          <AnimatedText
            text="Writing"
            as="h1"
            mode="letters"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' } as React.CSSProperties}
          />
          <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}>
            Short pieces from Denmark — a spring ride out to the churches above the Limfjord, and an afternoon by the water at Nyhavn. Written for the days that felt worth keeping.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {poems.map((poem, i) => (
            <PoemCard key={poem.slug} poem={poem} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

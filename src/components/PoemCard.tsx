'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Poem, PoemTheme } from '@/lib/poems';

const themeColors: Record<PoemTheme, string> = {
  fire: '#d4775e',
  longing: '#8e7bb0',
  stillness: '#6b8cae',
  wonder: '#c9a96e',
};

export default function PoemCard({ poem, index }: { poem: Poem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{
        opacity: { duration: 0.7, ease: 'easeOut' },
        y: { type: 'spring', stiffness: 220, damping: 26, mass: 0.5 },
        delay: index * 0.08,
      }}
    >
      <Link href={`/poems/${poem.slug}`} id={`poem-card-${poem.slug}`} data-cursor="Read" style={{ display: 'block', height: '100%' }}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 240, damping: 22, mass: 0.5 }}
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.25rem 2rem 2rem',
            borderRadius: '4px',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Accent rule */}
          <span style={{
            position: 'absolute', top: 0, left: 0, height: '3px', width: '64px',
            background: themeColors[poem.theme],
          }} />

          <p style={{ fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: themeColors[poem.theme], marginBottom: '1.25rem' }}>
            {poem.theme} · {poem.form}
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            {poem.title}
          </h2>

          <p style={{ color: 'var(--fg-muted)', fontSize: '0.8rem', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
            {poem.tagline}
          </p>

          <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.5, color: 'var(--fg)', marginBottom: '2rem', flexGrow: 1 }}>
            “{poem.excerpt}”
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
              {poem.date} · Samk
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Read <span style={{ fontSize: '1rem' }}>→</span>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

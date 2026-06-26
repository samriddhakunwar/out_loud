'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

export default function AboutContent() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100svh' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', height: '520px', borderRadius: '3px', overflow: 'hidden', border: '1px solid var(--border)' }}
            >
              <Image
                src="/images/church.jpg"
                alt="The poet"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.7) saturate(0.85)' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,16,0.55) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  Out Loud · 2024
                </span>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              width: '80px', height: '80px',
              border: '1px solid var(--accent)', borderRadius: '2px',
              opacity: 0.3, pointerEvents: 'none',
            }} />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}
            >
              The writer
            </motion.p>

            <AnimatedText
              text="Samk"
              as="h1"
              mode="letters"
              delay={0.5}
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-heading)', marginBottom: '2rem', lineHeight: 1 } as React.CSSProperties}
            />

            {[
              "I'm Samk. Out Loud is where I write down the things I'd otherwise just think and forget.",
              "A lot of it starts close to home, but it won't stay there. Wherever I happen to be, if a place makes me stop and look, I'll write it down. A bike ride to an old stone, a harbour on a clear afternoon, somewhere I haven't been yet. I take the photos myself, in every season and every kind of weather, and then I try to put into words what made the place worth remembering.",
              "It isn't a travel guide or a portfolio, not really. It's closer to a notebook left open: places, walks, and whatever else feels worth slowing down for. Thoughts out loud, mistakes and all. Refunds available at the same price you paid.",
            ].map((text, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}
            >
              <Link href="/poems" id="about-poems-link" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>
                Read the writing
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

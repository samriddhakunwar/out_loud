'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Poem } from '@/lib/poems';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedText from '@/components/AnimatedText';

export default function PoemContent({ poem }: { poem: Poem }) {
  return (
    <>
      <ScrollProgress />
      <main>
        {/* Hero */}
        <div style={{ position: 'relative', height: '70svh', overflow: 'hidden' }}>
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={poem.image}
              alt=""
              fill
              style={{ objectFit: 'cover', filter: 'brightness(0.3) saturate(0.8)' }}
              priority
              sizes="100vw"
            />
          </motion.div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,16,0.4) 0%, var(--bg) 100%)' }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '5rem 2rem', textAlign: 'center' }}>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              {poem.theme} · {poem.form} · {poem.date}
            </motion.p>
            <AnimatedText text={poem.title} as="h1" mode="words" delay={0.7}
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-heading)', maxWidth: '900px', marginBottom: '1rem' } as React.CSSProperties} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
              style={{ color: 'var(--fg-muted)', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.6 }}>
              {poem.tagline}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
              style={{ marginTop: '1.25rem', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
              By <span style={{ color: 'var(--fg)' }}>Samk</span>
            </motion.p>
          </div>
        </div>

        {/* Body */}
        <article style={{ maxWidth: '680px', margin: '0 auto', padding: '5rem 2rem 8rem' }}>
          {poem.content.map((block, bi) => {
            if (block.type === 'paragraph') {
              return (
                <motion.p key={bi}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: 'var(--fg)', lineHeight: 1.9, fontSize: '1.1rem', marginBottom: '1.75rem' }}>
                  {block.text}
                </motion.p>
              );
            }
            if (block.type === 'caption') {
              if (block.image) {
                return (
                  <motion.figure key={bi}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-6% 0px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ margin: '3.5rem 0' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', borderRadius: '3px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                      <Image
                        src={block.image}
                        alt={block.alt ?? ''}
                        fill
                        style={{ objectFit: 'cover', filter: 'saturate(0.9)' }}
                        sizes="(max-width: 768px) 100vw, 680px"
                      />
                    </div>
                    <figcaption style={{ marginTop: '1rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--fg-muted)', textAlign: 'center', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                      {block.text}
                    </figcaption>
                  </motion.figure>
                );
              }
              return (
                <motion.figure key={bi}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ margin: '2.75rem 0' }}>
                  <figcaption style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.4rem', lineHeight: 1.5, color: 'var(--fg)', fontWeight: 300 }}>
                    {block.text}
                  </figcaption>
                </motion.figure>
              );
            }
            return null;
          })}

          {/* Back */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'center' }}>
            <Link href="/poems" id="back-to-poems" style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              ← All writing
            </Link>
          </motion.div>
        </article>
      </main>
    </>
  );
}

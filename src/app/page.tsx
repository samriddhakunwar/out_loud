'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import AnimatedText from '@/components/AnimatedText';
import { poems } from '@/lib/poems';

const featured = poems.slice(0, 3);

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref as React.RefObject<HTMLElement>, offset: ['start start', 'end start'] });
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const rawY     = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useSpring(rawScale, { stiffness: 60, damping: 18, mass: 0.5 });
  const y     = useSpring(rawY,     { stiffness: 60, damping: 18, mass: 0.5 });

  return (
    <section ref={ref} style={{ position: 'relative', height: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <motion.div style={{ position: 'absolute', inset: 0, scale }}>
        <Image src="/images/nyhavn.jpg" alt="" fill style={{ objectFit: 'cover', filter: 'brightness(0.35) saturate(0.85)' }} priority sizes="100vw" />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,16,0.2) 0%, rgba(13,12,16,0.65) 100%)' }} />

      {/* Content */}
      <motion.div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', y }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}
        >
          A small collection of writing
        </motion.p>

        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
          <AnimatedText
            text="Out Loud"
            as="h1"
            mode="letters"
            delay={0.6}
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)', fontWeight: 400, color: '#f0ebe3', fontStyle: 'italic', fontFamily: 'var(--font-heading)' } as React.CSSProperties}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            style={{ position: 'absolute', right: '0.15rem', top: '100%', marginTop: '-0.9rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(0.75rem, 1.4vw, 1.05rem)', color: 'rgba(240,235,227,0.6)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}
          >
            by Samk
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          style={{ color: 'rgba(240,235,227,0.65)', fontSize: '1.05rem', letterSpacing: '0.02em', maxWidth: '460px', margin: '0 auto 2.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
        >
          Short pieces about light, colour, and the quiet days in between.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'rgba(240,235,227,0.4)' }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Begin reading</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: [0.45, 0, 0.55, 1] }}
            style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
          />
        </motion.div>
      </motion.div>

      {/* Inline link */}
      <motion.div style={{ position: 'absolute', bottom: '2rem', right: '2.5rem', zIndex: 2, opacity }}>
        <Link href="/poems" id="hero-poems-link" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,235,227,0.45)', borderBottom: '1px solid rgba(240,235,227,0.2)', paddingBottom: '2px' }}>
          All writing
        </Link>
      </motion.div>
    </section>
  );
}

const aboutParagraphs = [
  "I'm Samk. Out Loud is where I write down the things I'd otherwise just think and forget.",
  "A lot of it starts close to home, but it won't stay there. Wherever I happen to be, if a place makes me stop and look, I'll write it down. A bike ride to an old stone, a harbour on a clear afternoon, somewhere I haven't been yet. I take the photos myself, in every season and every kind of weather, and then I try to put into words what made the place worth remembering.",
  "It isn't a travel guide or a portfolio, not really. It's closer to a notebook left open: places, walks, and whatever else feels worth slowing down for. Thoughts out loud, mistakes and all. Refunds available at the same price you paid.",
];

function AboutSection() {
  return (
    <section style={{ padding: '8rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}
        >
          About
        </motion.p>

        <AnimatedText
          text="A notebook left open."
          as="h2"
          mode="words"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-heading)', marginBottom: '2.5rem', lineHeight: 1.1 } as React.CSSProperties}
        />

        {aboutParagraphs.map((text, i) => (
          <motion.p key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

function FeaturedPoem({ poem, i }: { poem: typeof poems[0]; i: number }) {
  const isRight = i % 2 === 1;
  return (
    <section style={{ padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <motion.p
          initial={{ opacity: 0, x: isRight ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.6, ease: 'easeOut' },
            x: { type: 'spring', stiffness: 240, damping: 28, mass: 0.5 },
          }}
          style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem', textAlign: isRight ? 'right' : 'left' }}
        >
          {poem.theme} · {poem.form}
        </motion.p>

        <AnimatedText
          text={poem.title}
          as="h2"
          mode="words"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 400, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', textAlign: isRight ? 'right' : 'left' } as React.CSSProperties}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.5, color: 'var(--fg)', marginBottom: '2.25rem', textAlign: isRight ? 'right' : 'left' }}
        >
          “{poem.excerpt}”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: isRight ? 'right' : 'left' }}
        >
          <Link href={`/poems/${poem.slug}`} id={`featured-link-${i}`} data-cursor="Read" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: '3px' }}>
            Read the piece <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {featured.map((p, i) => <FeaturedPoem key={p.slug} poem={p} i={i} />)}

      {/* CTA */}
      <section style={{ padding: '8rem 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>
          The whole collection
        </motion.p>
        <AnimatedText text="Read them all." as="h2" mode="words" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, fontStyle: 'italic', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)' } as React.CSSProperties} />
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <Link href="/poems" id="cta-poems" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid var(--accent)', color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: '2px' }}>
            Open the collection
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

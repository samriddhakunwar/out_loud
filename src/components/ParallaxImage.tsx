'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
}

export default function ParallaxImage({ src, alt, className = '', style, strength = 60 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-5% 0px' });

  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  // Spring-dampen the raw parallax value to eliminate scroll-jitter
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ overflow: 'hidden', position: 'relative', ...style }}
      className={className}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div style={{ y, scale: 1.12, width: '100%', height: '100%', position: 'relative', willChange: 'transform' }}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', filter: 'brightness(0.88)' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

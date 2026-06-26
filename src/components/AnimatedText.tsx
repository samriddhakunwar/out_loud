'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  mode?: 'letters' | 'words';
}

export default function AnimatedText({
  text, className = '', style, delay = 0,
  as: Tag = 'h1', mode = 'letters',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' });

  const units = mode === 'letters' ? text.split('') : text.split(' ');

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: mode === 'letters' ? 0.025 : 0.065, delayChildren: delay } },
  };
  const item = {
    hidden: { y: '105%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 24,
        mass: 0.4,
      },
    },
  };

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className} style={style} aria-label={text}>
      <motion.span
        style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {units.map((unit, i) => (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span variants={item} style={{ display: 'inline-block' }}>
              {unit === ' ' ? '\u00a0' : unit}
            </motion.span>
            {mode === 'words' && i < units.length - 1 && '\u00a0'}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState('');

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { damping: 32, stiffness: 320, mass: 0.5 });
  const dotY = useSpring(my, { damping: 32, stiffness: 320, mass: 0.5 });
  const ringX = useSpring(mx, { damping: 28, stiffness: 120, mass: 0.8 });
  const ringY = useSpring(my, { damping: 28, stiffness: 120, mass: 0.8 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener('mousemove', move);

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a') || el.closest('button')) {
        setHovered(true);
        const dataLabel = el.closest('[data-cursor]')?.getAttribute('data-cursor');
        setLabel(dataLabel || '');
      }
    };
    const onLeave = () => { setHovered(false); setLabel(''); };

    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [mx, my]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY, willChange: 'transform' }} />
      <motion.div className={`cursor-ring ${hovered ? 'hovered' : ''}`} style={{ x: ringX, y: ringY, willChange: 'transform' }}>
        {label && (
          <span style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--fg)', fontFamily: 'var(--font-body)',
          }}>
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}

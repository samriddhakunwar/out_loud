'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.8,
      // Smooth cubic ease-out — feels organic, not mechanical
      easing: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      lerp: 0.08,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user": framer-motion drops transform animations when the OS asks for less motion
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

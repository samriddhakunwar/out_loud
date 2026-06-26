'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          opacity: { duration: 0.45, ease: 'easeOut' },
          y: { type: 'spring', stiffness: 260, damping: 28, mass: 0.6 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

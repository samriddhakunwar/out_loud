'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/poems', label: 'Writing' },
];

export default function AnimatedNavbar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 60));

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{
        opacity: { duration: 0.4, ease: 'easeOut' },
        y: { type: 'spring', stiffness: 240, damping: 26, mass: 0.6 },
      }}
    >
      <Link href="/" className="navbar-logo" id="nav-logo">
        Out Loud
      </Link>

      <div className="navbar-links">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="nav-link" id={`nav-${label.toLowerCase()}`}>
            {label}
          </Link>
        ))}
        <DarkModeToggle />
      </div>
    </motion.nav>
  );
}

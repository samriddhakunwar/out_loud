'use client';

// Icon is picked by CSS from the `light` class set pre-paint in layout, so no state is needed
export default function DarkModeToggle() {
  const toggle = () => {
    const light = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', light ? 'light' : 'dark');
  };

  return (
    <button className="theme-btn" onClick={toggle} aria-label="Toggle theme" id="theme-toggle">
      <span className="theme-icon-dark">☀</span>
      <span className="theme-icon-light">☽</span>
    </button>
  );
}

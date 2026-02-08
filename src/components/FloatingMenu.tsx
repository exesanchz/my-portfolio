'use client';

import { useState, useEffect } from 'react';
import { useScreenSize } from '@/hooks/useScreenSize';
import { handleHashNavigation } from '@/utils/smoothScroll';

/**
 * Floating Menu Component
 *
 * A fixed, centered navigation menu with smooth scroll.
 *
 * Strategy: Uses hash-based navigation (#section-id) for:
 * - URL updates (bookmarkable/shareable)
 * - No JavaScript required (works without JS)
 * - Smooth scrolling via CSS (scroll-behavior: smooth)
 * - Better accessibility and semantics
 *
 * Behavior:
 * - Desktop (>= 1024px): Always visible
 * - Mobile/Tablet (< 1024px): Appears after scrolling 300px
 */

const menuItems = [
  { id: 'skills', label: 'SKILLS' },
  { id: 'resume', label: 'RESUME' },
  { id: 'contact', label: 'CONTACT' },
];

export default function FloatingMenu() {
  const { isDesktop } = useScreenSize();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track if user has scrolled past hero (for mobile)
      setHasScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop: always visible | Mobile/Tablet: show after scroll
  const isVisible = isDesktop || hasScrolled;

  return (
    <div
      className={`fixed left-1/2 top-8 z-50 -translate-x-1/2 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
      }`}
    >
      <nav
        className="flex items-center gap-2 rounded-full px-6 py-2 backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(13, 15, 29, 0.8)',
          border: '2px solid var(--color-deep-purple-2)',
          boxShadow: '0 4px 12px rgba(43, 21, 142, 0.2)',
        }}
      >
        {menuItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleHashNavigation(e, `#${item.id}`)}
            className={`rounded-full px-4 py-2 text-sm font-bold text-text-secondary transition-all 
              duration-200 hover:bg-surface-light hover:text-text`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

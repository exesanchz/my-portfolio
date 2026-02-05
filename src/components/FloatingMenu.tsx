'use client';

import { useState, useEffect } from 'react';
import { useScreenSize } from '@/hooks/useScreenSize';

/**
 * Floating Menu Component
 * 
 * A fixed, centered navigation menu with smooth scroll.
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Desktop: always visible | Mobile/Tablet: show after scroll
  const isVisible = isDesktop || hasScrolled;

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <nav
        className="flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(13, 15, 29, 0.8)',
          border: '2px solid #2B158E',
          boxShadow: '0 4px 12px rgba(43, 21, 142, 0.2)',
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 
              text-text-secondary hover:text-text hover:bg-surface-light`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

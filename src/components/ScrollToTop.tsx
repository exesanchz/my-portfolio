'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { smoothScrollToTop } from '@/utils/smoothScroll';

/**
 * ScrollToTop Component
 * 
 * A floating button that appears after scrolling down.
 * Takes the user back to the top of the page with smooth scrolling.
 * 
 * Features:
 * - Shows after scrolling past the hero section (~600px)
 * - Smooth fade-in/out animation
 * - Positioned in bottom-right corner (avoids centered toast)
 * - Matches portfolio dark theme
 * - Smooth scroll to top on click
 * 
 * Design Philosophy:
 * - Minimal and unobtrusive
 * - Premium feel with glow effect
 * - Proper z-index to avoid conflicts
 */

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 600px (roughly past hero section)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    smoothScrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-[9000]
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gradient-to-r from-[#2B158E] to-[#511B4C]
        text-text shadow-card-hover
        transition-all duration-300
        hover:scale-110 hover:shadow-glow-primary
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  );
}

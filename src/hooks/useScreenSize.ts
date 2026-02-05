'use client';

import { useState, useEffect } from 'react';

/**
 * Screen Size Breakpoints
 * 
 * Matches Tailwind's default breakpoints for consistency
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Screen Size Hook
 * 
 * Provides consistent screen size detection across the application.
 * Returns boolean flags for each breakpoint and the current width.
 * 
 * Usage:
 * ```tsx
 * const { isMobile, isTablet, isDesktop, width } = useScreenSize();
 * 
 * if (isDesktop) {
 *   // Desktop-specific logic
 * }
 * ```
 */
export function useScreenSize() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Initialize with current width
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    // Mobile: < 768px
    isMobile: width < BREAKPOINTS.md,
    // Tablet: 768px - 1024px
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    // Desktop: >= 1024px
    isDesktop: width >= BREAKPOINTS.lg,
    // Specific breakpoint checks
    isSmUp: width >= BREAKPOINTS.sm,
    isMdUp: width >= BREAKPOINTS.md,
    isLgUp: width >= BREAKPOINTS.lg,
    isXlUp: width >= BREAKPOINTS.xl,
    is2XlUp: width >= BREAKPOINTS['2xl'],
  };
}

/**
 * Media Query Hook
 * 
 * For custom media queries beyond standard breakpoints.
 * 
 * Usage:
 * ```tsx
 * const isWide = useMediaQuery('(min-width: 1400px)');
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Update on change
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Legacy browsers
    else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
}

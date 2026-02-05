import type { Config } from 'tailwindcss';

/**
 * Design System - Tailwind Configuration
 *
 * This configuration defines the visual foundation of the portfolio.
 * Color palette is designed for a dark, tech-oriented aesthetic.
 *
 * Color Philosophy:
 * - Deep, rich backgrounds create depth
 * - Subtle surface colors for elevated content
 * - Vibrant accents (blue/purple) for CTAs and highlights
 * - High contrast text for readability
 */

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    /**
     * Container Configuration
     *
     * Provides a responsive container utility that works alongside
     * custom container classes (.container-custom, etc).
     *
     * Usage: <div className="container">
     * - Automatically centered
     * - Responsive horizontal padding
     * - Aligned with existing maxWidth tokens
     */
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 16px mobile
        md: '2rem', // 32px tablet
        lg: '3rem', // 48px desktop
      },
      screens: {
        xl: '1280px', // Matches max-w-section
        '2xl': '1536px', // Matches max-w-wide
      },
    },

    extend: {
      /**
       * Color Palette
       *
       * Naming convention: Semantic > Literal
       * This allows easy theme swaps without touching components
       */
      colors: {
        // Base colors from Figma
        'deep-space': '#050647', // Deepest dark - for backgrounds
        'dark-navy': '#0D0F1D', // Primary dark background
        'light-text': '#E2E4F4', // Primary text color
        'electric-blue': '#58A6FF', // Primary accent (CTAs, links)
        'cosmic-purple': '#A74AC7', // Secondary accent (highlights)
        'deep-purple': '#511B4C', // Gradient purple variant

        // Semantic color tokens
        // These should be used in components for consistency
        background: {
          DEFAULT: '#0D0F1D', // Main page background
          deep: '#050647', // Deeper sections (hero, footer)
          elevated: '#1A1D35', // Cards, modals (lighter than bg)
          hover: '#24283F', // Hover states for interactive elements
        },

        surface: {
          DEFAULT: '#1A1D35', // Default surface (cards)
          light: '#24283F', // Lighter surface variant
          border: '#2D3250', // Borders and dividers
        },

        primary: {
          DEFAULT: '#58A6FF', // Primary actions, links
          light: '#78B6FF', // Hover state
          dark: '#3886DF', // Active/pressed state
          glow: 'rgba(88, 166, 255, 0.2)', // For glows and shadows
        },

        secondary: {
          DEFAULT: '#A74AC7', // Secondary actions, accents
          light: '#B768D4', // Hover state
          dark: '#8B3AA7', // Active state
          glow: 'rgba(167, 74, 199, 0.2)', // For glows
        },

        text: {
          DEFAULT: '#E2E4F4', // Primary text
          secondary: '#9BA3C5', // Secondary text (less emphasis)
          tertiary: '#6B7399', // Tertiary text (subtle)
          muted: '#4A5070', // Very subtle text (placeholders)
        },
      },

      /**
       * Font Family
       *
       * Outfit is a modern, geometric sans-serif font.
       * Provides excellent readability and a tech-forward aesthetic.
       * Falls back to system fonts for optimal loading.
       */
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },

      /**
       * Typography Scale
       *
       * Following a harmonious scale for readability and hierarchy.
       * Sizes are optimized for dark backgrounds.
       */
      fontSize: {
        // Hero and display text
        hero: [
          '4.5rem',
          {
            // 72px
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        display: [
          '3.75rem',
          {
            // 60px
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],

        // Section titles
        h1: [
          '3rem',
          {
            // 48px
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            fontWeight: '700',
          },
        ],
        h2: [
          '2.25rem',
          {
            // 36px
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.875rem',
          {
            // 30px
            lineHeight: '1.3',
            fontWeight: '600',
          },
        ],
        h4: [
          '1.5rem',
          {
            // 24px
            lineHeight: '1.4',
            fontWeight: '600',
          },
        ],

        // Body text
        'body-lg': [
          '1.125rem',
          {
            // 18px
            lineHeight: '1.7',
          },
        ],
        body: [
          '1rem',
          {
            // 16px
            lineHeight: '1.6',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            // 14px
            lineHeight: '1.6',
          },
        ],

        // Small text and labels
        label: [
          '0.875rem',
          {
            // 14px
            lineHeight: '1.5',
            fontWeight: '500',
          },
        ],
        caption: [
          '0.75rem',
          {
            // 12px
            lineHeight: '1.5',
          },
        ],
      },

      /**
       * Spacing Scale
       *
       * Extended spacing for large sections and layouts
       */
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '34': '8.5rem', // 136px
      },

      /**
       * Border Radius
       *
       * Modern, subtle curves for cards and buttons
       */
      borderRadius: {
        card: '1rem', // 16px - for cards
        button: '0.75rem', // 12px - for buttons
        input: '0.5rem', // 8px - for inputs
        tag: '0.375rem', // 6px - for tags/pills
      },

      /**
       * Box Shadows
       *
       * Subtle shadows for depth on dark backgrounds
       * Using colored shadows for a modern, glowing effect
       */
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'glow-primary': '0 0 20px rgba(88, 166, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(167, 74, 199, 0.3)',
        'glow-subtle': '0 0 40px rgba(88, 166, 255, 0.15)',
        'inner-subtle': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      },

      /**
       * Gradients
       *
       * Predefined gradient stops for hero sections and accents
       * Use with bg-gradient-to-* utilities
       */
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #58A6FF 0%, #A74AC7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #050647 0%, #0D0F1D 50%, #511B4C 100%)',
        'gradient-surface': 'linear-gradient(180deg, #1A1D35 0%, #0D0F1D 100%)',
        'gradient-glow':
          'radial-gradient(circle at 50% 0%, rgba(88, 166, 255, 0.1) 0%, transparent 50%)',
      },

      /**
       * Maximum Width
       *
       * Content width constraints for different sections
       */
      maxWidth: {
        content: '65ch', // Ideal line length for reading
        section: '1280px', // Max width for sections
        wide: '1536px', // Extra wide for special sections
      },

      /**
       * Animation Duration
       *
       * Consistent timing for transitions (when animations are added later)
       */
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
      },

      /**
       * Z-Index Scale
       *
       * Layering hierarchy for overlays and fixed elements
       */
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
    },
  },
  plugins: [],
};

export default config;

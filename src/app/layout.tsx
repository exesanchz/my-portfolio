import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Font configuration using Next.js built-in font optimization
 * Outfit is a modern, geometric sans-serif font perfect for portfolios
 * Loaded with multiple weights for design flexibility
 */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
});

/**
 * Root metadata for SEO
 * These values will be inherited by all pages unless overridden
 */
export const metadata: Metadata = {
  title: {
    default: 'Exequiel Sanchez - Resume',
    template: '%s | Exequiel Sanchez',
  },
  description: 'Personal portfolio showcasing skills and experience',
  keywords: ['portfolio', 'software engineer', 'ui/ux', 'frontend'],
  authors: [{ name: 'Exequiel Sanchez' }],
  creator: 'Exequiel Sanchez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exequiel-sanchez.vercel.app/',
    siteName: 'Exequiel Sanchez - Resume',
    title: 'Exequiel Sanchez - Resume',
    description: 'Personal portfolio showcasing skills and experience',
  },
};

/**
 * Root Layout Component
 *
 * Single-page portfolio layout with:
 * - Floating menu for navigation
 * - Scroll to top button
 * - Footer at bottom
 * - Font configuration
 * - Global styles
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="flex min-h-screen flex-col">
        <FloatingMenu />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

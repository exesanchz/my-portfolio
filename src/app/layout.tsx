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
    default: 'Your Name - Portfolio',
    template: '%s | Your Name',
  },
  description: 'Personal portfolio showcasing projects, skills, and experience',
  keywords: ['portfolio', 'web developer', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    title: 'Your Name - Portfolio',
    description: 'Personal portfolio showcasing projects, skills, and experience',
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

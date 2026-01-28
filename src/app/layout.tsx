import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Font configuration using Next.js built-in font optimization
 * Inter is a modern, clean font perfect for portfolios
 */
const inter = Inter({ subsets: ['latin'] });

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
 * This layout wraps all pages in the application.
 * It provides:
 * - HTML structure
 * - Global styles
 * - Persistent UI elements (Navbar, Footer)
 * - Font configuration
 * 
 * The min-h-screen and flex column ensure footer stays at bottom.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

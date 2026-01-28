'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navigation items configuration
 * Makes it easy to add or modify navigation links
 */
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Navbar Component
 * 
 * A responsive navigation bar that highlights the current page.
 * Uses Next.js Link for client-side navigation and usePathname for active state.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Portfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 * Footer Component
 * 
 * A simple, reusable footer that appears on all pages.
 * Can be extended with social links, copyright info, etc.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container-custom py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social links placeholder - can be extended */}
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

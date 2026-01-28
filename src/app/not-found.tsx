import Link from 'next/link';

/**
 * 404 Not Found Page
 * 
 * Displayed when a user navigates to a non-existent route.
 * Provides helpful navigation back to main sections.
 */
export default function NotFound() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

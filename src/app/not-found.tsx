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
      <div className="mx-auto max-w-2xl py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

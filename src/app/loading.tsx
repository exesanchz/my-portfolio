/**
 * Loading Component
 *
 * Displayed while a page or component is loading.
 * Provides visual feedback to users during navigation or data fetching.
 *
 * This is a simple spinner, can be customized with:
 * - Skeleton screens
 * - Brand-specific animations
 * - Progress indicators
 */
export default function Loading() {
  return (
    <div className="container-custom py-16">
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Simple spinner */}
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    </div>
  );
}

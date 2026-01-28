import type { Metadata } from 'next';

/**
 * Home page metadata
 * Overrides the default metadata from layout
 */
export const metadata: Metadata = {
  title: 'Home',
};

/**
 * Home Page Component
 * 
 * The main landing page of the portfolio.
 * Should include:
 * - Hero section with introduction
 * - Brief overview of skills
 * - Call-to-action links
 */
export default function HomePage() {
  return (
    <div className="container-custom py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate full-stack developer specializing in building modern web applications
          with React, Next.js, and TypeScript.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Backend
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Node.js, Express, PostgreSQL, MongoDB, REST APIs
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Git, Docker, AWS, Vercel, CI/CD, Jest
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

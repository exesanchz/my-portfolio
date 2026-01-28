import type { Metadata } from 'next';

/**
 * Contact page metadata
 */
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
};

/**
 * Contact Page Component
 * 
 * Provides multiple ways to get in touch.
 * Form functionality can be added later using:
 * - Server Actions
 * - API routes
 * - Third-party services (Formspree, EmailJS, etc.)
 */
export default function ContactPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m always interested in hearing about new opportunities and projects.
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Form Placeholder */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
            Note: Form submission functionality to be implemented
          </p>
        </div>

        {/* Alternative Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:hello@example.com"
            className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="text-2xl mb-2">📧</div>
            <div className="font-medium text-gray-900 dark:text-white">Email</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">hello@example.com</div>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="text-2xl mb-2">💼</div>
            <div className="font-medium text-gray-900 dark:text-white">LinkedIn</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Connect with me</div>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="text-2xl mb-2">💻</div>
            <div className="font-medium text-gray-900 dark:text-white">GitHub</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">View my code</div>
          </a>
        </div>
      </div>
    </div>
  );
}

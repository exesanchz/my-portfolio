import type { Metadata } from 'next';

/**
 * Resume page metadata
 */
export const metadata: Metadata = {
  title: 'Resume',
  description: 'My professional experience and education',
};

/**
 * Resume Page Component
 * 
 * Displays professional experience, education, and skills.
 * Can be extended with:
 * - PDF download functionality
 * - Print-friendly styles
 * - Dynamic content from a CMS
 */
export default function ResumePage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                Your Name
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </p>
            </div>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
              Download PDF
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>📧 hello@example.com</span>
            <span>📍 Your Location</span>
            <span>🔗 yourwebsite.com</span>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Passionate full-stack developer with X years of experience building scalable web
            applications. Specialized in React, Next.js, and modern web technologies. Strong focus
            on clean code, user experience, and continuous learning.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Company Name</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  2022 - Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Led development of key features using React and Next.js</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Another Company</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  2020 - 2022
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Built responsive web applications using modern frameworks</li>
                <li>Implemented RESTful APIs and database designs</li>
                <li>Collaborated with cross-functional teams in Agile environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="border-l-2 border-blue-600 pl-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600 dark:text-gray-400">University Name</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                2016 - 2020
              </span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                Backend & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Git', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

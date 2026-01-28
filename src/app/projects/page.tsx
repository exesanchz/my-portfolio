import type { Metadata } from 'next';

/**
 * Projects page metadata
 */
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my latest projects and work',
};

/**
 * Project type definition
 * Makes it easy to add and manage projects
 */
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

/**
 * Projects data
 * This can be moved to a separate file or fetched from a CMS
 */
const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your first project. Explain what problem it solves and what makes it interesting.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.vercel.app',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of your second project. Highlight key features and technical achievements.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.vercel.app',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of your third project. Mention any unique challenges you overcame.',
    technologies: ['React', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-three',
  },
];

/**
 * Projects Page Component
 * 
 * Displays a grid of project cards.
 * Each card can be extended with images, tags, etc.
 */
export default function ProjectsPage() {
  return (
    <div className="container-custom py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          A collection of projects I&apos;ve worked on. Each project represents a unique challenge
          and learning opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  GitHub →
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

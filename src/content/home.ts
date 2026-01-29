/**
 * Home Page Content
 * 
 * Centralized content management for the home page.
 * Separates copy from components for easier maintenance.
 * 
 * Benefits:
 * - Single source of truth for all home page text
 * - Easy to update without touching component code
 * - Prepares for future i18n or CMS integration
 * - Type-safe content structure
 */

export const homeContent = {
  /**
   * Hero Section Content
   */
  hero: {
    headline: "Hi 👋 , I'm",
    highlightedText: "Exequiel",
    subHeadline: "Software Engineer & UI/UX Enthusiast",
    subtitle: "Elevating Experiences with Frontend Innovation",
    primaryCTA: {
      text: "MY WORK",
      href: "/projects",
    },
  },

  /**
   * Skills Section Content
   */
  skills: {
    heading: "Skills & Technologies",
    description: "A comprehensive toolkit for building modern web applications",
    
    categories: [
      {
        icon: "⚛️",
        title: "Frontend",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
        ],
      },
      {
        icon: "⚙️",
        title: "Backend",
        skills: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "REST APIs",
        ],
      },
      {
        icon: "🛠️",
        title: "Tools",
        skills: [
          "Git",
          "Docker",
          "AWS",
          "Vercel",
          "CI/CD",
          "Jest",
        ],
      },
    ],
  },
} as const;

/**
 * Type exports for use in components
 */
export type HomeContent = typeof homeContent;
export type HeroContent = typeof homeContent.hero;
export type SkillsContent = typeof homeContent.skills;

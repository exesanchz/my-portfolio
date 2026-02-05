import { File } from 'lucide-react';

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
   * Feature Grid Content
   * 
   * Grid Layout (Desktop 2-column):
   * Row 1-2: clean-code (left, 2 rows) | ux-design (right, 1 row)
   * Row 3:   contact (left, 1 row)      | (ux-design continues)
   * Row 4-5: passion (left, 1 row)      | illustration (right, 2 rows)
   * Row 6:   resume (left, 1 row)       | (illustration continues)
   * 
   * Circular Gradient Effect:
   * Each card's gradient radiates towards the center of the grid
   */
  features: [
    {
      id: "clean-code",
      title: "Clean, maintainable, and scalable code to power your ideas",
      variant: "image" as const,
      gridSpan: { cols: 1 as const, rows: 2 as const },
      textAlign: "left" as const,
      backgroundImage: '/images/features/clean-code.jpeg',
      gradient: 'linear-gradient(135deg, #1a0f3e 0%, #040847 100%)',
    },
    {
      id: "ux-design",
      title: "User-friendly Interface & UX",
      variant: "gradient-primary" as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: "center" as const,
      backgroundImage: '/images/features/user-friendly.jpeg',
      gradient: 'linear-gradient(225deg, #2B158E 0%, #040847 100%)',
    },
    {
      id: "contact",
      title: "Let's connect!",
      cta: {
        text: "EMAIL ADDRESS",
        href: "/contact",
      },
      variant: "gradient-purple" as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: "center" as const,
      gradient: 'linear-gradient(215deg, #272AAC 0%, #3B1548 96%)',
    },
    {
      id: "passion",
      title: "Tech enthusiast with a passion for Design",
      variant: "surface" as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: "center" as const,
      gradient: 'linear-gradient(90deg, #040847 0%, #511B4C 100%)',
    },
    {
      id: "illustration",
      title: "",
      variant: "image" as const,
      gridSpan: { cols: 1 as const, rows: 2 as const },
      textAlign: "right" as const,
      backgroundImage: '/images/features/illustration-panel.jpeg',
      gradient: 'linear-gradient(315deg, #2B158E 0%, #040847 100%)',
    },
    {
      id: "resume",
      title: "Download my resume!",
      cta: {
        text: "RESUME",
        href: "/resume",
        icon: <File className='size-5'/>,
      },
      variant: "gradient-purple" as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: "center" as const,
      gradient: 'linear-gradient(45deg, #050647 0%, #511B4C 100%)',
    },
  ],

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
export type FeaturesContent = typeof homeContent.features;
export type SkillsContent = typeof homeContent.skills;

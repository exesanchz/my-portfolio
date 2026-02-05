import { Code, Download, File, Mail, Server, Settings, Wrench } from 'lucide-react';

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
    highlightedText: 'Exequiel',
    subHeadline: 'Software Engineer & UI/UX Enthusiast',
    subtitle: 'Elevating Experiences with Frontend Innovation',
    primaryCTA: {
      text: 'MY WORK',
      href: '/projects',
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
      id: 'clean-code',
      title: 'Clean, maintainable, and scalable code to power your ideas',
      variant: 'image' as const,
      gridSpan: { cols: 1 as const, rows: 2 as const },
      textAlign: 'left' as const,
      backgroundImage: '/images/features/clean-code.jpeg',
      gradient: 'linear-gradient(135deg, #1a0f3e 0%, #040847 100%)',
    },
    {
      id: 'ux-design',
      title: 'User-friendly Interface & UX',
      variant: 'gradient-primary' as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: 'center' as const,
      backgroundImage: '/images/features/user-friendly.jpeg',
      gradient: 'linear-gradient(225deg, #2B158E 0%, #040847 100%)',
    },
    {
      id: 'contact',
      title: "Let's connect!",
      cta: {
        text: 'EMAIL ADDRESS',
        href: '/contact',
        icon: <Mail className="mr-2 size-5" />,
      },
      variant: 'gradient-purple' as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: 'center' as const,
      gradient: 'linear-gradient(215deg, #272AAC 0%, #3B1548 96%)',
    },
    {
      id: 'passion',
      title: 'Tech enthusiast with a passion for Design',
      variant: 'surface' as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: 'center' as const,
      gradient: 'linear-gradient(90deg, #040847 0%, #511B4C 100%)',
    },
    {
      id: 'illustration',
      title: '',
      variant: 'image' as const,
      gridSpan: { cols: 1 as const, rows: 2 as const },
      textAlign: 'right' as const,
      backgroundImage: '/images/features/illustration-panel.jpeg',
      gradient: 'linear-gradient(315deg, #2B158E 0%, #040847 100%)',
    },
    {
      id: 'resume',
      title: 'Download my resume!',
      cta: {
        text: 'RESUME',
        href: '/resume',
        icon: <Download className="size-5" />,
      },
      variant: 'gradient-purple' as const,
      gridSpan: { cols: 1 as const, rows: 1 as const },
      textAlign: 'center' as const,
      gradient: 'linear-gradient(45deg, #050647 0%, #511B4C 100%)',
    },
  ],

  /**
   * Skills Section Content
   */
  skills: {
    heading: 'Skills & Technologies',
    description: 'A comprehensive toolkit for building modern web applications',

    categories: [
      {
        icon: <Code className=" size-5" />,
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      },
      {
        icon: <Settings className=" size-5" />,
        title: 'Backend',
        skills: ['Node.js', '.NET 5', 'PHP', 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        icon: <Wrench className=" size-5" />,
        title: 'Tools',
        skills: ['Git', 'Figma', 'GitHub', 'Jira', 'Trello', 'Vercel', 'CI/CD', 'Jest'],
      },
    ],
  },

  /**
   * Resume Section Content
   */
  resume: {
    summary:
      'Passionate full-stack developer with X years of experience building scalable web applications. Specialized in React, Next.js, and modern web technologies. Strong focus on clean code, user experience, and continuous learning.',

    experiences: [
      {
        title: 'Senior Developer',
        company: 'Company Name',
        period: '2022 - Present',
        achievements: [
          'Led development of key features using React and Next.js',
          'Improved application performance by 40% through optimization',
          'Mentored junior developers and conducted code reviews',
        ],
        isHighlighted: true,
      },
      {
        title: 'Full Stack Developer',
        company: 'Another Company',
        period: '2020 - 2022',
        achievements: [
          'Built responsive web applications using modern frameworks',
          'Implemented RESTful APIs and database designs',
          'Collaborated with cross-functional teams in Agile environment',
        ],
      },
    ],

    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University Name',
        period: '2016 - 2020',
      },
    ],
  },

  /**
   * Contact Section Content
   */
  contact: {
    email: 'exequielnsanchez@gmail.com',
    linkedin: 'https://www.linkedin.com/in/exequiel-sanchez-6145881b9/',
  },
} as const;

/**
 * Type exports for use in components
 */
export type HomeContent = typeof homeContent;
export type HeroContent = typeof homeContent.hero;
export type FeaturesContent = typeof homeContent.features;
export type SkillsContent = typeof homeContent.skills;
export type ResumeContent = typeof homeContent.resume;
export type ContactContent = typeof homeContent.contact;

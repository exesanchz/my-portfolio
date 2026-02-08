import { Atom, Code, Download, File, Mail, Server, Settings, Wrench } from 'lucide-react';

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
      href: '#work-experience',
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
        text: 'COPY EMAIL',
        href: 'mailto:exequielnsanchez@gmail.com',
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
        icon: <Atom className=" size-5" />,
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
      'Product-focused Software Engineer with experience building end-to-end features across web and mobile applications. I specialize in creating high-quality user experiences while collaborating closely with product and engineering teams in fast-paced environments. I am currently strengthening my frontend expertise while leveraging my full-stack background to deliver impactful, scalable solutions.',

    experiences: [
      {
        title: 'Software Engineer',
        company: 'TRAZA',
        companyUrl: 'https://traza.com.au/',
        location: 'Sydney, Australia',
        period: 'September 2025 - Present',
        achievements: [
          'Collaborated with product and engineering stakeholders to define business logic and translate requirements into scalable technical solutions.',
          'Designed and implemented user interfaces with a focus on usability, performance, and maintainability.',
          'Managed Jira workflows, structuring and maintaining product-aligned epics.',
          'Built end-to-end features across the stack (frontend and server-side logic).',
          'Implemented an i18n (internationalization) library across the platform to support Spanish and Italian, owning end-to-end localization including all translations.',
          'Leveraged Firebase (DB, Authentication, and Cloud Functions) to power data, identity, and automated emails/notifications.',
        ],
        isHighlighted: true,
      },
      {
        title: 'Frontend Engineer',
        company: 'TOT Money',
        companyUrl: 'https://tot.money/',
        location: 'Milan, Italy',
        period: 'January 2024 - February 2025',
        achievements: [
          'Designed and optimized user registration flows to improve onboarding experience.',
          'Developed and shipped new platform features including profiles, transactions, and user settings.',
          'Ensure interfaces are responsive across various devices and browsers.',
          'Work closely with backend developers, designers, and stakeholders to align business goals with user needs.',
          'Write clean, reusable, and maintainable code while participating in code reviews to ensure best practices and standards.',
        ],
        isHighlighted: true,
      },
      {
        title: 'Full Stack Developer',
        company: 'Folder IT',
        companyUrl: 'https://folderit.net/',
        location: 'Santa Fe, Argentina',
        period: 'March 2022 - December 2023',
        achievements: [
          'Redesigned websites to enhance user satisfaction and aesthetics.',
          'Developed business logic/features for security tools and banking projects.',
          'Integrated payment platforms like Mercado Pago and Stripe.',
          'Migrated code from JavaScript to TypeScript.',
          'Fixed bugs, maintained websites, and supported new team members.',
        ],
      },
      {
        title: 'Full Stack Developer',
        company: 'Serfe',
        companyUrl: 'https://www.serfe.com/es/',
        location: 'Santa Fe, Argentina',
        period: 'January 2021 - March 2022',
        achievements: [
          'Improved UI, added features, and maintained the platform.',
          'Integrated APIs and social networks.',
          'Gathered client requirements and managed resources.',
          'Tested tasks and mentored team members.',
        ],
      },
    ],

    education: [
      {
        degree: 'Bachelor of Software Engineering (Honours)',
        institution: 'National Technological University',
        period: '2017 - 2023',
        location: 'Argentina',
      },
      {
        degree: 'Bachelor of Electromecanical Equipement and Automations',
        institution: 'Technical Education School',
        period: '2011 - 2017',
        location: 'Argentina',
      },
    ],

    languages: [
      {
        name: 'Spanish',
        level: 'Native',
      },
      {
        name: 'English',
        level: 'Advanced (C1)',
      },
      {
        name: 'Italian',
        level: 'Advanced (C1)',
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
export type LanguagesContent = typeof homeContent.resume.languages;

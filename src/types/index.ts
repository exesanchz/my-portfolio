/**
 * Type Definitions
 * 
 * Centralized type definitions for the application.
 * Add shared types, interfaces, and type guards here.
 */

/**
 * Project type for the projects page
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

/**
 * Navigation item type
 */
export interface NavItem {
  href: string;
  label: string;
}

/**
 * Social link type for footer and contact
 */
export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

/**
 * Contact form data type
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import { homeContent } from '@/content/home';

/**
 * Home page metadata
 */
export const metadata: Metadata = {
  title: 'Exequiel Sanchez - Portfolio',
  description: homeContent.hero.subtitle,
};

/**
 * Home Page Component
 *
 * Single-page portfolio with all sections:
 * - Hero section with introduction
 * - Feature grid with key highlights
 * - Skills & Technologies
 * - Resume/Experience
 * - Contact information
 *
 * All content is managed in /content/home.tsx for easy updates.
 * Sections have IDs for smooth scroll navigation via floating menu.
 */
export default function HomePage() {
  const { hero, features, skills, resume, contact } = homeContent;

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={hero.headline}
        subHeadline={hero.subHeadline}
        highlightedText={hero.highlightedText}
        subtitle={hero.subtitle}
        primaryCTA={hero.primaryCTA}
      />

      {/* Feature Grid Section */}
      <FeatureGrid features={features} />

      {/* Skills & Technologies Section */}
      <section id="skills" className="section-padding bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-h2 font-bold text-text">{skills.heading}</h2>
            <p className="mx-auto max-w-2xl text-body text-text-secondary">{skills.description}</p>
          </div>

          {/* Skills Grid */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {skills.categories.map((category, index) => (
              <div key={category.title} className="card-hover group">
                <div className="mb-4">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-button transition-colors ${
                      index === 1
                        ? 'bg-secondary/10 group-hover:bg-secondary/20'
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="mb-3 text-h4 font-semibold text-text">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="tag-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection
        summary={resume.summary}
        experiences={resume.experiences as any}
        education={resume.education as any}
      />

      {/* Contact Section */}
      <ContactSection email={contact.email} linkedin={contact.linkedin} />
    </>
  );
}

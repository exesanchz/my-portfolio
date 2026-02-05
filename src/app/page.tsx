import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import { homeContent } from '@/content/home';

/**
 * Home page metadata
 * Overrides the default metadata from layout
 */
export const metadata: Metadata = {
  title: 'Home',
  description: homeContent.hero.subtitle,
};

/**
 * Home Page Component
 * 
 * The main landing page of the portfolio.
 * Structure:
 * - Hero section with introduction and CTAs
 * - Feature grid with key highlights
 * - Skills & Technologies overview
 * 
 * All content is managed in /content/home.ts for easy updates.
 */
export default function HomePage() {
  const { hero, features, skills } = homeContent;

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
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-text mb-4">
              {skills.heading}
            </h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              {skills.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.categories.map((category, index) => (
              <div key={category.title} className="card-hover group">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-button flex items-center justify-center mb-4 transition-colors ${
                    index === 1 
                      ? 'bg-secondary/10 group-hover:bg-secondary/20' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-h4 font-semibold text-text mb-3">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
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
    </>
  );
}

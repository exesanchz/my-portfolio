'use client';

import { MapPin, ExternalLink, Download } from 'lucide-react';

/**
 * Resume Section Component
 *
 * Displays professional experience, education, and additional skills.
 * Extracted from the Resume page for single-page portfolio.
 *
 * Features:
 * - Professional summary
 * - Work experience with vertical timeline
 * - Company links with external link indicator
 * - Location display with map pin icon
 * - Responsive design
 */

interface Experience {
  readonly title: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly location: string;
  readonly period: string;
  readonly achievements: readonly string[];
  readonly isHighlighted?: boolean;
}

interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly location?: string;
}

interface Language {
  readonly name: string;
  readonly level: string;
}

interface ResumeSectionProps {
  summary: string;
  experiences: readonly Experience[];
  education: readonly Education[];
  languages: readonly Language[];
}

export default function ResumeSection({
  summary,
  experiences,
  education,
  languages,
}: ResumeSectionProps) {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Creative Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-[#511B4C]/20" />

      {/* Radial Glow Effects */}
      <div
        className="absolute right-0 top-0 h-[600px] w-[600px] opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(43, 21, 142, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-[500px] w-[500px] opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(88, 166, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #58A6FF 1px, transparent 1px),
            linear-gradient(to bottom, #58A6FF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <h2 className="text-h2 font-bold text-text">Resume</h2>
              {/* Small icon-only download button */}
              <button
                onClick={e => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/resume/resume-exequiel-sanchez.pdf';
                  link.download = 'resume-exequiel-sanchez.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-normal hover:scale-110 hover:bg-primary/20"
                aria-label="Download Resume PDF"
              >
                <Download size={18} />
              </button>
            </div>
            <p className="mx-auto max-w-2xl text-body text-text-secondary">
              Professional experience and education
            </p>
          </div>

          {/* Professional Summary */}
          <section className="mb-16">
            <h3 className="mb-4 text-h3 font-semibold text-text">Professional Summary</h3>
            <p className="text-body leading-relaxed text-text-secondary">{summary}</p>
          </section>

          {/* Work Experience */}
          <section id="work-experience" className="mb-16">
            <h3 className="mb-8 text-h3 font-semibold text-text">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <div className="mb-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <h4 className="mb-2 text-h4 font-semibold text-text">{exp.title}</h4>
                      {/* Period */}
                      <span className="text-body-sm text-text-tertiary">{exp.period}</span>
                    </div>

                    {/* Company and Location - Inline on mobile */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {/* Company with Link */}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary-light"
                      >
                        <span className="text-body font-medium">{exp.company}</span>
                        <ExternalLink
                          size={14}
                          className="opacity-60 transition-opacity group-hover/link:opacity-100"
                        />
                      </a>

                      {/* Separator dot */}
                      <span className="text-text-muted">•</span>

                      {/* Location */}
                      <div className="inline-flex items-center gap-1.5 text-text-tertiary">
                        <MapPin size={14} />
                        <span className="text-body-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="list-inside list-disc space-y-2 text-body text-text-secondary">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h3 className="mb-8 text-h3 font-semibold text-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-h4 font-semibold text-text">{edu.degree}</h4>
                      </div>
                      <span className="text-body-sm text-text-tertiary">{edu.period}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="mb-0 text-body text-text-secondary">{edu.institution}</p>
                      {edu.location && (
                        <>
                          {/* Separator dot */}
                          <span className="text-text-muted">•</span>
                          <div className="inline-flex items-center gap-1.5 text-text-muted">
                            <MapPin size={14} />
                            <span className="text-body-sm">{edu.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-16">
            <h3 className="mb-8 text-h3 font-semibold text-text">Languages</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="group rounded-card border border-[var(--color-electric-blue)] p-4 transition-all duration-normal hover:border-primary/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-h4 font-semibold text-text">{language.name}</h4>
                      <p className="text-body-sm text-text-secondary">{language.level}</p>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-[var(--color-electric-blue)] transition-transform duration-normal group-hover:scale-150" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

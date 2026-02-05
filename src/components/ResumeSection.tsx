/**
 * Resume Section Component
 *
 * Displays professional experience, education, and additional skills.
 * Extracted from the Resume page for single-page portfolio.
 */

interface Experience {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly achievements: readonly string[];
  readonly isHighlighted?: boolean;
}

interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
}

interface ResumeSectionProps {
  summary: string;
  experiences: readonly Experience[];
  education: readonly Education[];
}

export default function ResumeSection({ summary, experiences, education }: ResumeSectionProps) {
  return (
    <section id="resume" className="section-padding bg-background-elevated">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-h2 font-bold text-text">Resume</h2>
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
          <section className="mb-16">
            <h3 className="mb-8 text-h3 font-semibold text-text">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`border-l-2 pl-6 ${
                    exp.isHighlighted ? 'border-primary' : 'border-surface-border'
                  }`}
                >
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-h4 font-semibold text-text">{exp.title}</h4>
                      <p className="text-body text-text-secondary">{exp.company}</p>
                    </div>
                    <span className="text-body-sm text-text-tertiary">{exp.period}</span>
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
          <section>
            <h3 className="mb-8 text-h3 font-semibold text-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-h4 font-semibold text-text">{edu.degree}</h4>
                      <p className="text-body text-text-secondary">{edu.institution}</p>
                    </div>
                    <span className="text-body-sm text-text-tertiary">{edu.period}</span>
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

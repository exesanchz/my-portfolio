import { Mail, Github, Linkedin } from 'lucide-react';

/**
 * Contact Section Component
 *
 * Simple contact information display with social links.
 * Can be extended with a contact form in the future.
 */

interface ContactSectionProps {
  email: string;
  github?: string;
  linkedin?: string;
}

export default function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="mb-4 text-h2 font-bold text-text">Get in Touch</h2>
            <p className="text-body text-text-secondary">
              Let&apos;s connect and discuss your next project
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="card-hover group flex min-w-[200px] items-center justify-center gap-3 px-6 py-4"
            >
              <Mail className="size-5 text-primary transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="mb-1 text-caption text-text-tertiary">Email</div>
                <div className="text-body-sm font-medium text-text">{email}</div>
              </div>
            </a>

            {/* GitHub */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex min-w-[200px] items-center justify-center gap-3 px-6 py-4"
              >
                <Github className="size-5 text-primary transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="mb-1 text-caption text-text-tertiary">GitHub</div>
                  <div className="text-body-sm font-medium text-text">View Profile</div>
                </div>
              </a>
            )}

            {/* LinkedIn */}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex min-w-[200px] items-center justify-center gap-3 px-6 py-4"
              >
                <Linkedin className="size-5 text-primary transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="mb-1 text-caption text-text-tertiary">LinkedIn</div>
                  <div className="text-body-sm font-medium text-text">Connect</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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

export default function ContactSection({ 
  email, 
  github, 
  linkedin 
}: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-h2 font-bold text-text mb-4">
              Get in Touch
            </h2>
            <p className="text-body text-text-secondary">
              Let&apos;s connect and discuss your next project
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="card-hover group flex items-center gap-3 px-6 py-4 min-w-[200px] justify-center"
            >
              <Mail className="size-5 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-caption text-text-tertiary mb-1">Email</div>
                <div className="text-body-sm text-text font-medium">{email}</div>
              </div>
            </a>

            {/* GitHub */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex items-center gap-3 px-6 py-4 min-w-[200px] justify-center"
              >
                <Github className="size-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-caption text-text-tertiary mb-1">GitHub</div>
                  <div className="text-body-sm text-text font-medium">View Profile</div>
                </div>
              </a>
            )}

            {/* LinkedIn */}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex items-center gap-3 px-6 py-4 min-w-[200px] justify-center"
              >
                <Linkedin className="size-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-caption text-text-tertiary mb-1">LinkedIn</div>
                  <div className="text-body-sm text-text font-medium">Connect</div>
                </div>
              </a>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

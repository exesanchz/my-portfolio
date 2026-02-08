import { FolderCode, Send } from 'lucide-react';
import Button from './Button';

/**
 * Hero Component
 *
 * The main hero section that introduces the portfolio.
 * Features:
 * - Full-width gradient background for depth
 * - Centered layout with clear hierarchy
 * - Gradient text effect on the name/headline
 * - Primary and secondary CTAs
 * - Fully responsive with the design system
 *
 * Design Philosophy:
 * - Uses only design system tokens (colors, typography, spacing)
 * - Premium, modern aesthetic with subtle depth
 * - Clean structure for easy content updates
 */

interface HeroProps {
  /**
   * The main headline text (usually your name or greeting)
   */
  headline: string;

  /**
   * Supporting text that describes your role or focus
   */
  subHeadline: string;

  /**
   * Optional highlighted part of the headline (e.g., your name)
   * Will receive gradient treatment
   */
  highlightedText: string;

  /**
   * Supporting text that describes your role or focus
   */
  subtitle: string;

  /**
   * Text for the primary CTA button
   */
  primaryCTA: {
    text: string;
    href: string;
  };

  /**
   * Text for the secondary CTA button (optional)
   */
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  headline,
  highlightedText,
  subHeadline,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background-deep">
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />

      {/* Content Container */}
      <div className="section-padding-lg relative z-10">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            {/* Headline with Gradient Text */}
            <h1 className="mb-10 text-hero font-bold">
              <span className="text-text">{headline}</span>{' '}
              <span className="text-gradient">{highlightedText}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-text-primary mx-auto mb-0 max-w-2xl text-h3 leading-relaxed">
              {subHeadline}
            </p>

            {/* Subtitle */}
            <p className="mx-auto  mb-10 max-w-2xl text-h4 font-light leading-relaxed">
              {subtitle}
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={primaryCTA.href}
                variant="outline-gradient"
                startIcon={<Send className="mr-2 size-5" />}
              >
                {primaryCTA.text}
              </Button>

              {/*               {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant="secondary"
                >
                  {secondaryCTA.text}
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}

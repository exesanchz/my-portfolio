import { ReactNode } from 'react';
import Button from './Button';

/**
 * FeatureCard Component
 * 
 * A premium card component for the feature grid.
 * Features:
 * - Flexible content support (title, description, CTA)
 * - Optional background image with overlay
 * - Gradient backgrounds for visual impact
 * - Smooth hover interactions (elevation + glow)
 * - Fully responsive with proper text contrast
 * 
 * Design Philosophy:
 * - Modern bento-grid aesthetic
 * - Clear visual hierarchy
 * - Accessible and semantic HTML
 * - Uses only design system tokens
 */

interface FeatureCardProps {
  /**
   * Card title (main heading)
   * Optional - for image-only cards
   */
  title?: string;
  
  /**
   * Optional description text
   */
  description?: string;
  
  /**
   * Optional CTA button
   */
  cta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  
  /**
   * Optional background image URL
   */
  backgroundImage?: string;
  
  /**
   * Custom gradient for circular radiating effect
   * Format: "linear-gradient(angle, color1 start%, color2 end%)"
   * Example: "linear-gradient(135deg, #511B4C 0%, #040847 100%)"
   * Takes precedence over variant if provided
   */
  gradient?: string;
  
  /**
   * Background style variant
   * - gradient-primary: Blue to purple gradient
   * - gradient-purple: Deep purple gradient
   * - surface: Standard surface color
   * - image: Use when backgroundImage is provided
   */
  variant?: 'gradient-primary' | 'gradient-purple' | 'surface' | 'image';
  
  /**
   * Grid span configuration for responsive layout
   */
  gridSpan?: {
    /** Column span on desktop (1-2) */
    cols?: 1 | 2;
    /** Row span (1-2) */
    rows?: 1 | 2;
  };
  
  /**
   * Text alignment
   */
  textAlign?: 'left' | 'center' | 'right';
}

export default function FeatureCard({
  title,
  description,
  cta,
  backgroundImage,
  gradient,
  variant = 'surface',
  gridSpan = { cols: 1, rows: 1 },
  textAlign = 'left',
}: FeatureCardProps) {
  
  /**
   * Background styles based on variant
   */
  const getBackgroundStyles = () => {
    switch (variant) {
      case 'gradient-primary':
        return 'bg-gradient-to-br from-primary/20 via-secondary/20 to-background-deep';
      case 'gradient-purple':
        return 'bg-gradient-to-br from-[#2B158E]/30 via-[#511B4C]/30 to-background-deep';
      case 'surface':
        return 'bg-surface';
      case 'image':
        return 'bg-background-deep';
      default:
        return 'bg-surface';
    }
  };
  
  /**
   * Grid span classes for responsive layout
   */
  const gridClasses = `
    ${gridSpan.cols === 2 ? 'md:col-span-2' : 'md:col-span-1'}
    ${gridSpan.rows === 2 ? 'md:row-span-2' : 'md:row-span-1'}
  `;
  
  return (
    <div
      className={`
        relative overflow-hidden rounded-card group
        ${gradient ? '' : getBackgroundStyles()}
        ${gridClasses}
      `}
      style={gradient ? { background: gradient } : undefined}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-normal"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Optional: Add subtle overlay only if text needs more contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-deep/20 via-transparent to-background-deep/30" />
        </>
      )}
      
      {/* Content Container */}
      <div className={`
        relative z-10
        h-full min-h-[220px]
        p-8 md:p-10
        flex flex-col
        ${textAlign === 'center' ? 'items-center text-center justify-center' : textAlign === 'right' ? 'items-end text-right' : 'items-start text-left'}
        ${backgroundImage ? 'justify-end' : 'justify-center'}
        ${cta ? 'justify-around' : ''}
      `}>
        {/* Text Content - only render if title or description exist */}
        {(title || description) && (
          <div className={textAlign === 'center' ? 'max-w-md' : ''}>
            {title && (
              <h3 className="text-h3 font-bold text-text leading-tight">
                {title}
              </h3>
            )}
            
            {description && (
              <p className="text-body text-text-secondary leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* CTA Button */}
        {cta && (
          <div className="">
            <Button
              href={cta.href}
              variant="outline-gradient"
              startIcon={cta.icon}
            >
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Button Component
 *
 * A reusable button system that matches the portfolio's premium design.
 * Features:
 * - Primary variant: Filled with subtle glow effect
 * - Secondary variant: Outline style with surface background on hover
 * - Proper semantic HTML elements
 * - Full accessibility support
 * - Uses only design system tokens
 *
 * Design Philosophy:
 * - Elegant, minimal styling
 * - Clear visual hierarchy between variants
 * - Consistent sizing and spacing
 * - Premium feel with subtle effects
 */

interface ButtonProps {
  /**
   * Button text or content
   */
  children: ReactNode;

  /**
   * Button style variant
   * - primary: Filled button with primary color (for main CTAs)
   * - secondary: Outline button with subtle styling (for secondary actions)
   * - outline-gradient: Outline with gradient border effect (premium variant)
   */
  variant?: 'primary' | 'secondary' | 'outline-gradient';

  /**
   * Icon to display before the button text
   * Can be any React node (SVG, icon component, etc.)
   */
  startIcon?: ReactNode;

  /**
   * URL for link buttons
   * If provided, renders as Next.js Link
   */
  href?: string;

  /**
   * Click handler for button elements
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Button type attribute (for form buttons)
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Full width button
   */
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  startIcon,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  /**
   * Base styles shared by all buttons
   * Uses design system tokens for consistency
   */
  const baseStyles = `
    inline-flex items-center justify-center
    ${startIcon ? 'gap-2' : ''}
    rounded-button
    font-medium text-body
    transition-all duration-normal
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${fullWidth ? 'w-full' : 'min-w-[180px]'}
    ${className}
  `;

  /**
   * Primary button styles
   * - Filled with primary color
   * - Subtle glow effect on hover
   * - Active state with darker shade
   */
  const primaryStyles = `
    ${baseStyles}
    px-8 py-4
    bg-primary text-white
    hover:bg-primary-light hover:shadow-glow-primary
    active:bg-primary-dark
    focus-visible:ring-primary
  `;

  /**
   * Secondary button styles
   * - Outline with border
   * - Surface background on hover
   * - Subtle and elegant
   */
  const secondaryStyles = `
    ${baseStyles}
    px-8 py-4
    border-2 border-surface-border bg-transparent
    text-text hover:bg-surface hover:border-primary/30
    active:bg-surface-light
    focus-visible:ring-primary
  `;

  /**
   * Outline Gradient button styles
   * - Uses gradient border (#2B158E to #511B4C - deep purple gradient)
   * - Dark navy background
   * - Premium, modern look
   *
   * Note: Gradient borders require special handling.
   * We use background-clip technique with a pseudo-element effect.
   */
  const outlineGradientStyles = `
    ${baseStyles}
    relative bg-gradient-to-r from-[#2B158E] to-[#511B4C]
    p-[2px]
    hover:shadow-glow-primary
    focus-visible:ring-primary
  `;

  // Select styles based on variant
  const buttonStyles =
    variant === 'primary'
      ? primaryStyles
      : variant === 'secondary'
        ? secondaryStyles
        : outlineGradientStyles;

  /**
   * For gradient border variant, we need an inner element
   * to create the border effect with the background
   */
  const isGradientVariant = variant === 'outline-gradient';

  /**
   * Button content with optional start icon
   */
  const buttonContent = (
    <>
      {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
      {children}
    </>
  );

  const innerContent = isGradientVariant ? (
    <span
      className={`flex h-full w-full items-center justify-center rounded-[10px] bg-background px-6 py-3 text-text ${startIcon ? 'gap-2' : ''}`}
    >
      {buttonContent}
    </span>
  ) : (
    buttonContent
  );

  /**
   * Render as Link if href is provided
   */
  if (href && !disabled) {
    return (
      <Link href={href} className={buttonStyles}>
        {innerContent}
      </Link>
    );
  }

  /**
   * Render as button element
   */
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonStyles}>
      {innerContent}
    </button>
  );
}

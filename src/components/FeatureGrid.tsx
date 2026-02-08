'use client';

import { useState } from 'react';
import FeatureCard from './FeatureCard';
import Toast from './Toast';
import { homeContent } from '@/content/home';

/**
 * FeatureGrid Component
 *
 * A responsive bento-grid layout showcasing key features and highlights.
 *
 * Layout Strategy:
 * - Desktop: 2-column CSS Grid with varying card sizes
 * - Mobile: Single column with proper spacing
 * - Cards can span multiple columns/rows for visual interest
 *
 * Design Philosophy:
 * - Premium, modern aesthetic
 * - Clear visual hierarchy through size variation
 * - Smooth, subtle interactions
 * - Cohesive with the overall design system
 */

interface FeatureGridProps {
  /**
   * Array of feature card data
   */
  features: ReadonlyArray<{
    readonly id: string;
    readonly title?: string;
    readonly description?: string;
    readonly cta?: {
      readonly text: string;
      readonly href: string;
      readonly icon?: React.ReactNode;
    };
    readonly backgroundImage?: string;
    readonly gradient?: string;
    readonly variant?: 'gradient-primary' | 'gradient-purple' | 'surface' | 'image';
    readonly gridSpan?: {
      readonly cols?: 1 | 2;
      readonly rows?: 1 | 2;
    };
    readonly textAlign?: 'left' | 'center' | 'right';
  }>;
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(homeContent.contact.email);
      setToastMessage('Email copied to clipboard!');
      setShowToast(true);
    } catch (err) {
      setToastMessage('Failed to copy email');
      setShowToast(true);
    }
  };

  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/resume/resume-exequiel-sanchez.pdf';
    link.download = 'resume-exequiel-sanchez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToastMessage('Resume downloaded!');
    setShowToast(true);
  };

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* 
            CSS Grid Layout:
            - Mobile: 1 column, auto rows
            - Desktop: 2 columns, auto rows with minmax for flexibility
            - Gap ensures consistent spacing between cards
          */}
          <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                cta={feature.cta}
                backgroundImage={feature.backgroundImage}
                gradient={feature.gradient}
                variant={feature.variant}
                gridSpan={feature.gridSpan}
                textAlign={feature.textAlign}
                onEmailClick={feature.id === 'contact' ? handleEmailClick : undefined}
                onResumeDownload={feature.id === 'resume' ? handleResumeDownload : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </>
  );
}

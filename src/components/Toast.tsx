'use client';

import { useEffect } from 'react';
import { Check } from 'lucide-react';

/**
 * Toast Component
 *
 * A simple, elegant toast notification that matches the portfolio theme.
 * Features:
 * - Dark theme with gradient background
 * - Smooth fade-in/out animations
 * - Auto-dismisses after 3 seconds
 * - Success indicator icon
 *
 * Design Philosophy:
 * - Matches the dark, modern aesthetic
 * - Subtle glow effect
 * - Premium feel with smooth transitions
 */

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 z-[9999] w-max -translate-x-1/2">
      <div className="animate-slide-up flex items-center gap-3 rounded-card border border-primary/20 bg-background-elevated px-6 py-4 shadow-card-hover backdrop-blur-md">
        {/* Success Icon */}
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
          <Check size={18} className="text-primary" />
        </div>

        {/* Message */}
        <p className="text-body font-medium text-text">{message}</p>
      </div>
    </div>
  );
}

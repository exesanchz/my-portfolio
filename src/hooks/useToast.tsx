'use client';

import { useState, useCallback } from 'react';

/**
 * useToast Hook
 * 
 * Custom hook for managing toast notifications.
 * Provides a simple interface to show and hide toast messages.
 */

interface ToastState {
  show: boolean;
  message: string;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });

  const showToast = useCallback((message: string) => {
    setToast({ show: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: '' });
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
}

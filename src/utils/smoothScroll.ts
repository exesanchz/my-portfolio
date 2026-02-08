/**
 * Smooth Scroll Utility
 * 
 * Custom smooth scrolling with easing for a more fluid experience.
 * Uses requestAnimationFrame for smoother, more controlled animation.
 * Duration is longer for better mobile experience.
 */

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollToElement(targetId: string) {
  const element = document.getElementById(targetId);
  
  if (element) {
    const offset = 120; // Account for floating menu
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second for smoother scroll
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
}

export function handleHashNavigation(e: React.MouseEvent, href: string) {
  // Only handle hash links (e.g., #work-experience)
  if (href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    
    // Update URL without jumping
    history.pushState(null, '', href);
    
    // Smooth scroll to element
    smoothScrollToElement(targetId);
  }
}

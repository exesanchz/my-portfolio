/**
 * Smooth Scroll Utility
 *
 * Custom smooth scrolling with gentle easing.
 * Uses ease-in-out-quad for natural motion without dramatic speed changes.
 */

function easeInOutQuad(t: number): number {
  // Gentle ease-in-out (quadratic)
  // Much more subtle than cubic, feels natural
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function smoothScrollToPosition(targetPosition: number, duration: number = 1000) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Apply gentle easing
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export function smoothScrollToElement(targetId: string) {
  const element = document.getElementById(targetId);

  if (element) {
    const offset = 120; // Account for floating menu
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - offset;

    smoothScrollToPosition(targetPosition, 100);
  }
}

export function smoothScrollToTop() {
  smoothScrollToPosition(0, 100);
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

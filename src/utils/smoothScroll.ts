/**
 * Smooth Scroll Utility
 * 
 * Uses native browser smooth scrolling with proper offset handling.
 * Prevents default jump behavior and updates URL for hash links.
 */

export function smoothScrollToElement(targetId: string) {
  const element = document.getElementById(targetId);
  
  if (element) {
    const offset = 120; // Account for floating menu
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}

export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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

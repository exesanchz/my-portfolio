/**
 * Smooth Scroll Utility
 * 
 * Ensures consistent smooth scrolling behavior across all browsers.
 * Some browsers don't respect CSS scroll-behavior: smooth, especially
 * on initial page load or with programmatic scrolling.
 */

export function smoothScrollToElement(targetId: string) {
  const element = document.getElementById(targetId);
  
  if (element) {
    const offset = 120; // Account for floating menu
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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

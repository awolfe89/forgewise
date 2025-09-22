import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user prefers reduced motion
 * @returns {boolean} true if the user prefers reduced motion
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation variants based on reduced motion preference
 * @param {object} fullMotion - Animation variants for full motion
 * @param {object} reducedMotion - Animation variants for reduced motion
 * @returns {object} The appropriate animation variants
 */
export function getMotionVariants(fullMotion, reducedMotion) {
  if (typeof window === 'undefined') return fullMotion;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches ? reducedMotion : fullMotion;
}
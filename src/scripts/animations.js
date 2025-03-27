/**
 * animations.js - Reusable animation detection and triggering module
 * 
 * This module provides functions to initialize and manage scroll-based animations
 * using the Intersection Observer API.
 */

/**
 * Initialize animation observers for elements with animation classes
 * Call this function in your component's client-side script
 */
export function initAnimations() {
  // Create an observer for all animated elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add the visible class when the element enters the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Optionally unobserve after animation is triggered
          // Uncomment the next line if you want animations to only trigger once
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // Use the viewport as the root
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '-50px 0px', // Small offset to trigger slightly before the element is in view
    }
  );

  // Register all elements with the animate class
  document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
  });

  return observer; // Return the observer in case it needs to be modified later
}

/**
 * Manually trigger animations for specific elements
 * Useful for elements that are already in the viewport on page load
 */
export function triggerAnimations(selector) {
  const elements = document.querySelectorAll(selector || '.animate');
  elements.forEach((element) => {
    element.classList.add('visible');
  });
}

/**
 * Reset animations for specific elements
 * Useful for repeating animations
 */
export function resetAnimations(selector) {
  const elements = document.querySelectorAll(selector || '.animate');
  elements.forEach((element) => {
    element.classList.remove('visible');
  });
}

// Automatically initialize animations when the DOM is loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} 
import { useState, useRef, useEffect } from 'react';

/**
 * Custom hook that uses IntersectionObserver to track element visibility
 * for scroll-driven animations.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Visibility threshold (0-1)
 * @param {boolean} [options.triggerOnce=true] - If true, unobserve after first intersection
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export default function useScrollAnimation(options = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Graceful degradation: if IntersectionObserver is unsupported, show content immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}

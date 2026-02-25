import { useEffect, useRef } from 'react';

/**
 * Adds 'is-visible' to the returned ref's element when it enters
 * the viewport. Pair with the .reveal CSS class for the fade-up effect.
 */
const useScrollAnimation = ({ threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollAnimation;

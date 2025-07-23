import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can choose to unobserve for performance
          if (once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
        ...options
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Animation variants for different effects
export const animationVariants = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-12',
    animate: 'opacity-100 translate-y-0'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-12',
    animate: 'opacity-100 translate-x-0'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-12',
    animate: 'opacity-100 translate-x-0'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100'
  },
  slideInUp: {
    initial: 'opacity-0 translate-y-24',
    animate: 'opacity-100 translate-y-0'
  },
  staggerFadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0'
  }
};

// Reusable AnimatedSection component
export const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 700,
  className = '',
  ...options 
}) => {
  const [ref, isVisible] = useScrollAnimation(options);
  const variant = animationVariants[animation];

  return (
    <div
      ref={ref}
      className={`
        transform transition-all ease-out
        ${isVisible ? variant.animate : variant.initial}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Hook for staggered animations (useful for lists)
export const useStaggerAnimation = (itemCount, options = {}) => {
  const [ref, isVisible] = useScrollAnimation(options);
  
  return [ref, isVisible];
};

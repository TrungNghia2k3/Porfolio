import { useEffect, useState } from 'react';

const ProgressiveReveal = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Component for section separators with animated lines
export const SectionDivider = ({ delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex justify-center my-16 lg:my-24">
      <div
        className={`h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-all duration-1000 ease-out ${
          isVisible ? 'w-64' : 'w-0'
        }`}
      />
    </div>
  );
};

// Component for counting up numbers
export const CountUpNumber = ({ end, duration = 2000, delay = 0, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span>{count}{suffix}</span>;
};

export default ProgressiveReveal;

import { useEffect, useRef } from 'react';

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Add smooth scrolling behavior to anchor links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate offset for fixed header
          const headerHeight = 80; // Adjust based on your header height
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Parallax effect for hero section
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Add scroll event listener for parallax
    window.addEventListener('scroll', handleParallax, { passive: true });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll-wrapper">
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;

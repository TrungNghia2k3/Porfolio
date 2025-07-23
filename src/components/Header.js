import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // Use native smooth scrolling with better timing
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 dark:bg-black/90 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 focus:outline-none"
            >
              MyPortfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-baseline space-x-10">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-4 py-3 text-lg lg:text-xl font-medium transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-lg transition-colors duration-200 focus:outline-none ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <HiXMark className="h-7 w-7" />
              ) : (
                <HiBars3 className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`px-4 pt-4 pb-6 space-y-2 ${
            isScrolled 
              ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl mt-4 shadow-lg' 
              : 'bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-xl mt-4'
          }`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 focus:outline-none ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

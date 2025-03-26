// components/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Initial check for screen size
      setIsMobile(window.innerWidth < 1024);

      // Handle scroll for navbar background
      const handleScroll = () => {
        if (window.scrollY > 90) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      // Handle resize for mobile/desktop switch
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        if (window.innerWidth >= 1024) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      // Initial scroll check
      handleScroll();

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40">
              {scrolled ? (
                <h2 className='text-gray-800 '>Pensiune Vilcan </h2>
              ) : (
                <h2 className='text-white '>Pensiune Vilcan </h2>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Acasa
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
            Despre noi
            </Link>
            <Link 
              href="/rooms" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Camere
            </Link>
            <Link 
              href="/activities" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Activitati
            </Link>
            <Link 
              href="/gallery" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Gallerie
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={scrolled ? "black" : "white"}
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill={scrolled ? "black" : "white"}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
            
            {/* Book Now Button */}
            <Link 
              href="/book" 
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Rezerva acum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke={scrolled ? "#1a202c" : "#ffffff"} 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

{/* Mobile Menu */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/rooms" 
            className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Rooms
          </Link>
          <Link 
            href="/activities" 
            className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Activities
          </Link>
          <Link 
            href="/gallery" 
            className="font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 py-2">
            <Link href="https://instagram.com" aria-label="Instagram">
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="black"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
          
          {/* Book Now Button */}
          <Link 
            href="/book" 
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}

export default Navbar
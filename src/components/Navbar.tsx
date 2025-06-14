import React, { useState, useEffect } from 'react';
import { Menu, X, WrenchIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black bg-opacity-90 py-2 shadow-lg'
        : 'bg-gradient-to-b from-black to-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="public/logo/logo_only.png" alt="Mistique Workshop" className="h-16 w-18" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 bg-black bg-opacity-90 rounded-lg p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
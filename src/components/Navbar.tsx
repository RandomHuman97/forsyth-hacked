import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-coal/95 backdrop-blur-sm">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-brand-beige hover:text-brand-yellow transition-colors duration-200"
          >
            <div className="grid place-items-center text-center bg-brand-coal rounded-full w-10 h-10 sm:w-[56px] sm:h-[56px] border border-brand-yellow">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 32 32" 
                fill="currentColor"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <title>Hackathon Logo</title>
                <path d="M8 4L4 8V24L8 28H12L16 24L20 28H24L28 24V8L24 4H20L16 8L12 4H8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 12L16 16L12 20M20 12L16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 8L16 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-outfit text-xl sm:text-2xl">HACK FORSYTH</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-end items-center gap-8">
            <a
              href="/signup"
              className="px-6 sm:px-8 py-2 font-outfit font-semibold border-2 border-brand-yellow rounded-full uppercase text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-200"
              style={{ filter: 'drop-shadow(5px 5px 0px rgba(255,255,255,0.1))' }}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-brand-beige hover:text-brand-yellow transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 py-4 border-t border-brand-yellow/20">
            <a
              href="/signup"
              className="block w-full text-center px-6 py-3 font-outfit font-semibold border-2 border-brand-yellow rounded-full uppercase text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-200"
              style={{ filter: 'drop-shadow(5px 5px 0px rgba(255,255,255,0.1))' }}
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

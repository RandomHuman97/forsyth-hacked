import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="mx-auto container p-8 flex justify-between items-center">
      <a
        href="/"
        className="flex items-center gap-1 text-brand-beige hover:text-brand-yellow transition-colors duration-200"
      >
        <div className="grid place-items-center text-center bg-brand-coal rounded-full w-[56px] h-[56px]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
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
        <span className="font-outfit text-2xl">HACK FORSYTH</span>
      </a>

      <div className="flex justify-end items-center gap-8">
        <a
          href="/signup"
          className="px-8 py-2 font-heading font-semibold border-2 border-brand-yellow rounded-full uppercase font-medium cursor-pointer text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-200"
          style={{ filter: 'drop-shadow(5px 5px 0px rgba(255,255,255,0.1))' }}
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

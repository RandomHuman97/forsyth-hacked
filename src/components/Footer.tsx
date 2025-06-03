import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 mb-4 sm:mb-8 mx-4 sm:mx-8 py-8 bg-brand-coal dark:bg-brand-coal rounded-[20px] md:rounded-[50px] relative overflow-hidden shadow-md dark:shadow-none text-brand-beige font-outfit">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="grid place-items-center text-center bg-brand-coal rounded-full w-10 h-10 border border-brand-yellow">
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="24" 
               height="24" 
               viewBox="0 0 32 32" 
               fill="currentColor"
               className="text-brand-yellow"
             >
               <title>Hackathon Logo</title>
               <path d="M8 4L4 8V24L8 28H12L16 24L20 28H24L28 24V8L24 4H20L16 8L12 4H8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
               <path d="M12 12L16 16L12 20M20 12L16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
               <path d="M16 8L16 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
             </svg>
           </div>
           <span className="font-outfit text-xl font-semibold">HACK FORSYTH</span>
        </div>

        {/* Basic Links (optional) */}
        {/*
        <div className="flex gap-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>
        */}

        {/* Copyright/Year */}
        <p className="text-sm text-brand-beige/70">
          © {new Date().getFullYear()} Hack Forsyth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
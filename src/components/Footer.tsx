import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 mb-4 sm:mb-8 mx-4 sm:mx-8 py-8 bg-brand-coal dark:bg-brand-coal rounded-[20px] md:rounded-[50px] relative overflow-hidden shadow-md dark:shadow-none text-brand-beige font-outfit">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
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
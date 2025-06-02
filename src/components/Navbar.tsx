import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="relative bg-surface text-text font-sans py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Brand on left */}
        <div className="pl-6 text-xl font-bold z-10">
          Hack Forsyth
        </div>

        {/* Links absolutely centered on desktop */}
        <div
          className={`
            hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
          `}
        >
          <a href="#" className="inline-block mx-4 hover:underline">
            Home
          </a>
          <a href="/about" className="inline-block mx-4 hover:underline">
            About
          </a>
          <a href="/sign-up" className="inline-block mx-4 hover:underline">
            Sign Up
          </a>
        </div>

        {/* Hamburger on right */}
        <button
          className="hover:cursor-pointer sm:hidden z-20 focus:outline-none pr-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className=" w-6 h-6 text-wgold-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      
    </nav>
    {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden  bg-pop text-center  ">
          <a
            href="#"
            className="block px-4 py-3 hover:bg-wgold-300 hover:text-wblue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-3 hover:bg-wgold-300 hover:text-wblue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/sign-up"
            className="block px-4 py-3 hover:bg-wgold-300 hover:text-wblue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;

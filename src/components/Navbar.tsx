import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="mx-auto container p-8 flex justify-between items-center">
      {/* Logo */}
      <a
        href="/"
        className="grid place-items-center text-center bg-brand-charcoal rounded-full w-[56px] h-[56px] text-brand-beige hover:text-brand-yellow"
      >
        {/* Custom 'H' SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 802.1 614.06" fill="currentColor">
          <title>H Logo</title>
          <path d="M270 200V600H370V430H520V600H620V200H520V370H370V200H270Z" />
        </svg>
      </a>

      {/* Right Section */}
      <div className="flex justify-end items-center gap-8">
        {/* Theme Button */}
        <button
          className="w-[40px] h-[40px] grid place-items-center relative bg-gray-75 hover:bg-gray-100 dark:bg-brand-charcoalMuted dark:hover:bg-brand-beige/10 text-xl text-brand-charcoal dark:text-brand-beige rounded-full transition-all duration-100"
          aria-label="Toggle Theme"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </button>

        {/* Sign Up Button */}
        <a
          href="/signup"
          className="px-8 py-2 border-brand-purple dark:border-brand-yellow bg-gray-25 dark:bg-brand-coal rounded-full uppercase font-medium border-2 cursor-pointer text-brand-purple dark:text-brand-yellow hover:bg-brand-purple hover:text-brand-beige dark:hover:bg-brand-yellow dark:hover:text-brand-charcoal"
          style={{ filter: 'drop-shadow(5px 5px 0px rgba(0,0,0,1))' }}
        >
          <span className="font-black">Sign Up</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

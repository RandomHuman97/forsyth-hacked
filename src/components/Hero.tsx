import React from 'react';

const Hero = () => {
  return (
    <section className="grid mt-48 lg:grid-cols-12 gap-8 lg:gap-12 container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden sm:overflow-visible mt-24 sm:mt-28 lg:mt-32">
      {/* Left side - Text content */}
      <div className="lg:col-span-6 h-full grid items-center">
        <div className="grid gap-6 sm:gap-8">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl uppercase font-paytone text-brand-beige leading-tight">
              Code. Create. Conquer.
            </h1>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl xl:text-4xl font-outfit text-brand-beige leading-tight">
              Your Next Hackathon Awaits
            </h2>
          </header>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-[40ch] font-outfit text-brand-beige/90 leading-relaxed">
            Join the most exciting hackathon where innovation meets opportunity. Build, learn, and win amazing prizes...
          </p>
          <div className="mt-2 sm:mt-4">
            <a href="/register">
              <span className="inline-block px-6 py-3 sm:py-4 bg-brand-yellow text-brand-charcoal rounded-full uppercase font-medium border-2 border-black cursor-pointer hover:bg-brand-orange transition-colors duration-300" 
                   style={{ filter: 'drop-shadow(5px 5px 0px rgb(0, 0, 0))' }}>
                <span className="font-outfit font-bold text-sm sm:text-base">Register Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Modern Code Block */}
      <div className="lg:col-span-6 flex items-center justify-center mt-8 lg:mt-0">
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-gray-900/50">
          {/* Editor tabs */}
          <div className="flex items-center bg-gray-800/80 border-b border-gray-700 px-3 sm:px-4">
            <div className="flex space-x-2 py-2 sm:py-3">
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-3 sm:ml-4 flex text-xs sm:text-sm">
              <div className="px-2 sm:px-4 py-2 text-gray-500 border-b-2 border-transparent">index.js</div>
              <div className="px-2 sm:px-4 py-2 text-gray-500 border-b-2 border-transparent">styles.css</div>
              <div className="px-2 sm:px-4 py-2 text-brand-blue-light border-b-2 border-brand-blue-light">hackathon.json</div>
            </div>
          </div>
          
          {/* Code content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base">
            <div className="text-gray-600 mb-4">// Hackathon details - automatically updated</div>
            
            <div className="text-purple-400">{'{'}</div>
            
            <div className="ml-4 space-y-2 sm:space-y-3">
              <div>
                <span className="text-brand-blue">"event"</span>: 
                <span className="text-yellow-300"> "HackForsyth 2025"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"entry_cost"</span>: 
                <span className="text-yellow-300"> "$5"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"date"</span>: 
                <span className="text-green-400"> "2025-10-26T09:00:00Z"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"duration"</span>: 
                <span className="text-cyan-400"> "24h"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"location"</span>: 
                <span className="text-pink-400"> "Virtual"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"theme"</span>: 
                <span className="text-yellow-300"> "AI & Sustainable Tech"</span>,
              </div>
              <div>
                <span className="text-brand-blue">"prizes"</span>: 
                <span className="text-gray-400"> {'{'}</span>
                <span className="text-brand-blue">"total"</span>: 
                <span className="text-green-400"> 10000</span>,
                <span className="text-brand-blue ml-4">"currency"</span>: 
                <span className="text-yellow-300"> "USD"</span>
                <span className="text-gray-400"> {'}'}</span>,
              </div>
              <div>
                <span className="text-brand-blue">"status"</span>: 
                <span className="text-green-400"> "registration_open"</span>
              </div>
            </div>
            
            <div className="text-purple-400">{'}'}</div>
            
            <div className="mt-4 sm:mt-6 text-gray-600">
              <span className="text-green-500">//</span> Last updated: {new Date().toISOString().split('T')[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-12 gap-12 container mx-auto px-8 overflow-hidden sm:overflow-visible mt-20">
      {/* Left side - Original Text content */}
      <div className="lg:col-span-6 h-full grid items-center">
        <div className="grid gap-8">
          <header>
            <h1 className="mt-8 text-4xl lg:text-7xl uppercase font-paytone text-brand-beige">
              Code. Create. Conquer.
            </h1>
            <h2 className="mt-6 text-3xl xl:text-4xl font-outfit text-brand-beige">
              Your Next Hackathon Awaits
            </h2>
          </header>
          <p className="text-2xl max-w-[40ch] font-outfit text-brand-beige">
            Join the most exciting hackathon where innovation meets opportunity. Build, learn, and win amazing prizes...
          </p>
          <div className="mt-4">
            <a href="/register">
              <span className="px-6 py-4 bg-brand-yellow text-brand-charcoal rounded-full uppercase font-medium border-2 border-black cursor-pointer hover:bg-brand-orange transition-colors duration-300" 
                   style={{ filter: 'drop-shadow(5px 5px 0px rgb(0, 0, 0))' }}>
                <span className="font-outfit font-bold">Register Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Modern Code Block */}
      <div className="lg:col-span-6 flex items-center justify-center mt-12 lg:mt-0">
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-gray-900/50">
          {/* Editor tabs */}
          <div className="flex items-center bg-gray-800/80 border-b border-gray-700 px-4">
            <div className="flex space-x-2 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 flex text-sm">
              <div className="px-4 py-2 text-gray-500 border-b-2 border-transparent">index.js</div>
              <div className="px-4 py-2 text-gray-500 border-b-2 border-transparent">styles.css</div>
              <div className="px-4 py-2 text-brand-blue-light border-b-2 border-brand-blue-light">hackathon.json</div>
            </div>
          </div>
          
          {/* Code content */}
          <div className="p-6 font-mono text-sm md:text-base">
            <div className="text-gray-600 mb-4">// Hackathon details - automatically updated</div>
            
            <div className="text-purple-400">{'{'}</div>
            
            <div className="ml-4 space-y-3">
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
            
            <div className="mt-6 text-gray-600">
              <span className="text-green-500">//</span> Last updated: {new Date().toISOString().split('T')[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
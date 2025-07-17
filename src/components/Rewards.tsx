import React from 'react';
import { Trophy, Shield, AlarmClock, Brush } from 'lucide-react';

const RewardsSection = () => {
  const prizeCategories = [
    { name: 'Second Place', amount: '$70', icon: <Trophy/>, color: 'bg-purple-500' },
    { name: 'Grand Prize', amount: '$100', icon: <Trophy />, color: 'bg-brand-yellow' },
    { name: 'Third Place', amount: '$30', icon: <Trophy/>, color: 'bg-blue-500' },
    { name: '', amount: 'Most Historically Accurate', icon: <AlarmClock  />, color: 'bg-red-500' },
    { name: '', amount: 'Peoples Choice', icon: <Shield />, color: 'bg-green-500' },
    { name: "", amount: "Most Creative", icon: <Brush />, color: 'bg-orange-500' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-gray-500 text-lg mb-4">// REWARD STRUCTURE</h2>
          <h3 className="font-paytone text-5xl md:text-6xl text-brand-charcoal mb-6">
            <span className="relative">
              <span className="relative z-10">PRIZE</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow z-0"></span>
            </span>
            <span> CATEGORIES</span>
          </h3>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {prizeCategories.map((prize, i) => (
            <div 
              key={i}
              className={`border-2 border-black rounded-xl p-8 flex flex-col items-center text-center transition-all hover:scale-[1.02] ${prize.color} hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]`}
              style={{ filter: 'drop-shadow(5px 5px 0px rgb(0, 0, 0))' }}
            >
              <div className="w-20 h-20 rounded-full bg-white border-2 border-black flex items-center justify-center mb-6">
                {React.cloneElement(prize.icon, { className: "w-10 h-10 text-black" })}
              </div>
              <h4 className="font-paytone text-3xl mb-2 text-black">{prize.amount}</h4>
              <h5 className="font-outfit text-xl text-black uppercase font-bold mb-4">{prize.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
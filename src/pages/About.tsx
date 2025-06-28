import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if necessary

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center mt-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-3xl sm:text-4xl lg:text-7xl uppercase font-paytone text-brand-beige leading-tight">
            Code. Create. Conquer.
          </h1>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl xl:text-4xl font-outfit text-brand-beige leading-tight">
            About Hack Forsyth
          </h2>
        </header>

        <div className="mt-8 space-y-6 max-w-3xl">
          <p className="text-lg sm:text-xl lg:text-2xl font-outfit text-brand-beige/90 leading-relaxed">
            Hack Forsyth is brought to you by a passionate team of students from Forsyth County Schools. 
            We’re dedicated to fostering creativity, innovation, and collaboration through this exciting hackathon experience.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-outfit text-brand-beige/90 leading-relaxed">
            Official sponsors include the <strong>West Forsyth Data Science Club</strong> and the 
            <strong> West Forsyth Computer Science Club</strong>. Their support helps us bring this vision to life.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-outfit text-brand-beige/90 leading-relaxed">
            Big thanks to everyone contributing behind the scenes and supporting the future of tech in Forsyth County!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

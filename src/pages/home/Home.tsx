import React, { useEffect, useRef } from 'react';
import DecryptedText from '../../components/DecryptedText';

const HomePage = () => {
  const secondSectionRef = useRef(null);
  // Auto-scroll after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-text font-sans max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen relative space-y-6">
        <div className=' text-8xl sm:text-9xl '>
        <DecryptedText text="Hack Forsyth" maxIterations={20} speed={50}animateOn='view'>
        </DecryptedText>
        </div>
        <p className="text-lg max-w-xl">
          Where creativity meets code. Join us and build something amazing.
        </p>
        {/* Down arrow */}
        <div
          className="absolute bottom-20 cursor-pointer"
          onClick={() => {scrollTo}}
        >
          <svg
            className="w-10 h-10 text-wgold-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Section 1 */}
      <section
      id="content"
        ref={secondSectionRef}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 py-20 px-6"
      >
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">Collaboration & Innovation</h2>
          <p className="text-lg max-w-md">
            Collaborate, innovate, and bring your ideas to life with the support of an amazing community.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            alt="Hackathon"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-20 px-6">
        {/* Left Image */}
        <div className="md:w-1/2 order-last md:order-first">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            alt="Teamwork"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-semibold">Empowering Builders</h2>
          <p className="text-lg max-w-md">
            Get mentorship, resources, and a chance to showcase your ideas to the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path if needed
import Hero from '../components/Hero';
import WorkshopsSection from '../components/WorkshopsSection';
import RewardsSection from '../components/Rewards';
import HowItWorksSection from '../components/HowItWorksSection';
import AIPolicySection from '../components/AIPolicySection';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorksSection/>
      <AIPolicySection/>
      <WorkshopsSection />
      <RewardsSection />
    </div>
  );
};

export default Home;

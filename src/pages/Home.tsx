import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path if needed
import Hero from '../components/Hero';
import WorkshopsSection from '../components/WorkshopsSection';
import SpeakersSection from '../components/SpeakersSection';
import RewardsSection from '../components/Rewards';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorkshopsSection />
      <SpeakersSection />
      <RewardsSection />
    </div>
  );
};

export default Home;

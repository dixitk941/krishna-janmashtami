import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AnimatedSVG from '../components/AnimatedSVG';
import StoryPage from './StoryPage';
import CraftIdeasPage from './CraftIdeasPage';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
     <StoryPage />
     <CraftIdeasPage />
    </div>
  );
};

export default HomePage;
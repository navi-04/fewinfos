import React from 'react';
import Hero from '../../containers/Hero';
import AboutSection from '../../components/AboutSection';
import Gallery from '../../components/Gallery';
import OurWork from '../../components/OurWork';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Gallery />
      <OurWork />
    </div>
  );
};

export default Home;

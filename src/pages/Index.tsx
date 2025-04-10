
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import BikeMap from '../components/BikeMap';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BikeMap />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;


import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import HobbyGrid from '@/components/HobbyGrid';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import CommunityPreview from '@/components/CommunityPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add a class to the body to prevent any unwanted transitions
    document.body.classList.add('loaded');
    
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <ValueProps />
        <HobbyGrid />
        <SubscriptionPlans />
        <CommunityPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

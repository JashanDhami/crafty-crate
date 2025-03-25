
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import HobbyGrid from '@/components/HobbyGrid';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import CommunityPreview from '@/components/CommunityPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Add a spacer to prevent content from appearing under the navbar */}
      <div className="h-24 md:h-32"></div> 
      <main className="flex-grow">
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

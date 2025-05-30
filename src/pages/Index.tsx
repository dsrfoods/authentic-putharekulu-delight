
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import OriginStory from '../components/OriginStory';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import QuickOrder from '../components/QuickOrder';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Hero />
      <ProductShowcase />
      <OriginStory />
      <TrustBadges />
      <Testimonials />
      <QuickOrder />
      <Footer />
    </div>
  );
};

export default Index;

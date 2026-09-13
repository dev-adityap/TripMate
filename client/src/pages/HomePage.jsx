import React from 'react';
import TopHeader from '../components/home/TopHeader';
import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import TripsForming from '../components/home/TripsForming';
import VibeSection from '../components/home/VibeSection';
import HowItWorks from '../components/home/HowItWorks';
import WhyTripMate from '../components/home/WhyTripMate';
import FooterCTA from '../components/home/FooterCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFD] text-slate-900 font-sans pb-10">
      
      {/* Top Header for Profile & Search (Right-aligned to complement your left sidebar) */}
      <TopHeader />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 mt-4">
        
        <HeroSection />
        
        {/* Negative margin pulls the search box slightly up to overlap the hero area visually */}
        <div className="relative z-10 -mt-6 md:-mt-10">
          <SearchSection />
        </div>

        <TripsForming />
        
        <VibeSection />
        
        <HowItWorks />
        
        <WhyTripMate />

      </main>

      {/* Full width footer area */}
      <div className="mt-20">
        <FooterCTA />
      </div>

    </div>
  );
};

export default HomePage;
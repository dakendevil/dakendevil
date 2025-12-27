import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Services from '@/components/Services';
import InstagramFeed from '@/components/InstagramFeed';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>DakenDevil - Premium Graphic Design Portfolio</title>
        <meta name="description" content="DakenDevil - Designs that speak louder than words. Professional graphic designer specializing in logo design, mockups, apparel design, posters, and banner design." />
      </Helmet>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Hero />
        <Works />
        <Services />
        <InstagramFeed />
        <About />
        <Contact />
        <Toaster />
      </div>
    </>
  );
}

export default App;
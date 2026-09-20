import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SpiderWebBackground from './components/SpiderWebBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Superpowers from './components/Superpowers';
import Missions from './components/Missions';
import TrainingArc from './components/TrainingArc';
import CurrentMission from './components/CurrentMission';
import FutureUniverse from './components/FutureUniverse';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#050505', color: '#D8D8D8' }}>
      {/* Cinematic Loading Entrance */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Ambient Spider-Verse Web & Particle Background */}
      <SpiderWebBackground />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <OriginStory />
        <Superpowers />
        <Missions />
        <TrainingArc />
        <CurrentMission />
        <FutureUniverse />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

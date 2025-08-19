import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import JourneySection from './components/JourneySection/JourneySection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  const [activeLink, setActiveLink] = useState('#beranda');

  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <main>
        {/* Teruskan setActiveLink ke setiap seksi */}
        <HeroSection setActiveLink={setActiveLink} />
        <AboutSection setActiveLink={setActiveLink} />
        <SkillsSection setActiveLink={setActiveLink} />
        <JourneySection setActiveLink={setActiveLink} />
        <ServicesSection setActiveLink={setActiveLink} />
        <PortfolioSection setActiveLink={setActiveLink} />
        <ContactSection setActiveLink={setActiveLink} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
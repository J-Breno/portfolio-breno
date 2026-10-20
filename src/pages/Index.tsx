import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import DataPipeline from '@/components/DataPipeline';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import StatsCounter from '@/components/StatsCounter';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const SESSION_KEY = 'jb-intro-shown';

const Index = () => {
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) !== '1';
    } catch {
      return false;
    }
  });

  const handleLoadingComplete = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Storage unavailable (private mode): just hide the loading screen.
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loading-screen" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <DataPipeline />
        <ServicesSection />
        <SkillsSection />
        <StatsCounter />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

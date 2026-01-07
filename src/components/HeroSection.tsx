import { motion } from 'framer-motion';
import { TrendingUp, Database, Zap } from 'lucide-react';
import DataParticles from './DataParticles';
import { useLanguage } from '@/contexts/LanguageContext';
import ResumeDownloadButton from './ResumeDownloadButton';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <DataParticles />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-dark/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">{t.hero.available}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title1}{' '}
            <span className="text-gradient-gold">{t.hero.title2}</span>
            <br />
            {t.hero.title3}{' '}
            <span className="relative inline-block">
              <span className="text-gradient-gold">{t.hero.title4}</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}{' '}
            <span className="text-foreground font-medium">{t.hero.decideBetter}</span>,{' '}
            <span className="text-foreground font-medium">{t.hero.faster}</span> {t.hero.and}{' '}
            <span className="text-foreground font-medium">{t.hero.lessRisk}</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mb-12"
          >
            {[
              { icon: TrendingUp, label: t.hero.biLabel, value: t.hero.biValue },
              { icon: Database, label: t.hero.sqlLabel, value: t.hero.sqlValue },
              { icon: Zap, label: t.hero.autoLabel, value: t.hero.autoValue },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-gold/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-gradient-gold text-accent-foreground font-semibold text-lg shadow-gold hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.hero.cta1}
            </motion.a>
            <ResumeDownloadButton variant="hero" />
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const journey = [
    { icon: Sparkles, title: t.about.timeline.internship.title, description: t.about.timeline.internship.description, highlight: false },
    { icon: Briefcase, title: t.about.timeline.previous.title, description: t.about.timeline.previous.description, highlight: false },
    { icon: Target, title: t.about.timeline.current.title, description: t.about.timeline.current.description, highlight: true },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
            >
              {t.about.subtitle}
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.about.name}{' '}
              <span className="text-gradient-gold">{t.about.nameHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Value Proposition */}
            <div className="p-6 rounded-2xl bg-gradient-card border border-accent/20 shadow-glow">
              <p className="text-foreground font-medium mb-2">{t.about.valueTitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.about.valueDescription}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Vertical journey timeline */}
          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8"
            >
              {t.about.journeyTitle}
            </motion.h3>
            <div className="relative">
              {/* Animated line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                style={{ originY: 0 }}
                className="absolute left-5 md:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent/40 via-accent to-gold"
              />
              <ol className="space-y-6 md:space-y-8">
                {journey.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.35 }}
                    className="relative pl-14 md:pl-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.6 + index * 0.35 }}
                      className={`absolute left-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-card border ${
                        item.highlight ? 'border-gold shadow-[0_0_24px_-4px_hsl(var(--gold)/0.6)]' : 'border-accent/30'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${item.highlight ? 'text-gold' : 'text-accent'}`} />
                      {item.highlight && (
                        <span className="absolute inset-0 rounded-xl border border-gold animate-ping opacity-30" />
                      )}
                    </motion.div>
                    <div
                      className={`p-4 md:p-5 rounded-xl bg-gradient-card border transition-all duration-300 ${
                        item.highlight
                          ? 'border-gold/60 shadow-[0_8px_30px_-10px_hsl(var(--gold)/0.45)]'
                          : 'border-border/50 hover:border-accent/30'
                      }`}
                    >
                      {item.highlight && (
                        <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold/15 text-gold border border-gold/40">
                          {t.about.currentBadge}
                        </span>
                      )}
                      <h4 className={`font-semibold mb-2 ${item.highlight ? 'text-gold' : 'text-foreground'}`}>{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8 }}
              className="mt-8 flex gap-3 p-4 rounded-xl border border-border/50 bg-card/50"
            >
              <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{t.about.timeline.education.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.about.timeline.education.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

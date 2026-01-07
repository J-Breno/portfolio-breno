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

  const timeline = [
    {
      icon: GraduationCap,
      title: t.about.timeline.education.title,
      description: t.about.timeline.education.description,
    },
    {
      icon: Briefcase,
      title: t.about.timeline.internship.title,
      description: t.about.timeline.internship.description,
    },
    {
      icon: Target,
      title: t.about.timeline.current.title,
      description: t.about.timeline.current.description,
    },
    {
      icon: Sparkles,
      title: t.about.timeline.next.title,
      description: t.about.timeline.next.description,
    },
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

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-gradient-card border border-accent/30 flex items-center justify-center shadow-gold">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 rounded-xl bg-gradient-card border border-border/50 hover:border-accent/30 transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

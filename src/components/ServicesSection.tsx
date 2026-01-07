import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Database, Workflow, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceModal from './ServiceModal';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<'dataAnalysis' | 'sql' | 'automation' | null>(null);

  const services = [
    {
      key: 'dataAnalysis' as const,
      icon: BarChart3,
      title: t.services.dataAnalysis.title,
      description: t.services.dataAnalysis.description,
      features: t.services.dataAnalysis.features,
      modalTitle: t.services.dataAnalysis.modalTitle,
      modalDescription: t.services.dataAnalysis.modalDescription,
      modalFeatures: t.services.dataAnalysis.modalFeatures,
      color: 'from-accent to-gold-light',
    },
    {
      key: 'sql' as const,
      icon: Database,
      title: t.services.sql.title,
      description: t.services.sql.description,
      features: t.services.sql.features,
      modalTitle: t.services.sql.modalTitle,
      modalDescription: t.services.sql.modalDescription,
      modalFeatures: t.services.sql.modalFeatures,
      color: 'from-purple-dark to-primary',
    },
    {
      key: 'automation' as const,
      icon: Workflow,
      title: t.services.automation.title,
      description: t.services.automation.description,
      features: t.services.automation.features,
      modalTitle: t.services.automation.modalTitle,
      modalDescription: t.services.automation.modalDescription,
      modalFeatures: t.services.automation.modalFeatures,
      color: 'from-accent to-purple-dark',
    },
  ];

  return (
    <>
      <section id="servicos" className="py-24 relative overflow-hidden" ref={ref}>
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
            >
              {t.services.subtitle}
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.services.title}{' '}
              <span className="text-gradient-gold">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t.services.description}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <motion.div
                  className="h-full p-8 rounded-2xl bg-gradient-card border border-border/50 group hover:border-accent/30 transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setOpenModal(service.key)}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-gold group-hover:shadow-glow transition-all duration-500`}>
                    <service.icon className="w-7 h-7 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>{t.services.cta}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              {t.services.bottomText}
            </p>
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/50 text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.services.bottomCta}
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      {services.map((service) => (
        <ServiceModal
          key={service.key}
          isOpen={openModal === service.key}
          onClose={() => setOpenModal(null)}
          title={service.modalTitle}
          description={service.modalDescription}
          icon={service.icon}
          features={service.modalFeatures}
          color={service.color}
          includesLabel={t.services.modalIncludesLabel}
          ctaLabel={t.services.modalCtaLabel}
        />
      ))}
    </>
  );
};

export default ServicesSection;

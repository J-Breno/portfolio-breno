import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Database, Workflow, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Análise de Dados & BI',
    description: 'Dashboards que contam histórias e revelam oportunidades escondidas nos seus dados.',
    features: [
      'Dashboards interativos em Power BI',
      'Relatórios executivos automatizados',
      'KPIs e métricas de negócio',
      'Análise preditiva e tendências',
    ],
    color: 'from-accent to-gold-light',
  },
  {
    icon: Database,
    title: 'SQL & Engenharia de Dados',
    description: 'Dados organizados, limpos e prontos para gerar valor real para sua empresa.',
    features: [
      'Modelagem de dados eficiente',
      'Queries otimizadas e performáticas',
      'ETL e integração de fontes',
      'Qualidade e governança de dados',
    ],
    color: 'from-navy-light to-primary',
  },
  {
    icon: Workflow,
    title: 'Automação & Pipelines',
    description: 'Processos manuais transformados em fluxos automáticos que trabalham por você.',
    features: [
      'Pipelines com Airflow e Python',
      'Automação de relatórios',
      'Integração de sistemas via API',
      'Workflows com N8N',
    ],
    color: 'from-accent to-navy-light',
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
            O que posso fazer por você
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Serviços{' '}
            <span className="text-gradient-gold">Especializados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções completas para transformar a forma como sua empresa utiliza dados
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <motion.div
                className="h-full p-8 rounded-2xl bg-gradient-card border border-border/50 group hover:border-accent/30 transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
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
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
            Precisa de algo específico? Vamos conversar sobre seu projeto.
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
            Solicitar Proposta
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Code2, 
  Cloud, 
  GitBranch, 
  Workflow,
  Container,
  MessageSquare,
  Cpu
} from 'lucide-react';

const skills = [
  { 
    icon: FileSpreadsheet, 
    name: 'Excel', 
    level: 'Avançado',
    description: 'Fórmulas complexas, VBA, análises dinâmicas'
  },
  { 
    icon: BarChart3, 
    name: 'Power BI', 
    level: 'Avançado',
    description: 'DAX, modelagem, dashboards executivos'
  },
  { 
    icon: Database, 
    name: 'SQL', 
    level: 'Avançado',
    description: 'PostgreSQL, MySQL, queries otimizadas'
  },
  { 
    icon: Code2, 
    name: 'Python', 
    level: 'Intermediário',
    description: 'Pandas, automações, análise de dados'
  },
  { 
    icon: Workflow, 
    name: 'Airflow', 
    level: 'Intermediário',
    description: 'Orquestração de pipelines de dados'
  },
  { 
    icon: Container, 
    name: 'Docker', 
    level: 'Intermediário',
    description: 'Containerização e ambientes isolados'
  },
  { 
    icon: Cpu, 
    name: 'N8N', 
    level: 'Intermediário',
    description: 'Automação de workflows e integrações'
  },
  { 
    icon: Cloud, 
    name: 'AWS', 
    level: 'Básico',
    description: 'S3, Lambda, conceitos de cloud'
  },
  { 
    icon: GitBranch, 
    name: 'Git', 
    level: 'Intermediário',
    description: 'Versionamento e colaboração'
  },
  { 
    icon: MessageSquare, 
    name: 'Comunicação', 
    level: 'Forte',
    description: 'Apresentação de insights e storytelling'
  },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

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
            Expertise Técnica
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Habilidades &{' '}
            <span className="text-gradient-gold">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stack moderna e comprovada para entregar resultados de alto impacto
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Name */}
                <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>

                {/* Level Badge */}
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                  {skill.level}
                </span>

                {/* Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 rounded-lg bg-card border border-border shadow-card opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-20"
                  initial={false}
                >
                  <p className="text-xs text-muted-foreground text-center">
                    {skill.description}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-card" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">Aprendizado contínuo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">Metodologias ágeis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">Foco em resultados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

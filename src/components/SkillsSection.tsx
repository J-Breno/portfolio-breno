import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Code2, 
  GitBranch, 
  Workflow,
  MessageSquare,
  Users,
  Brain,
  ClipboardCheck,
  Activity,
  Cloud,
  Wind,
  Container
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  { icon: FileSpreadsheet, name: 'Excel', description: 'Fórmulas complexas, VBA, análises dinâmicas' },
  { icon: BarChart3, name: 'Power BI', description: 'DAX, modelagem, dashboards executivos' },
  { icon: Database, name: 'SQL', description: 'PostgreSQL, MySQL, queries otimizadas' },
  { icon: Code2, name: 'Python', description: 'Pandas, automações, análise de dados' },
  { icon: Workflow, name: 'N8N', description: 'Automação de workflows e integrações' },
  { icon: GitBranch, name: 'Git', description: 'Versionamento e colaboração' },
  { icon: Activity, name: 'Zabbix', description: 'Monitoramento e análise de métricas' },
  { icon: BarChart3, name: 'Grafana', description: 'Dashboards e visualização de dados' },
  { icon: Cloud, name: 'AWS', description: 'Serviços cloud e infraestrutura' },
  { icon: Wind, name: 'Airflow', description: 'Orquestração de pipelines de dados' },
  { icon: Container, name: 'Docker', description: 'Containerização e deploy' },
  { icon: MessageSquare, name: 'Comunicação', description: 'Apresentação de insights e storytelling' },
  { icon: Users, name: 'Trabalho em Equipe', description: 'Colaboração efetiva em times' },
  { icon: Brain, name: 'Pensamento Analítico', description: 'Tomada de decisão baseada em dados' },
  { icon: ClipboardCheck, name: 'SCRUM', description: 'Gestão ágil de projetos e sprints' },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
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

  const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      <motion.div
        className="p-4 rounded-2xl bg-gradient-card border border-border/50 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer h-full"
        whileHover={{ y: -5, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Icon */}
        <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <skill.icon className="w-5 h-5 text-accent" />
        </div>

        {/* Name */}
        <h4 className="font-semibold text-foreground text-xs">{skill.name}</h4>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-2 rounded-lg bg-card border border-border shadow-card opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-20"
          initial={false}
        >
          <p className="text-xs text-muted-foreground text-center">
            {skill.description}
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-card" />
        </motion.div>
      </motion.div>
    </motion.div>
  );

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
            {t.skills.subtitle}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.skills.title}{' '}
            <span className="text-gradient-gold">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.skills.description}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
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
              <span className="text-muted-foreground text-sm">{t.skills.footer1}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">{t.skills.footer2}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">{t.skills.footer3}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

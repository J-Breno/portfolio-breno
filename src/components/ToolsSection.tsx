import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BarChart3, 
  Database, 
  Code2, 
  Workflow, 
  GitBranch, 
  Activity,
  LineChart,
  Cloud,
  Wind,
  Container
} from 'lucide-react';

const tools = [
  { icon: BarChart3, name: 'Power BI', color: 'from-yellow-500 to-orange-500' },
  { icon: Code2, name: 'Python', color: 'from-blue-500 to-cyan-500' },
  { icon: Database, name: 'SQL', color: 'from-indigo-500 to-purple-500' },
  { icon: BarChart3, name: 'Excel', color: 'from-green-500 to-emerald-500' },
  { icon: Workflow, name: 'N8N', color: 'from-orange-500 to-red-500' },
  { icon: GitBranch, name: 'Git', color: 'from-gray-500 to-slate-600' },
  { icon: Activity, name: 'Zabbix', color: 'from-red-500 to-pink-500' },
  { icon: LineChart, name: 'Grafana', color: 'from-orange-400 to-yellow-500' },
  { icon: Cloud, name: 'AWS', color: 'from-orange-500 to-amber-500' },
  { icon: Wind, name: 'Airflow', color: 'from-teal-500 to-cyan-500' },
  { icon: Container, name: 'Docker', color: 'from-blue-400 to-blue-600' },
];

const ToolsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t.tools?.subtitle || 'Tech Stack'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t.tools?.title || 'Ferramentas &'}{' '}
            <span className="text-gradient-gold">{t.tools?.titleHighlight || 'Tecnologias'}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.tools?.description || 'As ferramentas que domino para entregar soluções de dados de alto impacto'}
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications/Badges placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            {t.tools?.certNote || '+ Certificações em Power BI, SQL e metodologias ágeis'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart3, Database, Network, Code2 } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const StatsCounter = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { t, language } = useLanguage();
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { 
      icon: Database,
      value: t.stats.records.value,
      suffix: '',
      label: t.stats.records.label
    },
    { 
      icon: Network,
      value: t.stats.sources.value,
      suffix: '',
      label: t.stats.sources.label
    },
    { 
      icon: Code2,
      value: t.stats.apis.value,
      suffix: '',
      label: t.stats.apis.label
    },
    { 
      icon: BarChart3,
      value: t.stats.dashboards.value,
      suffix: '',
      label: t.stats.dashboards.label
    },
  ];

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts(stats.map(stat => Math.floor(stat.value * easeOut)));
      
      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats.map(stat => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section ref={ref} className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {counts[index].toLocaleString(language)}{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

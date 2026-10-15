import { motion } from 'framer-motion';
import { Database, Download, Shuffle, Warehouse, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Database, Download, Shuffle, Warehouse, BarChart3];
const PACKETS = [0, 1, 2, 3];

const DataPipeline = () => {
  const { t } = useLanguage();
  const p = t.pipeline;

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-gold">{p.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            <span className="text-gradient-gold">{p.title}</span>
          </h2>
          <p className="text-muted-foreground">{p.subtitle}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Track: vertical on mobile, horizontal on desktop */}
          <div className="pipeline-track absolute left-7 top-7 bottom-7 w-px md:left-[10%] md:right-[10%] md:top-7 md:bottom-auto md:w-auto md:h-px">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-accent/20 via-accent/60 to-gold origin-top md:origin-left"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            {PACKETS.map((i) => (
              <span
                key={i}
                className="pipeline-packet"
                style={{ animationDelay: `${i * 1}s` }}
              />
            ))}
          </div>

          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            {p.steps.map((step: { title: string; desc: string }, i: number) => {
              const Icon = icons[i];
              const last = i === p.steps.length - 1;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  className="flex items-center gap-5 md:flex-col md:text-center md:gap-4"
                >
                  <div
                    className={`relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border bg-card shadow-sm ${
                      last ? 'border-gold/60 text-gold' : 'border-accent/30 text-accent'
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-2xl pipeline-pulse ${last ? 'bg-gold/20' : 'bg-accent/15'}`}
                      style={{ animationDelay: `${i * 0.8}s` }}
                    />
                    <Icon className="relative w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-1">0{i + 1}</p>
                    <h3 className={`font-semibold ${last ? 'text-gold' : 'text-foreground'}`}>{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DataPipeline;

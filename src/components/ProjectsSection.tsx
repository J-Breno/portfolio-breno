import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectModal from './ProjectModal';

// Import project images
import customerAnalyticsImg from '@/assets/projects/customer-analytics.png';
import financehubImg from '@/assets/projects/financehub.png';
import opsMonitorImg from '@/assets/projects/ops-monitor.png';

const imageMap: Record<string, string> = {
  'customer-analytics': customerAnalyticsImg,
  'financehub': financehubImg,
  'ops-monitor': opsMonitorImg,
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = t.projects.items;

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.projects.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t.projects.title} </span>
            <span className="text-gradient-gold">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setOpenModal(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={imageMap[project.id]}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-background/90 backdrop-blur-sm">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {projects.map((project) => (
        <ProjectModal
          key={project.id}
          isOpen={openModal === project.id}
          onClose={() => setOpenModal(null)}
          name={project.name}
          description={project.description}
          image={imageMap[project.id]}
          link={project.link}
          viewProjectLabel={t.projects.viewProject}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;

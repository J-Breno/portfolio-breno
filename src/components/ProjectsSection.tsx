import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectModal from './ProjectModal';

// Import project images
import realXMetaImg from '@/assets/projects/real-x-meta.png';
import realXMetaComercialImg from '@/assets/projects/real-x-meta-comercial.png';
import mrBolosImg from '@/assets/projects/mr-bolos.png';
import realXMetaControladoriaImg from '@/assets/projects/real-x-meta-controladoria.png';
import financeiroDreImg from '@/assets/projects/financeiro-dre.png';
import heavyPowerNutritionImg from '@/assets/projects/heavy-power-nutrition.png';

const imageMap: Record<string, string> = {
  'real-x-meta': realXMetaImg,
  'real-x-meta-comercial': realXMetaComercialImg,
  'mr-bolos': mrBolosImg,
  'real-x-meta-controladoria': realXMetaControladoriaImg,
  'financeiro-dre': financeiroDreImg,
  'heavy-power-nutrition': heavyPowerNutritionImg,
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = t.projects.items;
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const pageItems = projects.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);
  const count = pageItems.length;
  // Card width adapts to how many projects are on the page so the grid always feels full
  const itemWidth =
    count === 1
      ? 'w-full'
      : count === 2 || count === 4
        ? 'w-full md:w-[calc(50%-1rem)]'
        : 'w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]';

  const goTo = (p: number) => {
    setPage(p);
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <div className="flex flex-wrap justify-center gap-8">
          {pageItems.map((project, index) => (
            <motion.div
              key={`${currentPage}-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setOpenModal(project.id)}
              className={`group cursor-pointer ${itemWidth}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                {/* Project Image */}
                <div className={`relative overflow-hidden ${count === 1 ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}`}>
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

        {totalPages > 1 && (
          <nav aria-label="Paginação de projetos" className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 0}
              aria-label="Página anterior"
              className="p-2 rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
                aria-current={i === currentPage ? 'page' : undefined}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors border ${
                  i === currentPage
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              aria-label="Próxima página"
              className="p-2 rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        )}
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

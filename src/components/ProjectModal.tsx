import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ModalProject {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectModalProps {
  projects: ModalProject[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  labels: { viewProject: string; previous: string; next: string; close: string };
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const ProjectModal = ({ projects, index, onIndexChange, onClose, labels }: ProjectModalProps) => {
  const isOpen = index !== null && index >= 0;
  const [direction, setDirection] = useState(0);
  const total = projects.length;

  const go = (dir: number) => {
    if (!isOpen || total < 2) return;
    setDirection(dir);
    onIndexChange((index! + dir + total) % total);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const project = isOpen ? projects[index!] : null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                onClick={onClose}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-card border border-border shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Dialog.Close asChild>
                    <button
                      className="absolute right-4 top-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={labels.close}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>

                  <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                      <motion.div
                        key={project.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <div className="relative w-full aspect-video overflow-hidden">
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        </div>
                        <div className="p-6 space-y-6">
                          <Dialog.Title className="text-2xl font-bold text-foreground pr-8">{project.name}</Dialog.Title>
                          <div className="text-muted-foreground whitespace-pre-line leading-relaxed">{project.description}</div>
                          <Button
                            onClick={() => window.open(project.link, '_blank')}
                            className="w-full bg-gradient-gold text-accent-foreground hover:opacity-90 transition-opacity font-semibold py-6"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            {labels.viewProject}
                          </Button>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {total > 1 && (
                    <div className="flex items-center justify-between gap-2 border-t border-border bg-card px-3 py-3 sm:px-6">
                      <Button variant="outline" size="sm" onClick={() => go(-1)} aria-label={labels.previous}>
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">{labels.previous}</span>
                      </Button>
                      <span className="text-sm font-medium tabular-nums text-muted-foreground" aria-live="polite">
                        {index! + 1} / {total}
                      </span>
                      <Button variant="outline" size="sm" onClick={() => go(1)} aria-label={labels.next}>
                        <span className="hidden sm:inline">{labels.next}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default ProjectModal;

import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  image: string;
  link: string;
  viewProjectLabel: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  name,
  description,
  image,
  link,
  viewProjectLabel,
}: ProjectModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
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
                  className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <Dialog.Close asChild>
                    <button
                      className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>

                  {/* Project Image */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Title */}
                    <Dialog.Title className="text-2xl font-bold text-foreground">
                      {name}
                    </Dialog.Title>

                    {/* Description */}
                    <Dialog.Description asChild>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {description}
                      </div>
                    </Dialog.Description>

                    {/* CTA Button */}
                    <Button
                      onClick={() => window.open(link, '_blank')}
                      className="w-full bg-gradient-gold text-accent-foreground hover:opacity-90 transition-opacity font-semibold py-6"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {viewProjectLabel}
                    </Button>
                  </div>
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

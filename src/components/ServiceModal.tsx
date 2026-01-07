import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, LucideIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  color: string;
  includesLabel: string;
  ctaLabel: string;
}

const ServiceModal = ({ isOpen, onClose, title, description, icon: Icon, features, color, includesLabel, ctaLabel }: ServiceModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-glow"
                  onClick={(e) => e.stopPropagation()}
                >
                {/* Header */}
                <div className={`relative p-6 md:p-8 pb-6 bg-gradient-to-br ${color} rounded-t-2xl`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  
                  <Dialog.Title className="text-xl md:text-2xl lg:text-3xl font-bold text-accent-foreground mb-2 pr-10">
                    {title}
                  </Dialog.Title>
                  
                  <Dialog.Description className="text-accent-foreground/80 leading-relaxed text-sm md:text-base">
                    {description}
                  </Dialog.Description>

                  <Dialog.Close asChild>
                    <motion.button
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-accent-foreground hover:bg-background/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </Dialog.Close>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-6">
                    {includesLabel}
                  </h4>
                  
                  <div className="grid gap-3 md:gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="p-3 md:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-accent/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-foreground mb-1 text-sm md:text-base">{feature.title}</h5>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      setTimeout(() => {
                        const element = document.querySelector('#contato');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="mt-6 md:mt-8 w-full inline-flex items-center justify-center px-6 py-3 md:py-4 rounded-xl bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:shadow-glow transition-all text-sm md:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {ctaLabel}
                  </motion.a>
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

export default ServiceModal;

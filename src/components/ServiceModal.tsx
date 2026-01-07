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
}

const ServiceModal = ({ isOpen, onClose, title, description, icon: Icon, features, color }: ServiceModalProps) => {
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-glow z-50 p-0"
              >
                {/* Header */}
                <div className={`relative p-8 pb-6 bg-gradient-to-br ${color} rounded-t-2xl`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4"
                  >
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </motion.div>
                  
                  <Dialog.Title className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
                    {title}
                  </Dialog.Title>
                  
                  <Dialog.Description className="text-accent-foreground/80 leading-relaxed">
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
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-foreground mb-6">
                    O que inclui:
                  </h4>
                  
                  <div className="grid gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-accent/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-foreground mb-1">{feature.title}</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
                    className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:shadow-glow transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Falar sobre este serviço
                  </motion.a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default ServiceModal;

import { motion } from 'framer-motion';
import { BarChart3, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { id: 'inicio', label: t.nav.home },
    { id: 'servicos', label: t.nav.services },
    { id: 'sobre', label: t.nav.about },
    { id: 'contato', label: t.nav.contact },
  ];

  return (
    <footer className="py-8 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              João<span className="text-gradient-gold">Breno</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            {t.footer.madeWith} <Heart className="w-4 h-4 text-accent" /> {t.footer.in} {new Date().getFullYear()}
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(`#${link.id}`);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResumeDownloadButtonProps {
  variant?: 'header' | 'hero';
}

const ResumeDownloadButton = ({ variant = 'header' }: ResumeDownloadButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cvOptions = [
    { label: t.nav.cvPortuguese, flag: '🇧🇷', file: '/cv/curriculo-joao-breno-portugues.pdf' },
    { label: t.nav.cvEnglish, flag: '🇺🇸', file: '/cv/curriculo-joao-breno-ingles.pdf' },
    { label: t.nav.cvSpanish, flag: '🇪🇸', file: '/cv/curriculo-joao-breno-espanhol.pdf' },
  ];

  const handleDownload = (filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'curriculo.pdf';
    link.click();
    setIsOpen(false);
  };

  const buttonStyles = variant === 'hero' 
    ? "flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-medium text-lg hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300"
    : "flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:shadow-glow transition-all duration-300";

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonStyles}
        whileHover={{ scale: variant === 'hero' ? 1.02 : 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Download className="w-4 h-4" />
        {t.nav.downloadCV}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 rounded-lg bg-card border border-border shadow-lg z-50 overflow-hidden"
          >
            {cvOptions.map((option) => (
              <button
                key={option.file}
                onClick={() => handleDownload(option.file)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors text-left"
              >
                <span className="text-xl">{option.flag}</span>
                <span className="text-foreground">{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDownloadButton;

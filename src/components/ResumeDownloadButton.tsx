import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResumeDownloadButtonProps {
  variant?: 'header' | 'hero';
}

const ResumeDownloadButton = ({ variant = 'header' }: ResumeDownloadButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('cv-dropdown-portal');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.right - 256,
        width: 256,
      });
    }
  }, [isOpen]);

  // Update position on scroll/resize when open
  useEffect(() => {
    if (!isOpen) return;
    
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 8,
          left: rect.right - 256,
          width: 256,
        });
      }
    };

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

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
    : "flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:shadow-glow transition-all duration-300";

  const dropdownContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cv-dropdown-portal"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: position.top,
            left: Math.max(16, position.left),
            width: position.width,
            zIndex: 99999,
          }}
          className="rounded-lg bg-card border border-border shadow-xl overflow-hidden"
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
  );

  return (
    <div className="relative">
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={buttonStyles}
        whileHover={{ scale: variant === 'hero' ? 1.02 : 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Download className="w-4 h-4" />
        {t.nav.downloadCV}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {typeof document !== 'undefined' && createPortal(dropdownContent, document.body)}
    </div>
  );
};

export default ResumeDownloadButton;

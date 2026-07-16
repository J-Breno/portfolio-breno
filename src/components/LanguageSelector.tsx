import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, languageNames } from '@/i18n/translations';
import FlagIcon from './FlagIcon';

const languages: Language[] = ['pt-BR', 'en-US', 'es-ES'];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border hover:border-accent/30 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FlagIcon lang={language} className="w-5 h-[14px]" />
        <span className="text-sm text-foreground hidden sm:inline">{languageNames[language]}</span>
        <ChevronDown 
          className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-44 py-2 rounded-xl bg-card border border-border shadow-card z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary/50 transition-colors ${
                  language === lang ? 'bg-accent/10 text-accent' : 'text-foreground'
                }`}
                whileHover={{ x: 4 }}
              >
                <FlagIcon lang={lang} className="w-6 h-[17px]" />
                <span className="text-sm font-medium">{languageNames[lang]}</span>
                {language === lang && (
                  <motion.div
                    layoutId="activeLanguage"
                    className="ml-auto w-2 h-2 rounded-full bg-accent"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;

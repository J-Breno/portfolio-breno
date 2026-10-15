import { useContext, useState, ReactNode, useMemo } from 'react';
import { translations, Language } from '@/i18n/translations';
import { LanguageContext, type TranslationType } from './language-context';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language] as TranslationType,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

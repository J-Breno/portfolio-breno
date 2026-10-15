import { createContext } from 'react';
import type { Language, translations } from '@/i18n/translations';

export type TranslationType = typeof translations['pt-BR'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

// Keep context identity independent of provider and translation hot updates.
export const LanguageContext = createContext<LanguageContextType | null>(null);
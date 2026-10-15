import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(onComplete, 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loading-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      aria-busy="true"
      aria-live="polite"
    >
      <motion.h1
        className="loading-name text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        João Breno
      </motion.h1>

      <div className="loading-bar-track h-1.5 w-56 overflow-hidden rounded-full sm:w-72">
        <motion.div
          className="loading-bar-fill h-full rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        className="loading-text text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.loading.text}
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;

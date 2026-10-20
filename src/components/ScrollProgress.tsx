import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => setVisible(v > 0.01 && v < 0.99));
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left pointer-events-none"
      style={{ scaleX: width }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-accent/60 via-accent to-accent/60"
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;

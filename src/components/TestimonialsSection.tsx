import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import iarlleyPhoto from '@/assets/testimonials/iarlley-gomes.png';
import lucasPhoto from '@/assets/testimonials/lucas-guilherme.png';
import pedroPhoto from '@/assets/testimonials/pedro-davi.png';
import eduardoPhoto from '@/assets/testimonials/eduardo-ferreira.png';

const photoMap: Record<string, string | null> = {
  'Iarlley Gomes': iarlleyPhoto,
  'Lucas Guilherme': lucasPhoto,
  'Pedro Davi': pedroPhoto,
  'Eduardo Ferreira': eduardoPhoto,
  'Dnivaldo A O Filho': null,
};

const initialsMap: Record<string, string> = {
  'Dnivaldo A O Filho': 'DF',
};

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = t.testimonials?.items || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const currentTestimonial = testimonials[current];
  const photo = currentTestimonial ? photoMap[currentTestimonial.author] : null;
  const initials = currentTestimonial ? initialsMap[currentTestimonial.author] : null;

  if (!currentTestimonial) return null;

  return (
    <section id="depoimentos" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t.testimonials?.subtitle || 'Recomendações'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            {t.testimonials?.title || 'O que dizem'}{' '}
            <span className="text-gradient-gold">{t.testimonials?.titleHighlight || 'sobre mim'}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.testimonials?.description || 'Feedback de colegas, gestores e clientes com quem trabalhei'}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative"
            >
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
              
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 italic max-w-3xl mx-auto">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex flex-col items-center gap-3">
                {photo ? (
                  <img 
                    src={photo} 
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30">
                    <span className="text-accent font-semibold text-lg">
                      {initials || currentTestimonial.author?.charAt(0) || '?'}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'bg-accent w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

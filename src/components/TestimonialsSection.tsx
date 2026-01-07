import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = t.testimonials?.items || [
    {
      quote: 'Profissional dedicado e com excelente capacidade analítica. Entrega resultados consistentes e de alta qualidade.',
      author: 'Seu Nome Aqui',
      role: 'Cargo / Empresa',
      avatar: '👤',
    },
    {
      quote: 'Ótima comunicação e habilidade de transformar dados complexos em insights acionáveis para o negócio.',
      author: 'Outro Nome',
      role: 'Cargo / Empresa',
      avatar: '👤',
    },
    {
      quote: 'Proativo, organizado e sempre buscando aprender novas tecnologias. Recomendo fortemente!',
      author: 'Mais Um Nome',
      role: 'Cargo / Empresa',
      avatar: '👤',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-20 bg-background">
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
        <div className="relative max-w-3xl mx-auto">
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
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">{testimonials[current].avatar}</span>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
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

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            {t.testimonials?.note || '💡 Adicione depoimentos reais de colegas, gestores ou clientes aqui'}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

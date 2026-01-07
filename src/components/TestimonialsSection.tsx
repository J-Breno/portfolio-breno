import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import iarlleyPhoto from '@/assets/testimonials/iarlley-gomes.png';
import lucasPhoto from '@/assets/testimonials/lucas-guilherme.png';
import pedroPhoto from '@/assets/testimonials/pedro-davi.png';
import eduardoPhoto from '@/assets/testimonials/eduardo-ferreira.png';

const testimonials = [
  {
    quote: 'Tive a oportunidade de acompanhar seu trabalho e posso destacar o profissionalismo e a motivação que demonstra em cada desafio. Possui sólida experiência em soluções lógicas e se destaca pela forma como analisa cenários e propõe soluções práticas e eficazes. Além da competência técnica, impressiona também pela rapidez em aprender novas tecnologias e pela disposição em compartilhar conhecimento, agregando muito valor às equipes em que atua.',
    author: 'Iarlley Gomes',
    role: 'Network Analyst | NOC | FCF',
    photo: iarlleyPhoto,
  },
  {
    quote: 'João Breno, uma pessoa disciplinada, talentosa e comunicativa. Tem grande conhecimento na área da programação, domina as principais ferramentas e está sempre se dedicando aos estudos para se aprimorar ainda mais, foi muito bom ter aprendido tanto com ele.',
    author: 'Lucas Guilherme',
    role: 'Analista de Dados | Excel | Power BI | SQL',
    photo: lucasPhoto,
  },
  {
    quote: 'João Breno é um profissional com excelente domínio em programação, sempre disposto a aprender e a encarar novos desafios. Sua dedicação e talento fazem a diferença na equipe.',
    author: 'Pedro Davi',
    role: 'Analista de Monitoramento',
    photo: pedroPhoto,
  },
  {
    quote: 'João Breno é um profissional que se destaca pelo grande conhecimento em programação, pela vontade constante de aprender e pelo raciocínio lógico rápido. Sua capacidade de evolução é admirável e inspiradora, mostrando sempre que está pronto para encarar novos desafios e crescer ainda mais. É um privilégio ter alguém tão dedicado e talentoso na equipe!',
    author: 'Eduardo Ferreira',
    role: 'Analista de Monitoramento',
    photo: eduardoPhoto,
  },
  {
    quote: 'Breno é um colaborador que logo conquista sua confiança por conta da sua capacidade técnica, comprometimento e facilidade de relacionamento, é um excelente profissional para desenvolvimento ágil, pois tem muita facilidade para o trabalho em equipe, se aplica nas atividades e demandando pouca gerência. Recomendo o seu trabalho sem dúvidas. Focado no resultado, tem grande capacidade de tornar projetos em realidade. Entre suas virtudes destaco sua capacidade técnica e a facilidade de captar novos conhecimentos.',
    author: 'Dnivaldo A O Filho',
    role: 'Analista de Redes e de comunicação de dados',
    photo: null,
    initials: 'DF',
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const currentTestimonial = testimonials[current];

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
                {currentTestimonial.photo ? (
                  <img 
                    src={currentTestimonial.photo} 
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/30">
                    <span className="text-accent font-semibold text-lg">
                      {currentTestimonial.initials}
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

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeToggle from "@/components/ThemeToggle";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-hero overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-16 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Top bar: brand + theme and language controls */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
            <BarChart3 className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            João<span className="text-gradient-gold">Breno</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </motion.header>

      {/* Message */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative inline-block mb-10"
          >
            <h1 className="text-8xl md:text-[9rem] leading-none font-black text-gradient-gold">404</h1>
            <motion.span
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-2/3 rounded-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            {t.notFound.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t.notFound.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-gold text-accent-foreground font-semibold text-lg shadow-gold hover:shadow-glow transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                {t.notFound.cta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            {t.notFound.tried}{" "}
            <code className="px-2 py-1 rounded-md bg-secondary/60 border border-border text-foreground font-mono text-xs">
              {location.pathname}
            </code>
          </motion.p>
        </div>
      </main>

      {/* Minimal footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 py-6 border-t border-border/50"
      >
        <p className="container mx-auto px-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          {t.footer.madeWith} <Heart className="w-4 h-4 text-accent" /> {t.footer.in} {new Date().getFullYear()}
        </p>
      </motion.footer>
    </div>
  );
};

export default NotFound;

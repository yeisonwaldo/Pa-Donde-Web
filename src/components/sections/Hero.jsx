import { motion } from 'framer-motion';
import { Play, Apple } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Badge from '../ui/Badge';
import { HERO_CONTENT } from '../../constants/content';

const FloatingCard = ({ emoji, text, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute glass-card rounded-2xl px-4 py-3 flex items-center gap-2 z-10 ${className}`}
  >
    <span className="text-lg">{emoji}</span>
    <span className="text-sm font-semibold text-navy dark:text-white whitespace-nowrap">{text}</span>
  </motion.div>
);

const FloatingChip = ({ text, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute z-10 ${className}`}
  >
    <div className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-primary/30 cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
      {text}
    </div>
  </motion.div>
);

const PhoneMockup = () => (
  <div className="relative w-[220px] sm:w-[240px] lg:w-[270px] mx-auto">
    {/* Phone frame */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="animate-float"
      style={{ transform: 'rotate(2deg)' }}
    >
      <div className="relative rounded-[36px] border-[5px] border-gray-900 dark:border-navy2 bg-gray-900 dark:bg-navy2 shadow-2xl shadow-primary/20 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-gray-900 dark:bg-navy2 rounded-b-2xl z-20" />

        {/* Screen — blank placeholder for real app screenshot */}
        <div className="relative bg-white dark:bg-slate-100 aspect-[9/19.5] rounded-[31px] overflow-hidden">
          {/* Replace this div with an <img> of your real app screenshot */}
          {/* Example: <img src="/app-screenshot.png" alt="Pa' Donde app" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </motion.div>

    {/* Floating cards */}
    <FloatingCard
      emoji="📍"
      text="Arboletes, Antioquia"
      className="-left-6 sm:-left-14 top-6 sm:top-10"
      delay={0}
    />
    <FloatingCard
      emoji="🏍️"
      text="Moto — $3.500 COP"
      className="-right-6 sm:-right-14 top-24 sm:top-28"
      delay={0.15}
    />
    <FloatingCard
      emoji="⭐"
      text="4.9 Calificación"
      className="-left-4 sm:-left-12 bottom-24 sm:bottom-28"
      delay={0.3}
    />
    <FloatingChip
      text="Pedir →"
      className="-right-4 sm:-right-10 bottom-12 sm:bottom-16"
      delay={0.45}
    />

    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] -z-10" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 lg:pb-0 overflow-hidden">
      {/* Background — Light mode: white + grid | Dark mode: navy gradient */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-navy dark:via-navy dark:to-navy2" />
      <div className="absolute inset-0 grid-pattern-light dark:opacity-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Text Content — Left */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <AnimatedSection delay={0}>
              <Badge>{HERO_CONTENT.badge}</Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className="mt-6 font-heading font-extrabold text-navy dark:text-white"
                style={{
                  fontSize: 'clamp(40px, 6vw, 70px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                {HERO_CONTENT.title.line1}
                <br />
                <span className="text-primary">{HERO_CONTENT.title.moto}</span>
                {HERO_CONTENT.title.conjunction}
                <span className="text-secondary">{HERO_CONTENT.title.chivita}</span>
                <br />
                {HERO_CONTENT.title.line2}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-8 text-base sm:text-[17px] text-gray-500 dark:text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {HERO_CONTENT.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#descargar"
                  className="inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-navy font-bold py-3.5 px-7 rounded-full hover:bg-black dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/10"
                >
                  <Play size={18} fill="currentColor" />
                  Android
                </a>
                <a
                  href="#descargar"
                  className="inline-flex items-center justify-center gap-3 bg-white dark:bg-transparent border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-white font-bold py-3.5 px-7 rounded-full hover:bg-gray-50 dark:hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Apple size={18} />
                  iOS
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
                {/* Overlapping avatars */}
                <div className="flex -space-x-2">
                  {[
                    'bg-gradient-to-br from-primary to-accent',
                    'bg-gradient-to-br from-secondary to-primary',
                    'bg-gradient-to-br from-accent to-secondary',
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${bg} border-2 border-white dark:border-navy flex items-center justify-center`}
                    >
                      <span className="text-[10px] font-bold text-white">
                        {['J', 'M', 'A'][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 dark:text-muted">
                  {HERO_CONTENT.socialProof}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Phone Mockup — Right */}
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

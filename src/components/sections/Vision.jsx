import AnimatedSection from '../ui/AnimatedSection';
import { VISION } from '../../constants/content';

const Vision = () => {
  return (
    <section className="section-dark py-20 lg:py-28 relative noise-overlay grid-pattern">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Statement */}
          <div>
            <AnimatedSection>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-4">
                {VISION.label}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-white leading-tight text-balance">
                {VISION.statement}
              </h2>
            </AnimatedSection>
          </div>

          {/* Right — Highlights */}
          <div className="space-y-6">
            {VISION.highlights.map((item, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.1} direction="right">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-extrabold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

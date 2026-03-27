import AnimatedSection from '../ui/AnimatedSection';
import { PLACES } from '../../constants/content';

const PlaceCard = ({ place, index }) => (
  <AnimatedSection delay={index * 0.08}>
    <div className="glass-card glass-card-hover rounded-2xl p-5 transition-all duration-300 group cursor-default">
      <div className="flex items-start gap-4">
        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {place.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-heading font-extrabold text-white mb-1">
            {place.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            {place.description}
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/60 border border-white/10">
            {place.tag}
          </span>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const Places = () => {
  return (
    <section className="section-dark py-20 lg:py-28 relative">
      {/* Gradient connection from Vision */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
              Destinos populares
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              {PLACES.title}
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PLACES.items.map((place, i) => (
            <PlaceCard key={place.name} place={place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;

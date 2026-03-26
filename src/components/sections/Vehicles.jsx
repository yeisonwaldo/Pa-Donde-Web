import { Check } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { VEHICLES } from '../../constants/content';

const VehicleCard = ({ vehicle, index }) => {
  const isBlue = vehicle.theme === 'blue';
  const colors = {
    bg: isBlue ? 'bg-[#EFF9FF]' : 'bg-[#F0FDF9]',
    text: isBlue ? 'text-primary' : 'text-secondary',
    badge: isBlue ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary',
    check: isBlue ? 'text-primary' : 'text-secondary',
    glow: isBlue
      ? 'hover:shadow-primary/20'
      : 'hover:shadow-secondary/20',
    border: isBlue ? 'border-primary/10' : 'border-secondary/10',
  };

  return (
    <AnimatedSection delay={index * 0.15} direction={index === 0 ? 'left' : 'right'}>
      <div
        className={`${colors.bg} rounded-3xl p-8 lg:p-10 border ${colors.border} 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.glow} group`}
      >
        {/* Emoji + Title */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">
            {vehicle.emoji}
          </span>
          <div>
            <h3 className={`text-2xl lg:text-3xl font-heading font-extrabold ${colors.text}`}>
              {vehicle.type}
            </h3>
            <p className="text-sm text-muted mt-1">{vehicle.tagline}</p>
          </div>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {vehicle.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full ${colors.badge} flex items-center justify-center flex-shrink-0`}>
                <Check size={12} />
              </div>
              <span className="text-sm text-navy/80 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <p className={`text-2xl font-heading font-extrabold ${colors.text}`}>
            {vehicle.price}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Vehicles = () => {
  return (
    <section id="vehiculos" className="section-light py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
              Tipos de vehículo
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy">
              Elige cómo quieres moverte
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Moto para velocidad, chivita para más espacio. Tú decides.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {VEHICLES.map((vehicle, i) => (
            <VehicleCard key={vehicle.type} vehicle={vehicle} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;

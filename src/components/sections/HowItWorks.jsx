import { motion } from 'framer-motion';
import { Smartphone, MapPin, Bike } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { HOW_IT_WORKS } from '../../constants/content';

const iconMap = {
  '📱': <Smartphone size={28} />,
  '📍': <MapPin size={28} />,
  '🛵': <Bike size={28} />,
};

const StepCard = ({ step, index }) => (
  <AnimatedSection delay={index * 0.15}>
    <Card className="bg-white border border-gray-100 text-center relative group hover:shadow-2xl hover:shadow-primary/10">
      {/* Step number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/30">
        {step.number}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mt-4 mb-4 group-hover:scale-110 transition-transform duration-300">
        {iconMap[step.icon] || <span className="text-2xl">{step.icon}</span>}
      </div>

      {/* Content */}
      <h3 className="text-lg font-heading font-extrabold text-navy mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{step.description}</p>
    </Card>
  </AnimatedSection>
);

const ConnectingLine = () => (
  <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-20 z-0">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
    />
  </div>
);

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {HOW_IT_WORKS.badge}
            </Badge>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy">
              {HOW_IT_WORKS.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
              {HOW_IT_WORKS.subtitle}
            </p>
          </AnimatedSection>
        </div>

        <div className="relative">
          <ConnectingLine />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

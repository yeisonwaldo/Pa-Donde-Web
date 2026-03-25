import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { DRIVERS } from '../../constants/content';

const Drivers = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    city: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola, quiero ser conductor en Pa' Donde 🏍️%0ANombre: ${form.name}%0ATeléfono: ${form.phone}%0AVehículo: ${form.vehicle}%0ACiudad: ${form.city}`;
    window.open(
      `https://wa.me/${DRIVERS.whatsappNumber}?text=${msg}`,
      '_blank'
    );
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${DRIVERS.whatsappNumber}?text=${encodeURIComponent(DRIVERS.whatsappMessage)}`,
      '_blank'
    );
  };

  const inputStyles =
    'w-full bg-light border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all';
  const selectStyles =
    'w-full bg-light border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none';

  return (
    <section id="conductores" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Benefits */}
          <div>
            <AnimatedSection>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                🏍️ {DRIVERS.badge}
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy">
                {DRIVERS.title}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="mt-4 text-base text-muted max-w-md">
                {DRIVERS.subtitle}
              </p>
            </AnimatedSection>

            <div className="mt-8 space-y-5">
              {DRIVERS.benefits.map((benefit, i) => (
                <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{benefit.emoji}</span>
                    </div>
                    <p className="text-base font-semibold text-navy">
                      {benefit.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <Button
                variant="green"
                className="mt-8"
                onClick={openWhatsApp}
              >
                <MessageCircle size={18} />
                Quiero ser conductor →
              </Button>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="bg-light rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-xl font-heading font-extrabold text-navy mb-6">
                Regístrate como conductor
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    className={inputStyles}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="300 123 4567"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputStyles}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Tipo de vehículo
                  </label>
                  <select
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    className={selectStyles}
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="Moto">Moto</option>
                    <option value="Chivita">Chivita</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Ciudad
                  </label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={selectStyles}
                    required
                  >
                    <option value="">Selecciona...</option>
                    {DRIVERS.cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={16} />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Drivers;

import AnimatedSection from '../ui/AnimatedSection';
import { DOWNLOAD, DRIVERS } from '../../constants/content';

const Download = () => {
  return (
    <section
      id="descargar"
      className="section-dark py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {DOWNLOAD.title}
            <br />
            <span className="gradient-text">{DOWNLOAD.titleLine2}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto">
            {DOWNLOAD.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Google Play button */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 glass-card rounded-2xl px-8 py-4 text-white font-bold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <img
                src="/google-play.png"
                alt="Google Play"
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
              />
              <div className="text-left">
                <span className="text-[10px] text-white/50 block uppercase tracking-wider">
                  Próximamente en
                </span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </a>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${DRIVERS.whatsappNumber}?text=${encodeURIComponent('Hola, quiero saber más sobre Pa\' Donde 🏍️')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl px-8 py-4 text-white font-bold transition-all duration-300 hover:-translate-y-1"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert" />
              {DOWNLOAD.whatsappText}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Download;

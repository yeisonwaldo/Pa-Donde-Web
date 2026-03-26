import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { FAQ_ITEMS } from '../../constants/content';

const FAQItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 text-left group"
        >
          <span className="text-base font-semibold text-navy pr-4 group-hover:text-primary transition-colors">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown
              size={20}
              className={`transition-colors ${
                isOpen ? 'text-primary' : 'text-muted'
              }`}
            />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5">
                <p className="text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-light py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
              Preguntas frecuentes
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy">
              ¿Tienes dudas?
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

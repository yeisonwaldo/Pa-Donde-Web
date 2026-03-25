import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const variants = {
    up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

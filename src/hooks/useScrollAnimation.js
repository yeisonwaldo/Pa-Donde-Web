import { useRef } from 'react';
import { useInView } from 'framer-motion';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  });

  return { ref, isInView };
};

export default useScrollAnimation;

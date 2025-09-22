import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Fade in animation
export const FadeIn = ({ children, delay = 0, duration = 0.5 }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  return (
    <motion.div
      initial={prefersReducedMotion || isStatic ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion || isStatic ? { duration: 0 } : { duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation
export const ScaleIn = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  return (
    <motion.div
      initial={prefersReducedMotion || isStatic ? { opacity: 1, scale: 1 } : { scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={prefersReducedMotion || isStatic ? { duration: 0 } : { duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
};

// Slide in from left
export const SlideInLeft = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  return (
    <motion.div
      initial={prefersReducedMotion || isStatic ? { opacity: 1, x: 0 } : { x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={prefersReducedMotion || isStatic ? { duration: 0 } : { duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Slide in from right
export const SlideInRight = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  return (
    <motion.div
      initial={prefersReducedMotion || isStatic ? { opacity: 1, x: 0 } : { x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={prefersReducedMotion || isStatic ? { duration: 0 } : { duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animations
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  if (prefersReducedMotion || isStatic) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, index = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const isStatic = typeof window === 'undefined';

  if (prefersReducedMotion || isStatic) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Hover scale animation
export const HoverScale = ({ children, scale = 1.05 }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
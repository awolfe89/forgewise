import { motion } from 'framer-motion';

/**
 * Base card component with common animations and styling
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hoverEffect - Enable hover effect (default: true)
 * @param {string} props.hoverType - Type of hover effect: 'lift' or 'scale' (default: 'lift')
 * @param {Object} props.animationProps - Override default animation props
 */
export default function BaseCard({ 
  children, 
  className = '', 
  hoverEffect = true,
  hoverType = 'lift',
  animationProps = {},
  ...props 
}) {
  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
    ...(hoverEffect && {
      whileHover: hoverType === 'scale' ? { scale: 1.05 } : { y: -5 }
    }),
    ...animationProps
  };

  return (
    <motion.div
      {...defaultAnimation}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
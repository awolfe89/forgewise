import CategoryTag from './CategoryTag';

/**
 * Reusable card header component
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Optional subtitle
 * @param {Object} props.category - Category object with text and variant
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {string} props.className - Additional CSS classes
 */
export default function CardHeader({ 
  title, 
  subtitle,
  category,
  icon,
  className = '' 
}) {
  return (
    <div className={`${className}`}>
      {(category || icon) && (
        <div className="flex items-center justify-between mb-3">
          {category && (
            <CategoryTag 
              text={category.text} 
              variant={category.variant || 'blue'}
              size={category.size || 'sm'}
            />
          )}
          {icon && <div className="text-2xl">{icon}</div>}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-sm text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
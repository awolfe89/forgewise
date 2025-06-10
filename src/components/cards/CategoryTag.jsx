/**
 * Component for displaying category or type tags
 * @param {Object} props
 * @param {string} props.text - Tag text
 * @param {string} props.variant - Color variant: 'blue', 'green', 'red', 'yellow', 'gray', or custom
 * @param {string} props.size - Size: 'sm', 'md', 'lg' (default: 'sm')
 * @param {string} props.icon - Optional icon to display before text
 * @param {string} props.className - Additional CSS classes
 */
export default function CategoryTag({ 
  text, 
  variant = 'blue',
  size = 'sm',
  icon,
  className = ''
}) {
  const variants = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    red: 'bg-red-100 text-red-700 border-red-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200'
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const colorClasses = variants[variant] || variant;
  const sizeClasses = sizes[size];

  return (
    <span className={`inline-flex items-center font-medium rounded-full border ${colorClasses} ${sizeClasses} ${className}`}>
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
}
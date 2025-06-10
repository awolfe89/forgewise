/**
 * Component for displaying feature or benefit lists
 * @param {Object} props
 * @param {Array} props.features - Array of feature strings or objects
 * @param {string} props.icon - Icon type: 'check', 'arrow', 'bullet', or custom icon element
 * @param {string} props.iconColor - Color class for the icon
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.compact - Use compact spacing (default: false)
 */
export default function FeatureList({ 
  features = [], 
  icon = 'check',
  iconColor = 'text-green-500',
  className = '',
  compact = false
}) {
  if (features.length === 0) return null;

  const getIcon = () => {
    switch (icon) {
      case 'check':
        return (
          <svg className={`h-5 w-5 ${iconColor} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'arrow':
        return <span className={`${iconColor} mr-2`}>→</span>;
      case 'bullet':
        return <span className={`${iconColor} mr-2`}>•</span>;
      default:
        return typeof icon === 'string' ? <span className={`${iconColor} mr-2`}>{icon}</span> : icon;
    }
  };

  const spacing = compact ? 'space-y-1' : 'space-y-2';

  return (
    <ul className={`${spacing} ${className}`}>
      {features.map((feature, index) => {
        const text = typeof feature === 'string' ? feature : feature.text;
        const subtext = typeof feature === 'object' ? feature.subtext : null;
        
        return (
          <li key={index} className="flex items-start">
            <span className="mt-0.5 mr-2">{getIcon()}</span>
            <div className="flex-1">
              <span className="text-gray-700">{text}</span>
              {subtext && <p className="text-sm text-gray-500 mt-0.5">{subtext}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
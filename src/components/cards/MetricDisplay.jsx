/**
 * Component for displaying metrics in a consistent format
 * @param {Object} props
 * @param {Array} props.metrics - Array of metric objects with label and value
 * @param {string} props.layout - Layout type: 'grid', 'inline', or 'list' (default: 'grid')
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.valueClassName - CSS classes for value styling
 * @param {string} props.labelClassName - CSS classes for label styling
 */
export default function MetricDisplay({ 
  metrics = [], 
  layout = 'grid',
  className = '',
  valueClassName = 'text-2xl font-bold text-gray-900',
  labelClassName = 'text-sm text-gray-600'
}) {
  if (metrics.length === 0) return null;

  const layoutClasses = {
    grid: 'grid grid-cols-2 md:grid-cols-3 gap-4',
    inline: 'flex flex-wrap gap-6',
    list: 'space-y-3'
  };

  const renderMetric = (metric, index) => (
    <div key={index} className={layout === 'list' ? 'flex justify-between' : ''}>
      <span className={labelClassName}>{metric.label}</span>
      <span className={valueClassName}>{metric.value}</span>
    </div>
  );

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {metrics.map((metric, index) => renderMetric(metric, index))}
    </div>
  );
}
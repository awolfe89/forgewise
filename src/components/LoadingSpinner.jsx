export default function LoadingSpinner({ size = 'medium', message = '', fullScreen = false }) {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} border-blue-200 border-t-blue-700 rounded-full animate-spin`}></div>
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export function LoadingDots() {
  return (
    <span className="inline-flex items-center">
      <span className="animate-bounce animation-delay-0 inline-block w-1 h-1 bg-current rounded-full mx-0.5"></span>
      <span className="animate-bounce animation-delay-200 inline-block w-1 h-1 bg-current rounded-full mx-0.5"></span>
      <span className="animate-bounce animation-delay-400 inline-block w-1 h-1 bg-current rounded-full mx-0.5"></span>
    </span>
  );
}